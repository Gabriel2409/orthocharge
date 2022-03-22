import os
import pathlib

import pytest
import requests
from app.application_factory import create_application
from app.config import Settings, get_settings
from app.firebase_config import initialize_firebase_app
from dotenv import load_dotenv
from fastapi.testclient import TestClient
from pydantic.env_settings import BaseSettings

load_dotenv(pathlib.Path(__file__).parents[1] / ".testenv")


def get_settings_override() -> BaseSettings:
    """Overrides the settings for testing
    Returns:
        BaseSettings: fastapi testing settings
    """

    return Settings(environment="test", testing=True, debug=False)


@pytest.fixture(scope="module")
def test_app() -> TestClient:
    """yields the test_app to use in all the tests
    Yields:
        the test app
    """

    app = create_application()
    # TODO separate firebase app and test app
    initialize_firebase_app()
    app.dependency_overrides[get_settings] = get_settings_override
    with TestClient(app) as test_client:

        # testing
        yield test_client

    # tear down


@pytest.fixture(scope="module")
def firebase_auth_token() -> str:
    """Uses gooleapis to connect as a dummy user and retrieves the bearer token
    Yields:
        the test app
    """
    api_key = os.getenv("FIREBASE_CONFIG_API_KEY", "")
    url = f"https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key={api_key}"
    email = os.getenv("EMAIL", "")
    password = os.getenv("PASSWORD", "")

    body = {"email": email, "password": password, "returnSecureToken": True}
    res = requests.post(url, body)
    return res.json()["idToken"]
