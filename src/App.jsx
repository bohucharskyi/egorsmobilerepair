import Hero from "./components/Hero";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import SocialFeed from "./components/SocialFeed";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f1a]">
      <Hero />
      <Services />
      <SocialFeed />
      <Reviews />
      <Footer />
    </div>
  );
}
