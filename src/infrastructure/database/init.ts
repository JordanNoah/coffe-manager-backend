import {SequelizeProductType} from "./model/ProductType";
import {SequelizeProduct} from "./model/Product";

export const DbSequelize = (): Promise<void> => {
    return new Promise( async (resolve, reject) => {
        try {
            await SequelizeProductType.sync()
            await SequelizeProduct.sync()
            resolve()
        }catch (e){
            reject(e)
        }
    })
}