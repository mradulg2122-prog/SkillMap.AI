from fastapi import APIRouter, UploadFile, Form
import pandas as pd
import shutil
import os

from app.skill_gap_engine import extract_skills, calculate_skill_gap_score
from app.resume_parser import extract_resume_text

router = APIRouter(prefix="/skill-gap", tags=["Skill Gap"])

# =================================================
# FIXED: Base directory (project root)
# =================================================
BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.dirname(os.path.abspath(__file__))
    )
)

# =================================================
# Load Job Descriptions Dataset
# =================================================
jobs = pd.read_csv(
    os.path.join(BASE_DIR, "job_descriptions.csv")
)

# =================================================
# Load Skill Master Dataset (COLUMN AUTO-DETECT)
# =================================================
skills_df = pd.read_csv(
    os.path.join(BASE_DIR, "skill_master_list_skillmap_ai.csv")
)

skill_column = skills_df.columns[0]  # auto pick first column

skill_db = set(
    skills_df[skill_column]
    .astype(str)
    .str.lower()
    .str.strip()
)

# =================================================
# API Endpoint
# =================================================
@router.post("/analyze")
async def analyze_resume(
    resume: UploadFile,
    job_role: str = Form(...)
):
    # -----------------------------
    # Save resume temporarily
    # -----------------------------
    temp_path = f"temp_{resume.filename}"
    with open(temp_path, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)

    try:
        # -----------------------------
        # Extract resume text
        # -----------------------------
        resume_text = extract_resume_text(temp_path)

        # -----------------------------
        # Extract resume skills
        # -----------------------------
        resume_skills = extract_skills(resume_text, skill_db)

        # -----------------------------
        # Get selected job role skills
        # -----------------------------
        job_row = jobs[jobs["job_role"] == job_role]

        if job_row.empty:
            return {
                "error": f"Job role '{job_role}' not found"
            }

        job_required_skills = extract_skills(
            job_row.iloc[0]["required_skills"].lower(),
            skill_db
        )

        # -----------------------------
        # Skill Gap Calculation
        # -----------------------------
        score, matched, missing = calculate_skill_gap_score(
            resume_skills, job_required_skills
        )

        return {
            "job_role": job_role,
            "skill_gap_score": score,
            "matched_skills": list(matched),
            "missing_skills": list(missing)
        }

    finally:
        # -----------------------------
        # Clean temp file
        # -----------------------------
        if os.path.exists(temp_path):
            os.remove(temp_path)
