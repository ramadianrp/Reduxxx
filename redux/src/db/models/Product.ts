import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";
import { z } from "zod";




const ProductValidation = z.object({
    name: z.string({
        required_error: "Name cant be empty",
    }),
    slug: z.string({
        required_error: "Slug cant be empty",
    }),
});

class ProductModel {
    static productCollection() {
        return database.collection("Product");
    };

    static async getAllProducts() {
        const result = await this.productCollection().find().toArray();
        return result;
    };

    static async findByName(name: string) {
        const result =  await this.productCollection().findOne({ name });
        return result;
    };

    static async getProductBySlug(slug: String) {
        const result = await this.productCollection().findOne({ slug });
        return result;
    };
    
}

export default ProductModel;