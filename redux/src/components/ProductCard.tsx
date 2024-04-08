"use client"

import { Product } from "@/types";
import Link from "next/link";
import AddToWishlistButton from "./AddToWishlistButton";

interface ProductsCardProps {
    products: Product[];
}

const ProductsCard = ({ products }: ProductsCardProps) => {
    // console.log(products, "prodddd");

    return (
        <>
            <div className="main border border-white bg-white">
                <div className="grid justify-center grid-cols-3 mx-40 mb-5 bg-white" >
                    {products.map((product, index) => (
                        <div key={index} className="card bg-white mr-4">
                            <Link href={`/products/${product.slug}`}>
                                <figure className="pt-10">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.name}
                                        className="rounded-xl w-1/2 transition-transform transform hover:scale-110"
                                    />
                                </figure>
                            </Link>
                            <div className="card-body items-center text-center bg-white">
                                <p className="text-black text-md">{product.name}</p>
                                <p className="text-lg text-blue-500">{(product.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                                <AddToWishlistButton productId={product._id} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductsCard

