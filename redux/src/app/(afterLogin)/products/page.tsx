import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Products() {



    return (
        <>
            <NavBar />
            <div className="carousel w-full relative">
                <div id="item1" className="carousel-item w-full relative">
                    <img src="https://www.durex.co.id/static/a1e5e4d2fe56a4a861d1799cabd4393c/e0075/page-lubes-main-title-bg.webp" className="w-full" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-5 text-5xl font-bold text-white">CONDOMS | LUBES 
                | TOYS</h1>
                </div>
            </div>




            <Footer />
        </>
    )
}