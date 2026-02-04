export default function CTASection() {
    return (
        <section className="py-24 bg-primary text-center px-6">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
                    Prêt à sécuriser vos contrats ?
                </h2>
                <p className="text-xl text-neutral-300 mb-10 max-w-2xl font-body">
                    Ne laissez plus le jargon juridique vous mettre en danger. Rejoignez la waitlist dès maintenant.
                </p>

                <form className="w-full max-w-md flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 shadow-lg">
                    <input
                        type="email"
                        placeholder="Votre adresse email"
                        className="flex-1 bg-transparent px-6 py-3 text-white placeholder-neutral-300 outline-none text-base"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-neutral-100 transition-colors text-sm uppercase tracking-wide cursor-pointer"
                    >
                        Rejoindre
                    </button>
                </form>
            </div>
        </section>
    );
}
