"use client";

import Link from 'next/link';
import useScroll from '../hooks/useScroll';

export default function Header() {
    const scrolled = useScroll(20);

    return (
        <header
            className={`flex items-center justify-between fixed z-50 transition-all duration-300 ${scrolled
                    ? 'top-4 left-0 right-0 mx-auto w-[calc(100%-2rem)] max-w-6xl bg-white/80 backdrop-blur-md shadow-md rounded-2xl py-3 px-6'
                    : 'top-0 w-full bg-transparent py-6 px-6'
                }`}
        >
            {/* Logo */}
            <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold font-display text-primary tracking-tight hover:opacity-90 transition-opacity">
                    Sentinel
                </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
                <Link href="#features" className="text-sm font-medium text-text-main hover:text-primary transition-colors">
                    Fonctionnalités
                </Link>
                <Link href="#pricing" className="text-sm font-medium text-text-main hover:text-primary transition-colors">
                    Tarifs
                </Link>
                <Link href="#about" className="text-sm font-medium text-text-main hover:text-primary transition-colors">
                    À propos
                </Link>
            </nav>

            {/* Call to Action */}
            <div className="flex items-center gap-4">
                <Link
                    href="/signup"
                    className="px-5 py-2.5 bg-secondary text-white text-sm font-bold rounded-full hover:bg-teal-600 transition-colors shadow-sm hover:shadow-md active:scale-95 transform duration-100"
                >
                    S&apos;inscrire
                </Link>
            </div>
        </header>
    );
}
