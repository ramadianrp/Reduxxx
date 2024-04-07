"use client"
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import SeeMore from "@/components/SeeMore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const accessToken = getCookie('Authorization');
    setIsLoggedIn(accessToken ? true : false);
  }, []);

  const handleLogout = () => {
    deleteCookie('Authorization');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <>
      <NavBar />
      <div className="main" style={{ background: 'white' }}>
        <div className="w-full flex justify-center" style={{ background: 'white' }}>
          <div className="carousel w-3/4 relative">
            <div id="item1" className="carousel-item w-full relative">
              <img src="https://images.unsplash.com/photo-1544963823-9810de5a798a?q=80&w=3333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-1/2" alt="Image 1" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <img src="https://cdn.worldvectorlogo.com/logos/durex.svg" className="w-1/4" alt="logo" />
              </div>
              <img src="https://images.unsplash.com/photo-1544963823-6267c70c3e11?q=80&w=3333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-1/2" alt="Image 2" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#" className="btn btn-circle btn-outline">❮</a>
                <a href="#item2" className="btn btn-circle btn-outline">❯</a>
              </div>
            </div>
            <div id="item2" className="carousel-item w-full relative">
              <img src="https://images.unsplash.com/photo-1530025468065-b26f2c0618b6?q=80&w=3333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-1/2" alt="Image 1" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <img src="https://cdn.worldvectorlogo.com/logos/durex.svg" className="w-1/4" alt="logo" />
              </div>
              <img src="https://images.unsplash.com/photo-1544963222-8d994a32ec9b?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-1/2" alt="Image 2" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#item1" className="btn btn-circle btn-outline">❮</a>
                <a href="#" className="btn btn-circle btn-outline">❯</a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero min-h-screen" style={{ background: 'white' }}>
          <div className="hero-content text-center text-neutral-content" style={{ color: 'black' }}>
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold">REAL GOOD EXPERIENCE FOR ALL</h1>
              <p className="mb-5">Gone are the days of one person, one position & definitely one perspective. Durex believes good intimacy for is for anyone & everyone. However you like, with whoever you like. It’s time we challenge the norms & stamp out stigmas. Feel good about whatever you’re into - it’s your experience so do it your way.</p>
              <br />
              {isLoggedIn ? (
                <button onClick={handleLogout} className="btn btn-ghost">
                  Logout
                </button>
              ) : (
                <Link href="/login" className="btn btn-ghost">Get Started</Link>
              )}
            </div>
          </div>
        </div>
        <div>
          <img src="https://www.durex.co.id/static/a3de6312d5fb0bbcb8d5a5464bdce627/ede05/durex-updated-banner.webp" className="w-full" alt="Banner" />
        </div>
        <br />
        <div className="hero mt-5 mb-5" style={{ background: 'white' }}>
          <div className="hero content text-center text-neutral-content" style={{ color: 'black' }}>
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold">YOUR FAVOURITES</h1>
            </div>
          </div>
        </div>
        <div className="carousel carousel-center w-full flex justify-center" style={{ background: 'white' }}>
          <div className="carousel-item mx-5">
            <img src="https://www.durex.co.id/static/d08ae838591aa3579083f899470ddbc1/e7405/durex_play-massage-2in1_200ml_rbl2012887_front_nordic-2400px_v1.webp" className="rounded-box w-80 h-80" />
          </div>
          <div className="carousel-item mx-5">
            <img src="https://www.durex.co.id/static/84cc5218e5a21457e32fd264cc4852e3/07549/rb_durex_lovejeans_3pk_rbl2003291_front_v1-1-jpg.webp" className="rounded-box w-80 h-80" />
          </div>
          <div className="carousel-item mx-5">
            <img src="https://www.durex.co.id/static/a235ac6bb9a5d2aec28b4074163d60a7/07549/rb_durex_extrasafe_3pk_rbl2002545_front_v1-jpg.webp" className="rounded-box w-80 h-80" />
          </div>
          <div className="carousel-item mx-5">
            <img src="https://www.durex.co.id/static/e2cc1d8e4399b411114b03786d3a96a0/07549/rb_durex_invisible_2pk_rbl2003132_front_v1-jpg.webp" className="rounded-box w-80 h-80" />
          </div>
        </div>
      </div>
      <SeeMore />







      <Footer />
    </>
  );
}

