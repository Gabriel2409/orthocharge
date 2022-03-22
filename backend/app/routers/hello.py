from app.config import Settings, get_settings
from fastapi import APIRouter, Depends

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
