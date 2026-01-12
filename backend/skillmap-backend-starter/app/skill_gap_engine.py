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
You are a friendly career mentor.

A student wants to become a {job_role}.
They have {duration} to prepare.
Their missing skills are: {', '.join(missing_skills)}.

Create a beautiful, easy-to-read, beginner-friendly learning roadmap.

Format it like this:

Week 1: <Title>
Topics:
- ...

What to Learn:
- ...

Practice Tasks:
- ...

Use simple English.
Keep it motivating and human.
Avoid long paragraphs.
Make it feel like a personal study plan, not a textbook.

End with a short motivational line for the student.
"""


    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
    )

    return response.choices[0].message.content
