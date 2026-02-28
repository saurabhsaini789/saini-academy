"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import './Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <header className="header">
            <div className="container header-container">
                <Link href="/" className="logo">
                    <svg className="logo-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="8" fill="var(--color-accent)" />
                        <path d="M10 22L16 12L22 22H10Z" fill="var(--color-primary)" />
                        <circle cx="16" cy="10" r="2" fill="var(--color-primary)" />
                    </svg>
                    <span>PLA</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
                    <Link href="/journey" className={`nav-link ${isActive('/journey') ? 'active' : ''}`}>My Journey</Link>
                    <Link href="/programs" className={`nav-link ${isActive('/programs') || pathname?.startsWith('/programs/') ? 'active' : ''}`}>Programs</Link>
                    <Link href="/consulting" className={`nav-link ${isActive('/consulting') ? 'active' : ''}`}>Consulting</Link>
                    <Link href="/courses" className={`nav-link ${isActive('/courses') ? 'active' : ''}`}>Courses</Link>
                    <Link href="/insights" className={`nav-link ${isActive('/insights') ? 'active' : ''}`}>Insights</Link>
                    <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
                </nav>

                <div className="header-actions desktop-only">
                    <Link href="/contact" className="btn btn-primary">Book a Consultation</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Navigation"
                >
                    <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link href="/journey" className={`nav-link ${isActive('/journey') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>My Journey</Link>
                    <Link href="/programs" className={`nav-link ${isActive('/programs') || pathname?.startsWith('/programs/') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Programs</Link>
                    <Link href="/consulting" className={`nav-link ${isActive('/consulting') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Consulting</Link>
                    <Link href="/courses" className={`nav-link ${isActive('/courses') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Courses</Link>
                    <Link href="/insights" className={`nav-link ${isActive('/insights') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Insights</Link>
                    <div className="mobile-cta d-md-none mt-2">
                        <Link href="/contact" className="btn btn-primary w-full text-center" onClick={() => setIsMenuOpen(false)}>Get in Touch</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
