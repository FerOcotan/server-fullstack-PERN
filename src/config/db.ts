import { Sequelize } from "sequelize";
import dontenv from "dotenv";
dontenv.config()


if (!process.env.DATABASE_URL) {
	throw new Error("DATABASE_URL is not defined in the environment variables");
}

const db = new Sequelize(process.env.DATABASE_URL);

export default db

