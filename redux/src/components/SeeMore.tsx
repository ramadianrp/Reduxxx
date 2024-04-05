"use client";
import Link from "next/link";

export default function SeeMore() {
    return (

        <div className="flex justify-center bg-white">
            <Link href="/products" className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-white text-lg font-bold text-gray-600 hover:text-white hover:bg-gray-400 flex items-center justify-center">
                See More ...
                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30" />
            </Link>
        </div>


    )
}