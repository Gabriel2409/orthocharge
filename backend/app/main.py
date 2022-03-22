import logging

from app.routers import hello
from fastapi import FastAPI

log = logging.getLogger("uvicorn")


def create_application() -> FastAPI:
    """Creates the fastapi application
    Returns:
        FastAPI: the fastapi app
    """

    application = FastAPI()
    application.include_router(hello.router)
    return application


app = create_application()


@app.on_event("startup")
async def startup_event():
    """executes on application startup"""
    log.info("----Starting up----")


@app.on_event("shutdown")
async def shutdown_event():
    """executes on application shutdown"""
    log.info("----Shutting down----")
