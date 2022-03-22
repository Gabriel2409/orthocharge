from app.config import Settings, get_settings, oauth2_scheme
from app.firebase_config import get_firebase_user_from_token
from fastapi import APIRouter, Depends, HTTPException

router = APIRouter()


@router.get("/")
async def hello(settings: Settings = Depends(get_settings)):
    """Basic route to check that everything works
    Args:
        settings (Settings, optional): the fastapi setting.
        Defaults to Depends(get_settings).
    Returns:
        json: message to show that everythig works
    """
    return {
        "Hello": "World",
        "environment": settings.environment,
        "testing": settings.testing,
        "debug": settings.debug,
    }


@router.get("/userid")
async def get_userid(token: str = Depends(oauth2_scheme)):
    """gets the firebase userid of the connected user
    Returns:
        json: the user info
    """
    user = get_firebase_user_from_token(token)
    if not user:
        raise HTTPException(status_code=401, detail="User not authenticated")
    return {"user_id": user["user_id"]}
