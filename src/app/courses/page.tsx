import Link from 'next/link';
import './page.css';

export default function Courses() {
    return (
        <>
            <section className="courses-hero">
                <div className="container text-center max-w-md mx-auto">
                    <h1 className="heading-lg mb-2">Online Courses & Memberships</h1>
                    <p className="hero-subtitle">
                        Access premium performance training, live sessions, and on-demand content from anywhere in the world.
                    </p>
                </div>
            </section>

            <section className="section bg-surface">
                <div className="container">
                    <div className="text-center section-header">
                        <h2 className="heading-md">Learning Pathways</h2>
                        <p className="section-subtitle">Choose the learning format that best fits your schedule and goals.</p>
                    </div>

                    <div className="grid grid-3">
                        {/* On-Demand */}
                        <div className="course-card">
                            <div className="course-label">Self-Paced</div>
                            <h3 className="course-title">Masterclass Series</h3>
                            <div className="course-price">Starting at $99</div>
                            <ul className="course-features">
                                <li>Pre-recorded high-quality video modules</li>
                                <li>Downloadable workbooks & frameworks</li>
                                <li>Lifetime access to course materials</li>
                                <li>Certificate of completion</li>
                            </ul>
                            <Link href="/contact" className="btn btn-secondary w-full">View Catalog</Link>
                        </div>

                        {/* Live Cohort */}
                        <div className="course-card featured">
                            <div className="course-label accent-label">Most Popular</div>
                            <h3 className="course-title">Live Cohort Programs</h3>
                            <div className="course-price">Application Only</div>
                            <ul className="course-features">
                                <li>8-week structured learning</li>
                                <li>Weekly live strategy sessions with Saurabh</li>
                                <li>Peer networking & group feedback</li>
                                <li>Project-based certification</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary w-full">Apply for Cohort</Link>
                        </div>

                        {/* Membership */}
                        <div className="course-card">
                            <div className="course-label">Continuous Growth</div>
                            <h3 className="course-title">Academy Membership</h3>
                            <div className="course-price">$49 / month</div>
                            <ul className="course-features">
                                <li>Access to all Masterclass Series content</li>
                                <li>Monthly live Q&A webinars</li>
                                <li>Exclusive community forum</li>
                                <li>Early access to new programs</li>
                            </ul>
                            <Link href="/contact" className="btn btn-secondary w-full">Join Membership</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section text-center">
                <div className="container max-w-md mx-auto">
                    <h2 className="heading-md mb-2">Future Course Platform</h2>
                    <p className="mb-3">
                        We are currently building our dedicated learning management system (LMS). Once launched, you will have seamless access to a centralized dashboard, tracking tools, and private community features.
                    </p>
                    <Link href="/contact" className="btn btn-primary">Join the Waitlist</Link>
                </div>
            </section>
        </>
    );
}
