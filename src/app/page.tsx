import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
}
