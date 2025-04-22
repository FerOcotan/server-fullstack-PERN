
import  express  from "express";
import  router  from "./router";
import db from "./config/db";


async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log("Database synchronized")
        console.log("Database connected")
    }
    catch (error) {
        console.error("Unable to connect to the database:", error)
    }
}
connectDB()


const server = express()


server.use('/api/products', router)




export default server 