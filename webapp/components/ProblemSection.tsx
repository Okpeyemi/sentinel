import { X } from 'lucide-react';

export default function ProblemSection() {
    const problems = [
        "Vous signez des contrats sans vraiment comprendre toutes les clauses",
        "Payer 200-300$ un avocat pour chaque contrat n'est pas réaliste",
        "Vous avez déjà eu des problèmes de paiement ou de propriété intellectuelle",
        "Vous perdez du temps à déchiffrer le jargon juridique",
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16 font-display">
                    Vous êtes freelance et...
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-6 rounded-2xl bg-neutral/30 hover:bg-neutral/50 transition-colors border border-transparent hover:border-neutral-200"
                        >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-1">
                                <X className="w-5 h-5 text-red-600" strokeWidth={2.5} />
                            </div>
                            <p className="text-lg text-text-main font-medium leading-relaxed">
                                {problem}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
