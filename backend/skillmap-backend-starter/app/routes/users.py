from fastapi import APIRouter, Depends
from app.dependencies import get_current_user

router = APIRouter(prefix="/users", tags=["Users"])

@router.get("/me")
def read_me(current_user: str = Depends(get_current_user)):
    return {"email": current_user}
