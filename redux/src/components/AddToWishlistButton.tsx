import React from 'react';
import Swal from 'sweetalert2'

interface AddWishlistProps {
    productId: Object;
}

const AddWishlist: React.FC<AddWishlistProps> = ({ productId }) => {
    const handleAddToWishlist = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/wishlists`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to add item to wishlist');
            }

            const result = await response.json();
            Swal.fire({
                icon: "success",
                text: `Added to wishlist`
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You cannot add the same item twice"
            });
        }
    };

    return (
        <button
            className="btn btn-primary"
            onClick={handleAddToWishlist}
        >
            Add to Wishlist
        </button>
    );
}

export default AddWishlist;
