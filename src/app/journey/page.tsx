import Image from 'next/image';
import Link from 'next/link';
import './page.css';

export const metadata = {
    title: 'My Journey | Performance & Learning Academy',
    description: 'Explore the professional evolution from teaching to corporate performance consulting, instructional design, and learning strategy.',
    keywords: 'Performance consulting, Instructional design, Learning and development, Corporate training, Sales training, Behavior change, Learning strategy'
};

export default function JourneyTimeline() {
    return (
        <div className="journey-page">
            <section className="journey-hero">
                <div className="container text-center max-w-lg mx-auto">
                    <h1 className="heading-xl mb-2">My Journey</h1>
                    <p className="hero-subtitle">
                        From classroom education to global corporate performance. A timeline of relentless growth, learning strategy, and business transformation.
                    </p>
                </div>
            </section>

            <section className="quote-section bg-surface text-center section">
                <div className="container max-w-md mx-auto">
                    <blockquote className="premium-quote">
                        &ldquo;Learning is not about information. It is about transformation and performance.&rdquo;
                    </blockquote>
                </div>
            </section>

            <section className="timeline-section section">
                <div className="container">
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
                                    <Image
                                        src="/saini-academy/images/Consulting Mode - 1.png"
                                        alt="Performance Consulting"
                                        width={500} height={300}
                                        className="timeline-image"
                                    />
                                    <p className="mt-2 mb-2">
                                        Promoted to expand my responsibilities across Instructional Design and Process Analysis. I now spearhead performance improvement initiatives, business process optimization, and data-driven learning tied to strict corporate outcomes.
                                    </p>
                                    <p className="mb-2 font-medium italic text-primary">
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

            <section className="philosophy-section section bg-surface">
                <div className="container">
                    <div className="grid-2 align-center">
                        <div>
                            <h2 className="heading-md mb-2">My Core Philosophy</h2>
                            <p className="mb-2"><strong>Why Most Training Fails:</strong> Traditional training focuses on checking boxes and delivering information. It ignores the context of the workflow, human behavior, and the actual business goal.</p>
                            <p className="mb-2"><strong>How Performance-Driven Learning Works:</strong> We don't start with a course; we start with the performance gap. By combining instructional design, behavioral psychology, and process analysis, we architect solutions that change habits and drive ROI.</p>
                        </div>
                        <div className="philosophy-image-container">
                            <Image
                                src="/saini-academy/images/Black and white executive portrait - 1.png"
                                alt="Executive Philosophy"
                                width={500} height={600}
                                className="rounded-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section text-center">
                <div className="container max-w-md mx-auto">
                    <h2 className="heading-md mb-2">Ready to Elevate Your Organization?</h2>
                    <p className="mb-3">Partner with us to transform your training into measurable business performance. Explore our case studies or reach out directly.</p>
                    <div className="flex justify-center gap-2">
                        <Link href="/consulting" className="btn btn-secondary">Explore Consulting</Link>
                        <Link href="/contact" className="btn btn-primary">Work With Me</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
