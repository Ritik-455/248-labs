import Hero from "@/components/Hero";
import About from "@/components/About";
import Levelup from "@/components/Levelup";
import Team from "@/components/Team";
import "bootstrap/dist/css/bootstrap.min.css"
import Update from "@/components/Update";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Levelup />
      <Team />
      <Timeline/>
      <Update/>
      <Footer/>
    </>
  );
}
