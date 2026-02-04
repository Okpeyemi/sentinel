export default function FAQ() {
    const faqs = [
        {
            question: "Est-ce que ça remplace un avocat ?",
            answer: "Non, mais c'est une première analyse abordable qui vous permet d'identifier les risques majeurs avant de consulter si nécessaire."
        },
        {
            question: "Mes contrats sont-ils confidentiels ?",
            answer: "Oui, absolument. Nous utilisons un chiffrement de bout en bout et vos documents sont supprimés de nos serveurs après l'analyse."
        },
        {
            question: "Quels types de contrats ?",
            answer: "Tous types de contrats freelances : prestations de services, missions, collaborations, devis signés, etc."
        },
        {
            question: "Quand sera-ce disponible ?",
            answer: "Lancement prévu très prochainement. Inscrivez-vous sur la waitlist pour obtenir un accès prioritaire."
        }
    ];

    return (
        <section className="py-24 bg-neutral-50 px-6" id="faq">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16 font-display">
                    Questions fréquentes
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-primary mb-3 font-display">
                                {faq.question}
                            </h3>
                            <p className="text-text-main leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
