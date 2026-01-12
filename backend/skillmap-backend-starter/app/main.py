from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel
from app.skill_gap_engine import generate_roadmap


from app.database import engine
from app.models import Base
from app.routes.auth import router as auth_router
from app.routes.skillgap import router as skillgap_router

app = FastAPI(title="SkillMap AI Backend")

# -----------------------------
# CORS Configuration
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8080",
        "https://skill-map-ai-eight.vercel.app"  # yahan apna Vercel URL daalna
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Uncomment if you want DB tables auto-create
# Base.metadata.create_all(bind=engine)

# Existing routes
app.include_router(auth_router, prefix="/auth", tags=["Auth"])

# Skill Gap (ML) route
app.include_router(skillgap_router, prefix="/ml", tags=["ML"])

@app.get("/")
def root():
    return {"message": "SkillMap AI backend is running"}

class RoadmapRequest(BaseModel):
    job_role: str
    missing_skills: list[str]
    duration: str


@app.post("/ml/roadmap")
async def create_roadmap(req: RoadmapRequest):
    roadmap = await generate_roadmap(
        req.job_role,
        req.missing_skills,
        req.duration
    )
    return {"roadmap": roadmap}



