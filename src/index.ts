import app from "./app"

const host = process.env.HOST || '0.0.0.0'
const port = parseInt(process.env.PORT || '8000', 10)

app.listen(port, host, () => {
  const now = new Date().toISOString()
  console.log(`[${now}] Server is running at http://${host}:${port}`)
})
