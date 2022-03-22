from app.middlewares import add_events
from app.routers import hello
from fastapi import FastAPI


def create_application() -> FastAPI:
    """Creates the fastapi application
    Returns:
        FastAPI: the fastapi app
    """

    app = FastAPI()
    app.include_router(hello.router)
    add_events(app)
    return app
