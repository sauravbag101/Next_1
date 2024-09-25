import FeaturedSection from "./components/FeaturedSection";
import HeroSection from "./components/HeroSection";
import Instructors from "./components/Instructors";
import MovingCard from "./components/MovingCard";
import UpcomingWebinar from "./components/UpcomingWebinar";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
    {/* <h1 className="text-2xl text-center">Chai with saurav</h1> */}
    <HeroSection/>
    <FeaturedSection/>
    <WhyChooseUs/>
    <MovingCard/>
    <UpcomingWebinar/>
    <Instructors/>
    <Footer/>
    </main>
  );
}
