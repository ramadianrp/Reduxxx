import NavBar from "@/components/NavBar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="karoselpertama">
        <div className="carousel carousel-end">
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink" />
          </div>
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Drink" />
          </div>
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Drink" />
          </div>
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Drink" />
          </div>
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Drink" />
          </div>
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Drink" />
          </div>
        </div>
      </div>
      <br />
      <div className="kontener">
        <img src="https://www.durex.co.id/static/a3de6312d5fb0bbcb8d5a5464bdce627/ede05/durex-updated-banner.webp" />
      </div>
      <br />
      <div className="karoselkedua">
        <div className="carousel carousel-end">
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink" />
          </div>
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Drink" />
          </div>
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Drink" />
          </div>
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Drink" />
          </div>
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Drink" />
          </div>
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Drink" />
          </div>
        </div>
      </div>
      <br />
      <div className="konten2">
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center text-center">
              LET'S MOVE
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-200 text-9xl font-black grid place-content-center text-center">REAL GOOD EXPERIENCE FOR ALL</div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
      <br />
      

      <br/>
      <Footer />

    </>
  );
}

