import Link from 'next/link';
import { Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-neutral-200 py-12">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Logo / Brand */}
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-xl font-bold font-display text-primary tracking-tight">
                        Sentinel
                    </span>
                    <p className="text-text-main text-sm mt-1">
                        © {new Date().getFullYear()} Sentinel. Tous droits réservés.
                    </p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-8">
                    <Link href="#" className="text-sm font-medium text-text-main hover:text-primary transition-colors">
                        Contact
                    </Link>
                    <Link href="#" className="text-sm font-medium text-text-main hover:text-primary transition-colors">
                        Mentions légales
                    </Link>
                </div>

                {/* Socials (Optional placeholder) */}
                <div className="flex items-center gap-4">
                    {/* Twitter/X */}
                    <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    {/* LinkedIn */}
                    <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
