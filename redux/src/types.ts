import { ObjectId } from 'mongodb';


export interface User {
    _id: ObjectId;
    email: string;
    password: string;
    username: string;
    name: string;
};

export interface Product {
    _id: ObjectId;
    name: string;
    slug: string;
    description: string;
    price: number;
    tags: string[];
    thumbnail: string;
    images: string[];
}

export interface Wishlist {
    _id: ObjectId;
    productId: string;
    userId: string;
};