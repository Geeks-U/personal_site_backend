import app from "./app"
const port = 8000

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
