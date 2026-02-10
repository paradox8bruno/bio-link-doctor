import Hero from "@/components/capture/Hero";
import Identification from "@/components/capture/Identification";
import Authority from "@/components/capture/Authority";
import GuideContents from "@/components/capture/GuideContents";
import ForWhom from "@/components/capture/ForWhom";
import LeadForm from "@/components/capture/LeadForm";
import Footer from "@/components/capture/Footer";

const Capture = () => {
  return (
    <div className="theme-capture">
      <main className="min-h-screen bg-background text-foreground font-capture-body">
        <Hero />
        <Identification />
        <Authority />
        <GuideContents />
        <ForWhom />
        <LeadForm />
        <Footer />
      </main>
    </div>
  );
};

export default Capture;
