from fastapi import APIRouter
router=APIRouter()

@router.get("/users")
def get_data():
    return "Get Data"


@router.put("/users/put")
def put_data():
    return "put Data"

@router.post("/users/post")
def post_data(name):
    return "post Data " + name

@router.patch("users/patch")
def patch_data():
    return "Patch Data"

@router.delete("/users/delete")
def delete_data():
    return "Delete data"