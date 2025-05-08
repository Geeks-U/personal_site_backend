import express from "express"

// 路由引入
import loginRouter from './routes/login'

const app = express()

// 自动解析 json 格式
app.use(express.json())

// 路由挂载
app.use('/login', loginRouter)

export default app
