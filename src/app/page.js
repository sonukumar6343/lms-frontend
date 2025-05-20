
import LandingSection from "../component/landingPage/LandingSection";
import TeachingNeeds from "../component/landingPage/TeachingNeeds";
import DeliverMonetize from "../component/landingPage/DeliverMonetize";
import FreeLMS from "../component/landingPage/FreeLMS";
import FloatingList from "../component/landingPage/FloatingList";
import FeaturesSection from "../component/landingPage/Features";
import FAQ from "../component/landingPage/Faqs";
// import Eliminations from "../component/landingPage/Eliminations";
// import Logos from "../component/landingPage/Logos";
import MultipleToolsSection from "../component/landingPage/MultipleToolSection";
import RequestCallback from "@/component/landingPage/RequestCallback";
import TeachersTeastimonials from "../component/landingPage/TeachersTestimonials";
import WhatsAppIcon from "@/component/landingPage/WhatsAppIcon";


export default function Home() {
  return (
    <div>
      <LandingSection />
      <TeachingNeeds />
      <DeliverMonetize />
      <FreeLMS />
      <FloatingList />
      <FeaturesSection />
      {/* <Eliminations /> */}
      {/* <Logos /> */}
      <MultipleToolsSection />
      <TeachersTeastimonials />
      <FAQ />
      <RequestCallback />
      <WhatsAppIcon />
    </div>
  );
}
