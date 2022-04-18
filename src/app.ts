import express, { Application } from 'express'
import bodyParser from 'body-parser'
import todo from './routes/todos'

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', todo)

export default app;