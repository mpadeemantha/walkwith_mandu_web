import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Packages from "./components/Packages";
import NewsEvents from "./components/NewsEvents";
import ModernCTA from "./components/ModernCTA";
import ContactCTA from "./components/ContactCTA";
import FAQ from "./components/FAQ";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
                <Hero />
                <Experiences />

                <Reviews />
                <About />
                <ModernCTA />
                <Destinations />
                <FAQ />
            </main>

            <Footer />
        </div>
    );
}
