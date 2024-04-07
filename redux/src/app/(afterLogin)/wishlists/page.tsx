"use client"
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Wishlist } from "@/types";
import { useEffect, useState } from "react";

interface WishlistProps {
    wishlist : Wishlist[];
}

export default function Wishlist() {
    const [wishlist, setWishlist] = useState<Wishlist[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchWishlist = async () => {
        setLoading(true);

        try {
            const response = await fetch("http://localhost:3000/api/wishlists");

            if (!response.ok) {
                throw new Error("Failed to fetch wishlist");
            }

            const responseJson = await response.json();
            setWishlist(responseJson.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <p>Loading...</p>
        );
    }

    useEffect(() => {
        fetchWishlist();
    }, []);

    return (
        <>
            <NavBar />
            
            <Footer />
        </>
    );
}

