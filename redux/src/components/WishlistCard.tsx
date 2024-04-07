import { Wishlist } from "@/types";


interface WishlistCardProps {
    wishlists: Wishlist[];
}

const ProductsCard = ({ wishlists }: WishlistCardProps) => {
    return (
        <div className="main border border-white bg-white">
            <div className="grid justify-center grid-cols-3 gap-4 mx-40 mb-5 bg-white">
                {wishlists.map((wishlist, index) => (
                    <div key={index} className="card bg-white">
                        <figure className="pt-10">
                            <img
                                src={wishlist.thumbnail}
                                alt={wishlist.name}
                                className="rounded-xl w-1/2 transition-transform transform hover:scale-110"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p className="text-black text-md">{wishlist.name}</p>
                            <p className="text-lg text-blue-500">
                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(wishlist.price)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsCard;
