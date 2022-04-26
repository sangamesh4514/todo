import "dotenv/config";
import app from "./app"
import db from './database'
import redis from './redis'

db.connect(async(err) => {
  if (!err) {
    console.log('Connected to database...')
    
    app.listen(process.env.PORT, (): void => console.log('server running on port ',process.env.PORT))
    try {
      redis.connect()
      } catch (error) {
        console.log("redis error",error);
      }
  } else {
    console.log('Error connecting to database...',err)
  }
})

