interface featured {
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price: number;
    tags: [string];
    thumbnail: string;
    images: string[];
}

interface ArrayOfFeatured {
    product: featured[];
}


export default function FeaturedCard({ product }: { product: featured }) {
    return (
        <>
            <div className="flex flex-wrap ml-6 bg-white">
                <div className="card card-compact w-64 bg-white">
                    <figure>
                        <img
                            src={product.thumbnail}
                            alt={product.name}
                        />
                    </figure>
                    <div className="card-body text-center mb-20">
                        <h2 className="card-title">{product.name}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
