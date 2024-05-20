import Navbar from "../Components/Navbar";
import HomeOne from "../Components/HomeOne";

import Skills from "../Components/Skills";
import ClientOnly from "@/Components/ClientOnly";
import Statistic from "@/Components/Statistic";
import Services from "@/Components/Services";
import Client from "@/Components/Client";
import Footer from "@/Components/Footer";
import Example from "@/Components/Example";
import Calendly from "@/Components/Calendly";




export default function Home() {

  
  
  
  return (
   <>
    <ClientOnly>
      <Navbar/>
      <HomeOne/>
      <Skills/>
      <Statistic/>
      <Example/>
      <Services/>
      <Calendly/>
      <Client/>
      <Footer/>
    </ClientOnly>
   </>
  );
}
