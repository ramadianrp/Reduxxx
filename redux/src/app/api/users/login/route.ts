import UserModel from "@/db/models/User";
import { ZodError, z } from "zod";
import { NextResponse } from "next/server"
import { compareTextWithHash } from "@/db/helpers/hash";
import { createToken } from "@/db/helpers/jwt";


const UserValidation = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(10)
})


export async function POST(request: Request) {
    try {
        const { email, password}:{email: string, password: string} = await request.json()

        const validation = UserValidation.safeParse({email, password})
        if (!validation.success){
            throw validation.error
        }

        const dataLogin = await UserModel.getUserByEmail(email)
        if(!dataLogin) {
            return NextResponse.json({
                message: "Invalid Email/Password"
            },{
                status: 401
            })
        }

        const validatePassword = compareTextWithHash(password, dataLogin.password) 
        if(!validatePassword) {
            return NextResponse.json({
                message: "Invalid Email/Password"
            },{
                status: 401
            })
        }

        const accessToken = createToken({
            _id: dataLogin._id,
            email: dataLogin.email
        })

        return NextResponse.json({
            message: "Login Success",
            data : {
                accessToken
            }
        }, {
            status: 200
        })

    } catch (error) {
        console.log(error);
        
        if (error instanceof ZodError) {
            const errMessage = error.errors[0].path[0] + " " + error.errors[0].message;
            return NextResponse.json({
                error: errMessage
            }, {
                status: 400
            });
        };

        return NextResponse.json(
            {
                error: "Internal Server Error"
            },
            {
                status: 500
            }
        )
    }
}
