import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";

type ProductType = {
    _id: ObjectId;
    name: string;
    price: number;
    description: string;
    image: string;
    size: number;
}


class ProductModel {
    static productCollection() {
        return database.collection("Products");
    };

    static async getAllProducts() {
        return (await this.productCollection().find().toArray()) as ProductType[];
    };

    static async createProduct(product: ProductType) {
        const result = await this.productCollection().insertOne(product);
        return result
    };

    static async findByName(name: string) {
        return (await this.productCollection().findOne({ name: name }))
    };
}

export default ProductModel;