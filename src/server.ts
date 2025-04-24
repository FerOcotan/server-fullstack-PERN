import colors from "colors"
import cors , {CorsOptions}from "cors"
import morgan from "morgan"
import  express  from "express";
import  router  from "./router";
import db from "./config/db";


async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log("Database synchronized")
        console.log(colors.bgGreen.white( "Database connected"))
    }
    catch (error) {
        console.error("Unable to connect to the database:", error)
        
    }
}
connectDB()


const server = express()

//ppermitir el acceso a la API desde el cliente

const corsOptions: CorsOptions = {
    origin: function(origin,callback) {
      if(origin===process.env.FRONTEND_URL ) {
        callback(null,true)
    }else {
        callback(new Error("No permitido por CORS"))
      }
    },
}

server.use(cors(corsOptions))

// Leer datos de formularios
server.use(express.json())

server.use(morgan('dev'))

server.use('/api/products', router)


server.use('/api/products', router)




export default server 