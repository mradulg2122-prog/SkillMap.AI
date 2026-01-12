# 🚀 SkillMap AI

SkillMap AI is an intelligent web application that analyzes a student's
resume, compares it with real job-role requirements, and generates:

-   📊 Skill Gap Score\
-   ❌ Missing Skills\
-   🛣️ Personalized Learning Path

It helps students understand *how job-ready they are* and *what exactly
they need to learn* for their dream role.

------------------------------------------------------------------------

## 🧠 How It Works

1.  User signs up and logs in\
2.  Uploads their **Resume (PDF/DOCX)**\
3.  Selects a **Target Job Role**\
4.  Our AI engine:
    -   Extracts skills from resume\
    -   Matches them with job-role requirements\
    -   Calculates **Skill Gap Score**\
    -   Finds **Missing Skills**\
5.  Frontend displays:
    -   Match percentage\
    -   Missing skills\
    -   Personalized roadmap

------------------------------------------------------------------------

## 🏗️ Tech Stack

### Frontend

-   React + TypeScript\
-   Vite\
-   Tailwind CSS\
-   ShadCN UI

### Backend

-   FastAPI (Python)\
-   REST APIs\
-   CORS-enabled\
-   Resume parsing (PDF & DOCX)

### ML / AI Logic

-   Skill extraction using NLP\
-   Dataset-driven job-role mapping\
-   Skill gap calculation engine

------------------------------------------------------------------------

## 📂 Project Structure

    SKILLMAP/
    │
    ├── backend/
    │   └── skillmap-backend-starter/
    │       ├── app/
    │       ├── job_descriptions.csv
    │       ├── skill_master_list_skillmap_ai.csv
    │       └── main.py
    │
    ├── frontend/
    │   └── skillmap-insights-main/
    │       ├── src/
    │       └── package.json
    │
    └── README.md

------------------------------------------------------------------------

## ▶️ How to Run Locally

### 1️⃣ Backend

``` bash
cd backend/skillmap-backend-starter
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs at:

    http://localhost:8000

Swagger UI:

    http://localhost:8000/docs

------------------------------------------------------------------------

### 2️⃣ Frontend

``` bash
cd frontend/skillmap-insights-main
npm install
npm run dev
```

Frontend runs at:

    http://localhost:8080

------------------------------------------------------------------------

## ✨ Features

-   Resume upload (PDF/DOCX)
-   Job-role based analysis
-   Skill gap score calculation
-   Missing skills detection
-   Real-time frontend-backend-ML integration
-   Clean modern UI

------------------------------------------------------------------------

## 🎯 Vision

SkillMap AI aims to become a **personal career companion** for students:

> "Not just tell you *what* you lack --- but guide you *how* to fix it."

------------------------------------------------------------------------

## 👨‍💻 Team

Built by passionate students with a vision to bridge the gap between\
**education** and **industry expectations**.

------------------------------------------------------------------------

## 📜 License

This project is for educational and research purposes.
