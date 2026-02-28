import Link from 'next/link';
import TransformationStories from '@/components/TransformationStories';
import './page.css';

export default function Programs() {
    return (
        <>
            <section className="programs-hero">
                <div className="container text-center max-w-md mx-auto">
                    <h1 className="heading-lg mb-2">Our Programs</h1>
                    <p className="hero-subtitle">
                        Curated learning experiences designed for real-world application, behavioral change, and measurable performance enhancement.
                    </p>
                </div>
            </section>

            <div className="programs-nav section-bg-light">
                <div className="container flex-center flex-wrap" style={{ gap: '2.5rem' }}>
                    <a href="#career" className="btn btn-secondary">Career Programs</a>
                    <a href="#corporate" className="btn btn-secondary">Corporate Skills</a>
                    <a href="#performance" className="btn btn-secondary">Performance & Productivity</a>
                </div>
            </div>

            {/* Career Programs */}
            <section id="career" className="section">
                <div className="container">
                    <div className="program-category-header">
                        <h2 className="heading-md">Career Programs</h2>
                        <p className="section-subtitle">Accelerate your professional growth and stand out in a competitive job market.</p>
                    </div>

                    <div className="grid grid-2 list-grid">
                        <div className="list-card">
                            <h3>Instructional Design</h3>
                            <p>Master the art and science of creating engaging learning experiences that drive results.</p>
                            <Link href="/programs/career" className="text-link">Enquire Now &rarr;</Link>
                        </div>
                        <div className="list-card">
                            <h3>Corporate Communication</h3>
                            <p>Enhance your verbal and written communication to lead effectively and articulate with clarity.</p>
                            <Link href="/programs/career" className="text-link">Enquire Now &rarr;</Link>
                        </div>
                        <div className="list-card">
                            <h3>Interview Preparation</h3>
                            <p>Proven strategies to communicate your value, handle tough questions, and land your ideal role.</p>
                            <Link href="/programs/career" className="text-link">Enquire Now &rarr;</Link>
                        </div>
                        <div className="list-card">
                            <h3>Career Growth</h3>
                            <p>Strategic mapping for promotions, lateral moves, and continuous professional development.</p>
                            <Link href="/contact" className="text-link">Enquire Now &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Corporate Skills */}
            <section id="corporate" className="section bg-surface">
                <div className="container">
                    <div className="program-category-header">
                        <h2 className="heading-md">Corporate Skills</h2>
                        <p className="section-subtitle">Essential competencies for thriving in high-stakes corporate environments.</p>
                    </div>

                    <div className="grid grid-2 list-grid">
                        <div className="list-card">
                            <h3>Conflict Management</h3>
                            <p>Tools and psychology to transform office friction into collaborative solutions.</p>
                            <Link href="/programs/corporate" className="text-link">Enquire Now &rarr;</Link>
                        </div>
                        <div className="list-card">
                            <h3>Customer Experience</h3>
                            <p>Architecting touchpoints that turn regular clients into lifelong advocates.</p>
                            <Link href="/programs/corporate" className="text-link">Enquire Now &rarr;</Link>
                        </div>
                        <div className="list-card">
                            <h3>Emotional Intelligence</h3>
                            <p>Self-awareness, empathy, and behavioral regulation for modern leadership.</p>
                            <Link href="/programs/corporate" className="text-link">Enquire Now &rarr;</Link>
                        </div>
                        <div className="list-card">
                            <h3>Sales and Negotiation</h3>
                            <p>Persuasion frameworks to close high-ticket deals without compromising on value.</p>
                            <Link href="/contact" className="text-link">Enquire Now &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance */}
            <section id="performance" className="section">
                <div className="container">
                    <div className="program-category-header">
                        <h2 className="heading-md">Performance & Productivity</h2>
                        <p className="section-subtitle">Unlock peak cognitive performance and sustainable energy management.</p>
                    </div>

                    <div className="grid list-grid gap-y-extra">
                        <div className="list-card horizontal">
                            <div className="card-content">
                                <h3>Focus and Time Management</h3>
                                <p>Advanced systems to reclaim hours of your day, eliminate distractions, and focus entirely on deep work.</p>
                                <Link href="/programs/performance" className="btn btn-primary mt-2">Book Training</Link>
                            </div>
                        </div>
                        <div className="list-card horizontal">
                            <div className="card-content">
                                <h3>Burnout and Resilience</h3>
                                <p>Psychological strategies to bounce back from setbacks, manage stress, and maintain high output without exhaustion.</p>
                                <Link href="/programs/performance" className="btn btn-primary mt-2">Book Training</Link>
                            </div>
                        </div>
                        <div className="list-card horizontal">
                            <div className="card-content">
                                <h3>Leadership Development</h3>
                                <p>Influence without authority, team motivation mechanics, and strategic decision-making for current and future leaders.</p>
                                <Link href="/contact" className="btn btn-primary mt-2">Book Training</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transformation Stories Section */}
            <TransformationStories />

            {/* Custom Consulting CTA */}
            <section className="section bg-dark text-center">
                <div className="container max-w-md mx-auto">
                    <h2 className="heading-md mb-2 text-white">Need a Customized Program?</h2>
                    <p className="mb-3 text-lg">We tailor our curriculum to meet the specific challenges and goals of your organization.</p>
                    <Link href="/consulting" className="btn btn-primary">Discuss Corporate Consulting</Link>
                </div>
            </section>
        </>
    );
}
