from fastapi import FastAPI
from mangum import Mangum  # 引入無伺服器轉換工具

app = FastAPI()

@app.get("/hello")
def say_hello():
    return {"message": "Hello from Netlify Functions!"}

# 這行非常關鍵！Netlify 會來呼叫這個 handler 變數
handler = Mangum(app)
