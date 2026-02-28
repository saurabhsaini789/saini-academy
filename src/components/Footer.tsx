"use client";

import Link from 'next/link';
import { useState } from 'react';
import './Footer.css';

import ComingSoonModal from './ComingSoonModal';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 5000);
        }
    };

    return (
        <footer className="footer bg-primary">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand & Summary */}
                    <div className="footer-section">
                        <h3 className="footer-brand">Performance and Learning Academy</h3>
                        <p className="footer-desc">
                            Helping Professionals and Organizations Perform at Their Best. We provide corporate consulting, career programs, and performance training designed to build real-world skills and measurable results.
                        </p>
                        <div className="footer-social">
                            <button onClick={() => setIsModalOpen(true)} className="social-link-btn">LinkedIn</button>
                            <button onClick={() => setIsModalOpen(true)} className="social-link-btn">𝕏</button>
                            <button onClick={() => setIsModalOpen(true)} className="social-link-btn">YouTube</button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link href="/about">About the Founder</Link></li>
                            <li><Link href="/programs">Our Programs</Link></li>
                            <li><Link href="/consulting">Corporate Consulting</Link></li>
                            <li><Link href="/courses">Online Courses</Link></li>
                            <li><Link href="/insights">Insights & Blog</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="footer-section">
                        <h4 className="footer-heading">Stay Updated</h4>
                        <p className="footer-desc mb-1">Get the latest performance strategies in your inbox.</p>
                        {isSubscribed ? (
                            <div className="subscribe-success">
                                <span className="icon">✓</span> Thanks for subscribing!
                            </div>
                        ) : (
                            <form className="footer-subscribe" onSubmit={handleSubscribe}>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="subscribe-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="subscribe-btn">Join</button>
                            </form>
                        )}
                        <div className="footer-cta mt-2">
                            <Link href="/contact" className="btn btn-outline-light">Get in Touch</Link>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>&copy; {currentYear} Performance and Learning Academy. All rights reserved.</p>
                    <div className="footer-policy-links">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
            <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </footer>
    );
}
