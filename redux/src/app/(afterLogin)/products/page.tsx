"use client"

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ProductsCard from "@/components/ProductCard";
import { Product } from "@/types";
import { useEffect, useState } from "react";

interface ProductsProps {
    products: Product[];
}

export default function Products() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:3000/api/products`, {
                cache: "no-store",
            });

            if (!response.ok) throw new Error();

            const responseJson = await response.json();
            setProducts(responseJson.data);
        } catch (error) {
            console.log(error, "<< ERR DI PRODUCTS");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts: Product[] = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-white">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <>
            <NavBar />
            <div className="main border border-white bg-white">
                <div className="carousel w-full relative bg-white">
                    <div id="item1" className="carousel-item w-full relative">
                        <img src="https://www.durex.co.id/static/a1e5e4d2fe56a4a861d1799cabd4393c/e0075/page-lubes-main-title-bg.webp" className="w-full" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-5 text-5xl font-bold text-white">CONDOMS | LUBES | TOYS</h1>
                    </div>
                </div>
                <div className="hero mt-5 mb-5">
                    <div className="text-center text-neutral-content" style={{ color: 'black' }}>
                        <div className="max-w-md mx-auto">
                            <h1 className="mbx-5 text-xl font-bold text-blue-500">Durex memiliki produk pelumas berbahan dasar air yang bisa meningkatkan kenikmatan bercinta bersama pasangan.</h1>
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                </div>
                <ProductsCard products={filteredProducts} />
            </div>
            <Footer />
        </>
    );
}
