import "dotenv/config";
import app from "./app"
import db from './database'

db.connect((err) => {
  if (!err) {
    console.log('Connected to database...')
    app.listen(process.env.PORT, (): void => console.log('server running on port ',process.env.PORT))
  } else {
    console.log('Error connecting to database...')
  }
})

