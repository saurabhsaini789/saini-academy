"use client";

import Link from 'next/link';
import { useState } from 'react';
import './page.css';

export default function Blog() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            try {
                const response = await fetch('https://formspree.io/f/mvzbnppy', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({ email, inquiry: 'Insights Newsletter Subscription' })
                });
                if (response.ok) {
                    setIsSubscribed(true);
                    setEmail('');
                    setTimeout(() => setIsSubscribed(false), 5000);
                }
            } catch (error) {
                console.error('Submission error:', error);
            }
        }
    };
    const posts = [
        {
            title: "The Psychology of Corporate Conflict",
            category: "Performance Psychology",
            date: "October 12, 2023",
            excerpt: "Why typical conflict resolution fails, and how to use behavioral psychology to turn office friction into a competitive advantage.",
            readTime: "5 min read"
        },
        {
            title: "Designing the Perfect Customer Experience",
            category: "Corporate Learning",
            date: "September 28, 2023",
            excerpt: "A deep dive into how premium brands architect their customer journeys to maximize retention and lifetime value.",
            readTime: "7 min read"
        },
        {
            title: "Overcoming Mid-Career Stagnation",
            category: "Career Advice",
            date: "September 15, 2023",
            excerpt: "Actionable strategies for professionals who feel stuck, including lateral moves, upskilling, and strategic networking.",
            readTime: "6 min read"
        },
        {
            title: "Emotional Intelligence in the Remote Workplace",
            category: "Leadership",
            date: "August 30, 2023",
            excerpt: "How to maintain empathy, read virtual rooms, and lead with emotional intelligence when your team is distributed globally.",
            readTime: "8 min read"
        },
        {
            title: "The Illusion of Time Management",
            category: "Performance Psychology",
            date: "August 12, 2023",
            excerpt: "Why managing time is less important than managing energy and focus, and how to implement a high-performance routine.",
            readTime: "5 min read"
        }
    ];

    return (
        <>
            <section className="blog-hero">
                <div className="container max-w-md mx-auto text-center">
                    <h1 className="heading-lg mb-2">Insights & Articles</h1>
                    <p className="hero-subtitle">
                        Expert perspectives on career growth, corporate performance, leadership, and instructional design.
                    </p>
                </div>
            </section>

            <section className="section bg-surface">
                <div className="container">
                    <div className="blog-grid">
                        {posts.map((post, index) => (
                            <article key={index} className="blog-card">
                                <div className="blog-meta">
                                    <span className="blog-category">{post.category}</span>
                                    <span className="blog-read-time">{post.readTime}</span>
                                </div>
                                <h2 className="blog-title"><Link href="/contact">{post.title}</Link></h2>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <div className="blog-footer">
                                    <span className="blog-date">{post.date}</span>
                                    <Link href="/contact" className="read-more">Read Article &rarr;</Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section text-center">
                <div className="container max-w-md mx-auto subscribe-box">
                    <h2 className="heading-md mb-2">Never Miss an Insight</h2>
                    <p className="mb-3">Join our newsletter to receive exclusive strategies and updates directly in your inbox.</p>
                    {isSubscribed ? (
                        <div className="submission-success text-center">
                            <span className="icon text-primary font-bold">✓</span> <span className="text-white">Thanks for subscribing!</span>
                        </div>
                    ) : (
                        <form className="subscribe-form" onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    )}
                </div>
            </section>
        </>
    );
}
