import app from "./app"
import db from './database'

db.connect((err) => {
  if (!err) {
    console.log('Connected to database...')
    app.listen(5000, (): void => console.log('server running on port 5000'))
  } else {
    console.log('Error connecting to database...')
  }
})

