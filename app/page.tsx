import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
