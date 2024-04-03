import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";

type WishlistType = {
    _id: ObjectId;
    productId: string;
    userId: string;
};

type InputWishList = Omit<WishlistType, "_id">;

class WishlistModel {
    static getCollection() {
        return database.collection("Wishlists");
    };

    static async create (body: InputWishList) {
        const result = await this.getCollection().insertOne({
            productId: new ObjectId(body.productId),
            userId: new ObjectId(body.userId)
        });
        return {
            _id : result.insertedId,
            ...body
        }
    };

    static async getAll(idUser: string) {
        return (await this.getCollection()
        .find({ userId: new ObjectId(idUser) })
        .toArray()) as WishlistType[];
    };

    static async findById(id: string) {
        return (await this.getCollection()
        .findOne({ _id : new ObjectId(id) })) as WishlistType | null;
    };
}

export default WishlistModel;