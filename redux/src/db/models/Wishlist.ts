import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";
import { Wishlist } from "@/types";

// type InputWishlist = Omit<Wishlist, "_id">;

class WishlistModel {
    static getCollection() {
        return database.collection("Wishlist");
    };

    static async getWishlist(userId: string, productId: string) {
        const idUser = new ObjectId(userId);
        const idProduct = new ObjectId(productId);
        const data = await this.getCollection().findOne({
            userId: idUser,
            productId: idProduct,
        });

        return data;
    };

    static async createWishlist(userId: string, productId: string) {
        const validate = await this.getWishlist(userId, productId);

        if (validate) {
            throw new Error("already in wishlist");
        } else {
            const newWishlist = {
                userId: new ObjectId(userId),
                productId: new ObjectId(productId),
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            const data = await this.getCollection().insertOne(newWishlist);

            return data;
        }
    };

    static async showWishlist(userId: string) {
        const id = new ObjectId(userId);
        const data = await this.getCollection()
            .aggregate([
                {
                    $match: {
                        userId: id,
                    },
                },
                {
                    $lookup: {
                        from: "Product",
                        localField: "productId",
                        foreignField: "_id",
                        as: "productDetails",
                    },
                },
                {
                    $unwind: "$productDetails",
                },
                {
                    $project: {
                        _id: 1,
                        userId: 1,
                        productId: 1,
                        createdAt: 1,
                        updatedAt: 1,
                        "productDetails.name": 1,
                        "productDetails.slug": 1,
                        "productDetails.description": 1,
                        "productDetails.price": 1,
                        "productDetails.tags": 1,
                        "productDetails.thumbnail": 1,
                        "productDetails.images": 1,
                        "productDetails.createdAt": 1,
                        "productDetails.updatedAt": 1,
                    },
                },
            ])
            .toArray();
            // console.log(data, "<<< data");
            

        return data;
    };

    static async deleteWishlist(id: string) {
        const data = await this.getCollection().deleteOne({
            _id: new ObjectId(id),
        });

        return data;
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
