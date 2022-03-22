import logging
import os
import pathlib
from functools import lru_cache

from dotenv import load_dotenv
from pydantic import BaseSettings

log = logging.getLogger("uvicorn")
basedir = pathlib.Path(__file__).parents[1]
load_dotenv(basedir / ".env")


class Settings(BaseSettings):
    """Main settings"""

    environment: str = os.getenv("ENVIRONMENT", "dev")
    testing: bool = bool(os.getenv("TESTING", 0))
    debug: bool = bool(os.getenv("DEBUG", 0))


@lru_cache()
def get_settings() -> BaseSettings:
    """Retrieves the settings
    Returns:
        BaseSettings: the fastapi settings
    """
    log.info("----Loading config settings from the environment----")
    return Settings()
