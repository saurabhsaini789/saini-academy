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
                                    src="/saini-academy/images/Consulting Mode - 1.png"
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

            {/* Timeline Section */}
            <section className="timeline-section section">
                <div className="container">
                    <div className="text-center max-w-md mx-auto mb-4">
                        <h2 className="heading-md">My Evolution</h2>
                        <p className="opacity-90">A timeline of relentless growth, learning strategy, and business transformation.</p>
                    </div>
                    <div className="timeline">

                        {/* 2018 item */}
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">2018</span>
                                <h3 className="heading-sm mb-1">Early Foundation</h3>
                                <div className="timeline-card">
                                    <p className="mb-2">
                                        In 2018, I completed my Bachelor of Science. This phase built my analytical thinking and structured problem-solving approach, which later became the foundation of my performance and learning philosophy.
                                    </p>
                                    <div className="callout callout-skills">
                                        <strong>Key Focus:</strong> Analytical thinking, structured logic, scientific problem-solving.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2020-2021 item */}
                        <div className="timeline-item reverse">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">2020 &ndash; 2021</span>
                                <h3 className="heading-sm mb-1">Teaching & Coaching Years</h3>
                                <div className="timeline-card">
                                    <p className="mb-2">
                                        In 2020, I completed my Bachelor of Education and began my professional journey as an educator. I taught in Saraswati High School (Chhachhrauli), worked with Chetanya Classes focusing on English communication, and conducted private coaching in my local community.
                                    </p>
                                    <p className="mb-2 font-medium italic text-muted">
                                        This period shaped my belief that learning must be practical, engaging, and outcome-driven.
                                    </p>
                                    <div className="callout callout-skills">
                                        <strong>Skills Developed:</strong> Classroom facilitation, learner psychology, coaching mindset, real-world communication.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2022 item */}
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">2022</span>
                                <h3 className="heading-sm mb-1">Transition to Global Learning</h3>
                                <div className="timeline-card">
                                    <Image
                                        src="/saini-academy/images/Speaker-Educator Mode - 1.png"
                                        alt="Global Journey"
                                        width={500} height={300}
                                        className="timeline-image"
                                    />
                                    <p className="mt-2 mb-2">
                                        In January 2022, I moved to Canada and started my E-Learning Design and Training Development program. To gain real-world exposure, I worked in diverse environments including Ashley Furniture HomeStore (sales/customer experience) and FCA (manufacturing/operations).
                                    </p>
                                    <p className="mb-2 font-medium italic text-muted">
                                        This phase transformed my perspective from teaching to business performance and results.
                                    </p>
                                    <div className="callout callout-impact">
                                        <strong>Real-World Discovery:</strong> Customer psychology, operational pressure, global workplace culture, and front-line business realities.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2023 item */}
                        <div className="timeline-item reverse">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">2023</span>
                                <h3 className="heading-sm mb-1">Instructional Design & Corporate Learning</h3>
                                <div className="timeline-card">
                                    <p className="mb-2">
                                        In May 2023, I began my internship as an Instructional Designer at The Dufresne Group, transitioning to a full-time role by August. I worked on corporate training programs, sales enablement, and digital learning design to solve real business challenges.
                                    </p>
                                    <div className="callout callout-mindset">
                                        <strong>Mindset Shift:</strong> Moving from traditional education creation to strategic learning and performance consulting.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2024 item */}
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">2024 &ndash; Present</span>
                                <h3 className="heading-sm mb-1">Performance & Process Excellence</h3>
                                <div className="timeline-card">
                                    <p className="mt-2 mb-2">
                                        Promoted to expand my responsibilities across Instructional Design and Process Analysis. I now spearhead performance improvement initiatives, business process optimization, and data-driven learning tied to strict corporate outcomes.
                                    </p>
                                    <p className="mb-2 font-medium italic" style={{ color: 'var(--color-primary)' }}>
                                        Learning alone does not create results. Performance, systems, and behavior change do.
                                    </p>
                                    <div className="callout callout-skills">
                                        <strong>Current Focus:</strong> Sales and operational excellence, measurable business impact, human performance architecture.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="section vision-section bg-surface">
                <div className="container">
                    <div className="text-center max-w-lg mx-auto mb-4">
                        <h2 className="heading-md text-primary mb-2">The Future of Performance & Learning</h2>
                        <p className="text-lg text-primary font-medium mb-2">
                            The future of learning is not about courses.<br />
                            It is about performance, adaptability, and measurable growth.
                        </p>
                        <p className="text-muted">
                            Over the next few years, my focus is to build the Performance & Learning Academy into a global platform that helps organizations and professionals move beyond traditional training and create real performance outcomes.
                        </p>
                    </div>

                    <div className="vision-grid grid grid-2 mb-4">
                        <div className="vision-card">
                            <h3 className="heading-sm mb-2 text-primary">Organizational Impact</h3>
                            <p className="mb-2 text-muted">I aim to help organizations:</p>
                            <ul className="vision-list">
                                <li>Improve employee performance and productivity</li>
                                <li>Build future-ready skills</li>
                                <li>Strengthen leadership and sales capability</li>
                                <li>Align learning with business goals</li>
                                <li>Create measurable and sustainable results</li>
                            </ul>
                        </div>
                        <div className="vision-card">
                            <h3 className="heading-sm mb-2 text-primary">Global Expansion</h3>
                            <p className="mb-2 text-muted">As I expand my work in India and global markets, my vision is to:</p>
                            <ul className="vision-list">
                                <li>Partner with organizations to solve real performance challenges</li>
                                <li>Support startups and growing businesses</li>
                                <li>Build performance-driven cultures</li>
                                <li>Offer consulting, coaching, and digital learning</li>
                                <li>Create scalable performance systems</li>
                            </ul>
                        </div>
                    </div>

                    <div className="vision-conclusion max-w-lg mx-auto text-center mt-4">
                        <p className="mb-2 text-primary font-medium text-lg">
                            I believe the workforce of the future needs more than knowledge. It needs clarity, structure, and the right behavioral systems.
                        </p>
                        <p className="mb-2 text-muted">
                            India has immense talent and potential. With the right performance mindset, individuals and organizations can compete globally.
                        </p>
                        <div className="vision-highlight mt-3">
                            The Performance & Learning Academy is built to bridge the gap between learning and real-world impact.
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
                            <Image src="/saini-academy/images/Speaker-Educator Mode - 1.png" alt="Speaker Mode" layout="fill" objectFit="cover" />
                        </div>
                        <div className="gallery-item">
                            <Image src="/saini-academy/images/Thought Leader Portrait - 1.png" alt="Thought Leader" layout="fill" objectFit="cover" />
                        </div>
                        <div className="gallery-item">
                            <Image src="/saini-academy/images/Black and white executive portrait - 1.png" alt="Executive" layout="fill" objectFit="cover" />
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
