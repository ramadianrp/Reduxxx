import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SeeMore from "@/components/SeeMore";
import Carousel from "@/components/Carousel";
import MainBanner from "@/components/MainBanner";
import LogoutButton from "@/components/LogoutButton";
import FeaturedCard from "@/components/FeaturedCard";

export const metadata = {
  title: "Reduxxx",
  description: "E-commerce app built with Next.js and Redux"
};

interface featured {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: [string];
  thumbnail: string;
  images: [string];
}

interface ArrayOfFeatured {
  data: featured[];
}

const fetchData = async () => {
  const data = await fetch(
    `http://localhost:3000/api/featuredProducts`,
    {
      method: "get",
    }
  );

  return await data.json();
};


export default async function Home() {
  let result = await fetchData()
  const data = result.data
  

  return (
    <>
      <NavBar />
      <div className="main" style={{ background: 'white' }}>
        <Carousel />
        <div className="hero min-h-screen" style={{ background: 'white' }}>
          <div className="hero-content text-center text-neutral-content" style={{ color: 'black' }}>
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold">REAL GOOD EXPERIENCE FOR ALL</h1>
              <p className="mb-5">Gone are the days of one person, one position & definitely one perspective. Durex believes good intimacy for is for anyone & everyone. However you like, with whoever you like. It’s time we challenge the norms & stamp out stigmas. Feel good about whatever you’re into - it’s your experience so do it your way.</p>
              <br />
              <LogoutButton />
            </div>
          </div>
        </div>
        <MainBanner />
        <br />
        <div className="hero mt-20 mb-20" style={{ background: 'white' }}>
          <div className="hero content text-center text-neutral-content" style={{ color: 'black' }}>
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold">YOUR FAVOURITES</h1>
            </div>
          </div>
        </div>
        <div className="carousel carousel-center w-full flex justify-center" style={{ background: 'white' }}>
          <div className="carousel-item mx-5">
            {data.map((item: featured, idx: string) => (
            <FeaturedCard key={idx} product={item} />
          ))}
          </div>
        </div>
      </div>
      <SeeMore />
      <Footer />
    </>
  );
}
