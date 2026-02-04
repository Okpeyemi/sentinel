"use client";

import SocialProof from "./SocialProof";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <main className="flex flex-col items-center justify-center mx-6 mt-22 px-24 py-40 bg-primary rounded-2xl text-center overflow-hidden relative">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-6xl font-display mb-6 !text-neutral leading-tight"
            >
                Signez vos contrats freelance en toute confiance
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg md:text-xl text-neutral-200 max-w-2xl font-body mb-10"
            >
                Notre IA analyse vos contrats en 2 minutes et identifie les clauses risquées avant que vous ne signiez
            </motion.p>

            <motion.form
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="w-full max-w-lg flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 shadow-lg"
            >
                <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="flex-1 bg-transparent px-6 py-3 text-white placeholder-neutral-300 outline-none text-base"
                    required
                />
                <button
                    type="submit"
                    className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-neutral-100 transition-colors text-sm uppercase tracking-wide cursor-pointer"
                >
                    Join the waitlist
                </button>
            </motion.form>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <SocialProof />
            </motion.div>
        </main>
    );
}
