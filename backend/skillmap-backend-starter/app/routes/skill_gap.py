from fastapi import APIRouter
from app.skill_gap_engine import analyze_skill_gap

router = APIRouter()

@router.post("/skill-gap")
def get_skill_gap(data: dict):
    user_skills = data.get("user_skills")
    target_role = data.get("target_role")

    result = analyze_skill_gap(user_skills, target_role)
    return result
