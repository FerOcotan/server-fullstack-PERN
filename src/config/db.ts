import { Sequelize } from "sequelize-typescript";
import dontenv from "dotenv";
dontenv.config()


if (!process.env.DATABASE_URL) {
	throw new Error("DATABASE_URL is not defined in the environment variables");
}

const db = new Sequelize(process.env.DATABASE_URL!, { 
    models: [__dirname + "/../models/**/*"],
    logging: false, 
    dialect: 'postgres',
    dialectModule: require('pg')
  
}) 

export default db

