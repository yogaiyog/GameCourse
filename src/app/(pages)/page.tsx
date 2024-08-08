import BriefPrograms from "../components/briefPrograms/page";
import ContactUs from "../components/contactUs/page";
import Hero from "../components/hero/page";
import Numbers from "../components/numbers/page";
import Overview from "../components/overview/page";
import Testimonials from "../components/testimonials/page";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Overview/>
      <Testimonials/>
      <Numbers/>
      <BriefPrograms/>
      <ContactUs/>
    </main>
  );  
}
