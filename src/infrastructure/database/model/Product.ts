import {Model, DataTypes} from "sequelize"
import {SequelizeProductType} from "./ProductType";
import {sequelize} from "../sequelize";

interface ProductRow {
    id: number,
    uuid: string,
    name: string,
    description: string,
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date,
    product_type_id: number
}

export class SequelizeProduct extends Model<ProductRow,Omit<ProductRow, 'id'>> {
    declare id: number
    declare uuid: string
    declare name: string
    declare description: string
    declare readonly created_at: Date
    declare readonly updated_at: Date
    declare readonly deleted_at: Date
    declare product_type_id: SequelizeProductType
}

SequelizeProduct.init({
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
    },
    product_type_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: SequelizeProductType,
            key:'id'
        }
    }
},{
    sequelize,
    timestamps:true,
    underscored:true,
    tableName:'product'
})

//SequelizeProduct.hasOne(SequelizeProductType,{foreignKey:'product_type_id',as:'productType'})