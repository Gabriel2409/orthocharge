import logging

from fastapi import FastAPI


def add_events(app: FastAPI):
    """Adds event to the fastapi App
    Args:
        app (FastAPI) the fastapi app
    """
    log = logging.getLogger("uvicorn")

    @app.on_event("startup")
    async def startup_event():
        """executes on application startup"""
        log.debug("Application start up")

    @app.on_event("shutdown")
    async def shutdown_event():
        """executes on application shutdown"""
        log.debug("Aplication shut down")
