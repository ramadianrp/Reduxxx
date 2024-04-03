import { ObjectId } from 'mongodb';

export type products = Product[];

export type UserModel = {
    _id: ObjectId;
    username: string;
    email: string;
    password: string;
    superadmin?: boolean;
    original_name?: string;
}

export type UserModelCreate = {
    username: string;
    email: string;
    password: string;
    superadmin?: boolean; original_name?: string;
}

export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export interface Rating {
    rate: number;
    count: number;
}