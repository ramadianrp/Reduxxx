import { ObjectId } from 'mongodb';
import { database } from '../config/mongodb';
import { z } from 'zod';
import { User } from '@/types';
import brcyptjs from 'bcryptjs';


interface newUser {
    name: string;
    username: string;
    email: string;
    password: string;
}

// type InputUser = Omit<User, "_id">;

const UserValidation = z.object({
    username: z.string({
        required_error: "Username can't be empty"
    }),
    email: z.string({
        required_error: "Email can't be empty"
    }).email(),
    password: z.string({
        required_error: "Password can't be empty"
    }).min(5)
})

class UserModel {
    static userCollection() {
        return database.collection("User");
    };

    static async create(newUser: newUser) {
        const validation = UserValidation.safeParse(newUser);
        if (!validation.success) {
            const errors = validation.error
            throw errors
        }

        const user = {
            ...newUser,
            password: brcyptjs.hashSync(newUser.password)
        }

        const [validateUser] = await this.userCollection().find({
            $or: [
                {
                    username: user.username
                },
                {
                    email: user.email
                }
            ]
        }).toArray()
        if (validateUser) {
            throw new Error("already registered")
        }
        const data = await this.userCollection().insertOne(user)
        return data
    }

    static async getUserByEmail(email: string) {
        return await this.userCollection().findOne({ email: email }) as User;
    };

    static async getUserByUsername(username: string) {
        return await this.userCollection().findOne({ username }) as User;
    };
}

export default UserModel;