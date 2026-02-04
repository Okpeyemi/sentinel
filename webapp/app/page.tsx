import Header from "../components/Header";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <ScrollReveal delay={0.2}>
                <ProblemSection />
            </ScrollReveal>
            <ScrollReveal>
                <SolutionSection />
            </ScrollReveal>
            <ScrollReveal>
                <HowItWorks />
            </ScrollReveal>
            <ScrollReveal>
                <FAQ />
            </ScrollReveal>
            <ScrollReveal>
                <CTASection />
            </ScrollReveal>
            <Footer />
        </div>
    );
}
