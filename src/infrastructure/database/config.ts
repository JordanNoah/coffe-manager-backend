import { Options } from "sequelize";
import AppConfig from "../../shared/appConfig";

export const config: Options = {
    host: AppConfig.DB_HOST,
    username: AppConfig.DB_USERNAME,
    password: AppConfig.DB_PASSWORD,
    logging: (msg) => false,
    port: parseInt(AppConfig.DB_PORT),
    database: AppConfig.DB_NAME,
    dialect: "mysql"
}