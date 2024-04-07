import {Model, DataTypes} from "sequelize"
import {sequelize} from "../sequelize";

interface ProductTypeRow {
    id: number,
    uuid: string,
    name: string,
    description: string,
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date
}

export class SequelizeProductType extends Model<ProductTypeRow, Omit<ProductTypeRow, 'id'>> {
    declare id: number
    declare uuid: string
    declare name: string
    declare description: string
    declare readonly created_at: Date
    declare readonly updated_at: Date
    declare readonly deleted_at: Date
}

SequelizeProductType.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    uuid:{
        type: DataTypes.UUID,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    sequelize,
    timestamps:true,
    underscored:true,
    tableName:'product_type'
})