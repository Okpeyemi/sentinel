import { Sparkles, ShieldCheck } from 'lucide-react';

export default function SocialProof() {
    return (
        <div className="mt-12 pt-8 w-full max-w-4xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center">

                {/* Freelancer Count */}
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-primary bg-neutral-200 flex items-center justify-center overflow-hidden`}>
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" />
                            </div>
                        ))}
                    </div>
                    <p className="text-sm font-medium text-neutral-200">
                        Rejoignez les <span className="font-bold text-white">+500 freelances</span> déjà inscrits
                    </p>
                </div>

                {/* Vertical Divider for desktop */}
                <div className="hidden md:block w-px h-8 bg-white/20"></div>

                {/* Badges */}
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <Sparkles className="w-4 h-4 text-neutral" strokeWidth={2} />
                        <span className="text-xs font-semibold text-white">Gemini 1.5 Pro</span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <ShieldCheck className="w-4 h-4 text-neutral" strokeWidth={2} />
                        <span className="text-xs font-semibold text-white">Conforme RGPD</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
