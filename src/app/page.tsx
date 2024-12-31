import Faq from "@/components/landingpage/faq";
import Footer from "@/components/landingpage/footer";
import Herosection from "@/components/landingpage/hero-section";
import StaticLogoCloud from "@/components/landingpage/logosection";
import Testimonials from "@/components/landingpage/testimonial";

export default function Home() {
  return (
    <main className=" ">
     <Herosection></Herosection>
     <StaticLogoCloud></StaticLogoCloud>
     <Testimonials></Testimonials>
     <Faq></Faq>
     <Footer></Footer>
    </main>
  );
}
