
import HeroSection from "../components/landingPage/HeroSection";
import ProblemSection from "../components/landingPage/ProblemSection";
import ProductShowcase from "../components/landingPage/ProductShowcase";
import SolutionSection from "../components/landingPage/SolutionSection";
import TrustIndicators from "../components/landingPage/TrustIndicators";
import Footer from "../components/shared/Footer";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import AnimatedContent from "../components/AnimatedContent";
import Header from "../components/shared/Header";
import DetailedProductFeatures from "../components/landingPage/DetailedProductFeatures";
import MedicalBenefits from "../components/landingPage/MedicalBenefits";
import ProductGallery from "../components/landingPage/ProductGallery";
import Testimonials from "../components/landingPage/Testimonials";
import GuaranteeSection from "../components/landingPage/GuaranteeSection";
import TechnicalSpecifications from "../components/landingPage/TechnicalSpecifications";


export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed inset-0 -z-10 w-full h-full">
        <BackgroundGradientAnimation />
      </div>
      <main className="relative z-10 flex flex-col min-h-screen w-full text-[#2C3E50]">
  <Header />
  <AnimatedContent><HeroSection /></AnimatedContent>
  <AnimatedContent distance={80} delay={0.1}><TrustIndicators /></AnimatedContent>
  <AnimatedContent distance={80} delay={0.2}><ProblemSection /></AnimatedContent>
  <AnimatedContent distance={80} delay={0.3}><SolutionSection /></AnimatedContent>
  
  {/* New sections go here */}
  <AnimatedContent distance={80} delay={0.4}><DetailedProductFeatures /></AnimatedContent>
  <AnimatedContent distance={80} delay={0.5}><MedicalBenefits /></AnimatedContent>
  <AnimatedContent distance={80} delay={0.6}><ProductGallery /></AnimatedContent>
  <AnimatedContent distance={80} delay={0.7}><TechnicalSpecifications /></AnimatedContent>
  
  <AnimatedContent distance={80} delay={0.8}><ProductShowcase /></AnimatedContent>
  <AnimatedContent distance={80} delay={0.9}><Testimonials /></AnimatedContent>
  <AnimatedContent distance={80} delay={1.0}><GuaranteeSection /></AnimatedContent>
  <AnimatedContent distance={40} delay={1.1}><Footer/></AnimatedContent>
</main>
    </div>
  );
}
