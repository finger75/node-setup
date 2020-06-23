import express, { request, response } from 'express'
import '@controllers/UserController'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!!!' })
})

app.listen(3000)
