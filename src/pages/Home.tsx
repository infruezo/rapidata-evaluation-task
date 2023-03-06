import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Home/Hero";
import { AboutUs } from "../components/Home/AboutUs";
import { Pricings } from "../components/Home/Pricings";
import { Services } from "../components/Home/Services";
import { Footer } from "../components/Home/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />

      <main className="flex flex-col space-y-8 md:space-y-12 lg:space-y-14">
        <Hero />
        <AboutUs />
        <Services />
        <Pricings />
        <Footer />
      </main>
    </div>
  );
};
