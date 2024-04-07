import WishlistModel from "@/db/models/Wishlist";
import { get } from "http";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const userId = request.headers.get("x-user-id");

    if (!userId) {
      return NextResponse.json(
        {
          message: "User ID not found",
        },
        {
          status: 404,
        }
      );
    }

    const body = await request.json();
    const { productId } = body;

    const wishlistItem = await WishlistModel.createWishlist(userId, productId);

    return NextResponse.json(
      {
        message: "Wishlist item added",
        data: wishlistItem,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
};

export async function GET(request: Request) {
  try {
    const userId = request.headers.get("x-user-id") as string;
    // console.log(userId, "<<< userId");
    

    if (!userId) {
      return NextResponse.json(
        {
          message: "User ID not found",
        },
        {
          status: 404,
        }
      );
    }

    const getWishlist = await WishlistModel.showWishlist(userId);
    // console.log(getWishlist, "<<< getWishlist");
    

    // return NextResponse.json({data: getWishlist})
    return new Response(JSON.stringify(getWishlist), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}

export const DELETE = async (request: Request) => {
  try {
    const userId = request.headers.get("x-user-id");

    if (!userId) {
      return NextResponse.json(
        {
          message: "User ID not found",
        },
        {
          status: 404,
        }
      );
    }

    const body = await request.json();

    const { _id } = body;

    const deleteWishlist = await WishlistModel.deleteWishlist(_id);

    return NextResponse.json(
      {
        message: "Wishlist deleted",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
};
