"use node"
import "reflect-metadata"
import { DataSource, EntitySchema } from "typeorm"
import { classLoader } from "./loader"


export const dataSource = new DataSource({


    type: "mssql",
    host: process.env.DB_HOST_IL,
    port: Number(process.env.DB_PORT!),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_IL,
    synchronize: false,
    logging: true,
    entities: classLoader("entity") as EntitySchema[],
    migrations: [],
    subscribers: [],
    options: { useUTC: true },
})