import UserModel from "@/db/models/User";
import { ZodError } from "zod";
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const result = await UserModel.createUser(body);

        return NextResponse.json({
            data: result
        })
    } catch (error) {
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