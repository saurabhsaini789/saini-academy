import Image from 'next/image';
import Link from 'next/link';
import './page.css';
import { PhilosophyIcon, GlobalIcon } from '@/components/Icons';

export default function About() {
    return (
        <>
            {/* About Hero */}
            <section className="about-hero">
                <div className="container text-center">
                    <h1 className="heading-lg mb-2">About Saurabh Saini</h1>
                    <p className="about-subtitle">Driving Performance, Transforming Careers</p>
                </div>
            </section>

            {/* Main Journey Section */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="journey-grid">
                        <div className="journey-content">
                            <h2 className="heading-md mb-2">The Journey</h2>
                            <p>
                                As a Corporate Performance Consultant and Instructional Designer, my career has been defined by a singular focus: helping individuals and organizations unlock their true potential.
                            </p>
                            <p>
                                My professional journey has taken me from the vibrant corporate hubs of India to the dynamic business environments of Canada. This international exposure has shaped my global perspective on learning, leadership, and performance psychology.
                            </p>
                            <p>
                                I believe that real growth doesn't come from passive theory. It comes from behavioral shifts, actionable strategies, and measurable results. That is the philosophy behind Saini Performance & Learning Academy.
                            </p>
                        </div>
                        <div className="journey-images">
                            <div className="image-wrapper main-img">
                                <Image
                                    src="/images/Consulting Mode - 1.png"
                                    alt="Performance and Learning Academy Consulting"
                                    width={600}
                                    height={800}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section bg-dark text-white">
                <div className="container">
                    <div className="text-center max-w-md mx-auto mb-4">
                        <h2 className="heading-md">Our Performance Philosophy</h2>
                        <p className="text-lg opacity-90">At Performance and Learning Academy, we believe that development is a continuous journey, not a destination.</p>
                    </div>

                    <div className="grid grid-2 philosophy-grid">
                        <div className="philosophy-card">
                            <div className="icon">
                                <PhilosophyIcon />
                            </div>
                            <h3>Performance Consulting Philosophy</h3>
                            <p>
                                Organizations don't just need training; they need behavioral change. My approach integrates instructional design with performance consulting to solve real business problems—whether it's improving sales enablement, handling conflict, or elevating the customer experience.
                            </p>
                        </div>

                        <div className="philosophy-card">
                            <div className="icon">
                                <GlobalIcon />
                            </div>
                            <h3>Vision for India & Global Professionals</h3>
                            <p>
                                The goal is to bridge the gap between academic knowledge and corporate execution. I want to equip professionals in India and globally with the premium, world-class skills needed to thrive in an increasingly competitive international market.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet The Expert Gallery */}
            <section className="section bg-dark text-center">
                <div className="container">
                    <h2 className="heading-md mb-3 text-white">The Expert Behind the Academy</h2>
                    <div className="gallery-grid">
                        <div className="gallery-item">
                            <Image src="/images/Speaker-Educator Mode - 1.png" alt="Speaker Mode" layout="fill" objectFit="cover" />
                        </div>
                        <div className="gallery-item">
                            <Image src="/images/Thought Leader Portrait - 1.png" alt="Thought Leader" layout="fill" objectFit="cover" />
                        </div>
                        <div className="gallery-item">
                            <Image src="/images/Black and white executive portrait - 1.png" alt="Executive" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                    <div className="mt-3">
                        <Link href="/contact" className="btn btn-primary">Book Saurabh for Speaking</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
