import WishlistModel from "@/db/models/Wishlist";
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const userId = request.headers.get("x-user-id") as string;
        const wishlist = await WishlistModel.create({
            productId: body.productId,
            userId: userId
        });

        return NextResponse.json({
            data: wishlist
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error: "Internal Server Error"
        }, {
            status: 500
        });
    }
}

export async function GET(request: Request) {
    try {
        const userId = request.headers.get("x-user-id") as string;
        const wishlist = await WishlistModel.getAll(userId);
        
        return NextResponse.json({
          data: wishlist
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error: "Internal Server Error"
        }, 
        {
            status: 500
        });
        
    }
}