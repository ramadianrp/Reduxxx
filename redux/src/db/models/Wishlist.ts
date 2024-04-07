import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";
import { Wishlist } from "@/types";

type InputWishlist = Omit<Wishlist, "_id">;

class WishlistModel {
    static getCollection() {
        return database.collection("Wishlist");
    };

    static async create(body: InputWishlist) {
        try {
            const result = await this.getCollection().insertOne({
                productId: new ObjectId(body.productId),
                userId: new ObjectId(body.userId)
            });
            return {
                _id: result.insertedId,
                ...body
            };
        } catch (error) {
            console.error("Error creating wishlist:", error);
            throw error;
        }
    }

    static async getAll(idUser: string) {
        try {
            const wishlistItems = await this.getCollection()
                .aggregate([
                    {
                        $match: { userId: new ObjectId(idUser) }
                    },
                    {
                        $lookup: {
                            from: "Product",
                            localField: "productId",
                            foreignField: "_id",
                            as: "product"
                        }
                    }
                ])
                .toArray();
            return wishlistItems;
        } catch (error) {
            console.error("Error fetching wishlist:", error);
            throw error;
        }
    }

    static async findById(id: string) {
        try {
            const wishlistItem = await this.getCollection().findOne({
                _id: new ObjectId(id)
            });
            return wishlistItem;
        } catch (error) {
            console.error("Error finding wishlist item:", error);
            throw error;
        }
    }
}

export default WishlistModel;
