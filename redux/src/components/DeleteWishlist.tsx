"use client";
import React from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

interface RemoveProps {
    wishlistId: string;
}

const DeleteWishlist: React.FC<RemoveProps> = ({ wishlistId }) => {
    const router = useRouter()

    const remove = async () => {
        try {
            const response = await fetch(
                `http://localhost:3000/api/wishlists`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ _id: wishlistId }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to remove item from wishlist");
            }
            router.push("/wishlists");
        } catch (error) {
            console.error("Error removing item from wishlist", error);
        }
    };

    return (
        <button
            onClick={remove}
            className="btn btn-outline btn-error"
        >
            <h1 className="hover:text-gray-100">Remove</h1>
        </button>
    );
};

export default DeleteWishlist;
