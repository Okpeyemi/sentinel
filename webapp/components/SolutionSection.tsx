import { Check } from 'lucide-react';

export default function SolutionSection() {
    const benefits = [
        {
            title: "Analyse complète",
            description: "Identification automatique des clauses problématiques"
        },
        {
            title: "Explications claires",
            description: "Pas de jargon, juste ce que ça signifie pour vous"
        },
        {
            title: "Suggestions concrètes",
            description: "Comment négocier ou reformuler les points risqués"
        },
        {
            title: "Score de risque",
            description: "Sachez en un coup d'œil si le contrat est équitable"
        }
    ];

    return (
        <section className="py-24 bg-neutral-50">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16 font-display">
                    Avec Sentinel, vous obtenez en quelques minutes :
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mt-1">
                                <Check className="w-5 h-5 text-secondary" strokeWidth={2.5} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2 font-display">{benefit.title}</h3>
                                <p className="text-text-main leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
