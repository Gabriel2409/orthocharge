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
