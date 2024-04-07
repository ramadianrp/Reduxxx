import { Product } from "@/types";
import AddToWishlistButton from "./AddToWishlistButton";

interface ProductsCardProps {
    products: Product[];
}

const ProductsCard = ({ products }: ProductsCardProps) => {
    return (
        <div className="main border border-white bg-white">
            <div className="grid justify-center grid-cols-3 gap-4 mx-40 mb-5 bg-white">
                {products.map((product, index) => (
                    <div key={index} className="card bg-white">
                        <figure className="pt-10">
                            <img
                                src={product.thumbnail}
                                alt={product.name}
                                className="rounded-xl w-1/2 transition-transform transform hover:scale-110"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p className="text-black text-md">{product.name}</p>
                            <p className="text-lg text-blue-500">
                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}
                            </p>
                        </div>
                        <AddToWishlistButton productId={product._id} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsCard;
