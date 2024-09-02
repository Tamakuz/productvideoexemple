import BestTools from "./components/BestTools";
import Footer from "./components/Footer";
import HeroComponent from "./components/hero";
import NavbarCompt from "./components/navbar";
import PayOn from "./components/PayOn";
import PeopleLove from "./components/PeopleLove";
import Testimoni from "./components/Testimoni";
import VideoResourceCenter from "./components/VideoResourceCenter";

export default function Home() {
  return (
    <main className="container space-y-10">
      <NavbarCompt />
      <HeroComponent />
      <VideoResourceCenter />
      <BestTools />
      <PeopleLove />
      <PayOn />
      <Testimoni />
      <Footer />
    </main>
  );
}
