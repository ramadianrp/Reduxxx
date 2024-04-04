import { ObjectId } from 'mongodb';
import { database } from '../config/mongodb';

type UserType = {
    _id: ObjectId;
    email: string;
    password: string;
    username: string;
    name: string;
};

type InputUser = Omit<UserType, "_id">;


class UserModel{
    static userCollection(){
        return database.collection("Users");
    };

    static async createUser(body: InputUser){
        const newUser =  await this.userCollection().insertOne({

        });
        return newUser;
    };

    static async getUserByEmail(email: string){
        return (await this.userCollection().findOne({ email: email})) as UserType;
    };
}

export default UserModel;