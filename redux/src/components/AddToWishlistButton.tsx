import { ObjectId } from "mongodb";
import { useState, useEffect } from "react";

interface WishlistProduct {
    productId: ObjectId;
}

export default function AddToWishlistButton({ productId }: WishlistProduct) {
    const [isAdded, setIsAdded] = useState(false);

    const handleClick = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/wishlists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ productId })
            });

            if (response.ok) {
                setIsAdded(true);
                setTimeout(() => setIsAdded(false), 3000);
            } else {
                throw new Error('Failed to add to wishlist');
            }
        } catch (error) {
            console.error('Error adding to wishlist:', error);
        }
    };

    return (
        <button
            className="btn btn-primary"
            onClick={handleClick}
            disabled={isAdded} 
        >
            {isAdded ? 'Added' : 'Add to Wishlist'}
        </button>
    );
}
