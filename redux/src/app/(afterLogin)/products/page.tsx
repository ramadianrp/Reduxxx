import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Products() {



    return (
        <>
            <NavBar />
            <div className="main" style={{ background: 'white' }}>
                <div className="carousel w-full relative bg-white">
                    <div id="item1" className="carousel-item w-full relative">
                        <img src="https://www.durex.co.id/static/a1e5e4d2fe56a4a861d1799cabd4393c/e0075/page-lubes-main-title-bg.webp" className="w-full" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-5 text-5xl font-bold text-white">CONDOMS | LUBES
                            | TOYS</h1>
                    </div>
                </div>
                <div className="hero mt-5 mb-5" style={{ background: 'white' }}>
                    <div className="text-center text-neutral-content" style={{ color: 'black' }}>
                        <div className="max-w-md mx-auto" style={{ textAlign: 'center' }}>
                            <h1 className="mb-5 text-xl font-bold text-blue-500">Durex memiliki produk pelumas berbahan dasar air yang bisa meningkatkan kenikmatan bercinta bersama pasangan. Untuk sensasi tambahan, ada Durex Vibration Ring yang siap memberikan sensasi getar yang menyenangkan.</h1>
                        </div>
                    </div>


                </div>
            </div>




            <Footer />
        </>
    )
}