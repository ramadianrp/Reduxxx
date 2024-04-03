import UserModel from "@/db/models/User";
import { ZodError } from "zod";
import { NextResponse } from "next/server"

import { compareTextWithHash } from "@/db/helpers/hash";
import { createToken } from "@/db/helpers/jwt";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const user = await UserModel.getUserByEmail(body.email);

        if (!user) {
            return NextResponse.json(
                {
                    error: "Invalid credentials"
                },
                {
                    status: 401
                }
            );
        }

        const isValid = compareTextWithHash(body.password, user.password);
        if (!isValid) {
            return NextResponse.json(
                {
                    error: "Invalid credentials"
                },
                {
                    status: 401
                }
            );
        };

        const token = createToken({ _id: user._id, email: user.email });

        cookies().set("Authorization", `Bearer ${token}`);
        return NextResponse.json({
            data: {
                token
            }
        });
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