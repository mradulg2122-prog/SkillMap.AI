import pdfplumber
from docx import Document

def extract_resume_text(file_path):
    text = ""

    if file_path.endswith(".pdf"):
        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                if page.extract_text():
                    text += page.extract_text() + " "

    elif file_path.endswith(".docx"):
        doc = Document(file_path)
        text = " ".join([p.text for p in doc.paragraphs])

    return text.lower()
