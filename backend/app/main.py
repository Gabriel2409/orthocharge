from app.application_factory import create_application
from app.firebase_config import initialize_firebase_app

app = create_application()
initialize_firebase_app()
