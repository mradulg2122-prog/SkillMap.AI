import re
import os
from openai import OpenAI

# ------------------ Existing Logic ------------------

def extract_skills(text, skill_db):
    text = re.sub(r"[^a-zA-Z\s]", " ", text.lower())
    found = set()
    for skill in skill_db:
        if skill.lower() in text:
            found.add(skill)
    return found


def calculate_skill_gap_score(resume_skills, job_required_skills):
    if len(job_required_skills) == 0:
        return 0, set(), set()

    matched_skills = resume_skills.intersection(job_required_skills)
    missing_skills = job_required_skills - resume_skills

    score = (len(matched_skills) / len(job_required_skills)) * 100
    score = round(score, 2)

    return score, matched_skills, missing_skills


# ------------------ AI Roadmap Logic ------------------

client = OpenAI(api_key=os.getenv("OPENAI-API KEY"))

async def generate_roadmap(job_role: str, missing_skills: list[str], duration: str):
    if not missing_skills:
        return "You already match all required skills. No roadmap is needed 🎉"

    prompt = f"""
A student wants to become a {job_role}.
They have {duration} to prepare.
Missing skills: {', '.join(missing_skills)}.

Create a beginner-friendly learning roadmap.
Break it week-wise.
Each week should include:
- Topics
- What to study
- Small practice tasks

Use simple and clear language.
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
    )

    return response.choices[0].message.content
