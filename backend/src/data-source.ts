import "dotenv/config"; 
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entities/Product.js";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    // Prática de Segurança: Carregando credenciais via variáveis de ambiente
    username: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: "sexshop_db",
    // Prática de DB: Sincronismo automático para desenvolvimento
    synchronize: true, 
    logging: true,
    entities: [Product],
    migrations: [],
    subscribers: [],
});