import { Upload, Bot, FileText } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        {
            title: "Uploadez votre contrat",
            description: "(PDF ou Word)",
            icon: <Upload className="w-8 h-8 text-primary" strokeWidth={2} />
        },
        {
            title: "L'IA analyse",
            description: "en 2 minutes les clauses critiques",
            icon: <Bot className="w-8 h-8 text-primary" strokeWidth={2} />
        },
        {
            title: "Recevez un rapport",
            description: "détaillé avec recommandations",
            icon: <FileText className="w-8 h-8 text-primary" strokeWidth={2} />
        }
    ];

    return (
        <section className="py-24 bg-white" id="how-it-works">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16 font-display">
                    Comment ça marche
                </h2>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-neutral-200 -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-6 shadow-sm">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2 font-display">
                                {step.title}
                            </h3>
                            <p className="text-text-main font-medium">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
