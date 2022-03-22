import logging
from typing import Optional

import firebase_admin
from firebase_admin.auth import verify_id_token


def initialize_firebase_app():
    """initializes the firebase app with the correct credentials"""
    default_app = firebase_admin.initialize_app()
    return default_app


def get_firebase_user_from_token(token: str) -> Optional[dict]:
    """Uses bearer token to identify firebase user id

    Args:
        token (str): the bearer token

    Returns:
        dict: the firebase user
    """
    log = logging.getLogger("uvicorn")
    try:
        user = verify_id_token(token)
        return user
    # lots of possible exceptions, see firebase_admin.auth
    except Exception:
        log.error("Authentication failed")
        user = None
    return user
