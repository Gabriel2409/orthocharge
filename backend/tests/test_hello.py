from fastapi.testclient import TestClient


def test_hello(test_app: TestClient):
    """tests the /hello route
    Args:
        test_app (TestClient): the test client
    """

    # Given
    # test_app

    # When
    response = test_app.get("/")

    # Then
    assert response.status_code == 200, "Wrong status code"
    assert response.json() == {
        "Hello": "World",
        "environment": "test",
        "testing": True,
        "debug": False,
    }


def test_user_id_fail(test_app: TestClient):
    """ensures authentication fails if token is empty or invalid"""
    response = test_app.get("/userid")
    assert response.status_code == 401

    response = test_app.get("/userid", headers={"Authorization": "dfdf"})
    assert response.status_code == 401


def test_user_id_success(test_app: TestClient, firebase_auth_token: str):
    """ensures authentication succeeds if token is correct"""

    response = test_app.get(
        "/userid",
        headers={"Authorization": f"Bearer {firebase_auth_token}"},
    )
    assert response.status_code == 200
    assert response.json()["user_id"] == "GDSAqxQOmWXdTkgu5cFK5lomLJs1"
