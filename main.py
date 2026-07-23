from fastapi import FASTAPI
from routes import router
from models import Base
import models
import database import engine

app=FASTAPI()
app.include_router(router)
models.Base.metadata.create_all(bind=engine)

