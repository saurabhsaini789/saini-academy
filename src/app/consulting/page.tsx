import Link from 'next/link';
import './page.css';

export default function Consulting() {
    return (
        <>
            <section className="consulting-hero">
                <div className="container max-w-md mx-auto text-center">
                    <h1 className="heading-lg mb-2">Corporate Consulting Partner</h1>
                    <p className="hero-subtitle">
                        Strategic interventions designed to elevate your organizational performance, align your teams, and drive sustainable revenue growth.
                    </p>
                </div>
            </section>

            {/* Measurable Impact Section */}
            <section className="section bg-surface impact-section">
                <div className="container">
                    <div className="text-center section-header max-w-lg mx-auto">
                        <h2 className="heading-md mb-2">Measurable Impact, Not Just Training</h2>
                        <p className="section-subtitle">
                            My work focuses on creating real, measurable business outcomes.
                            I help organizations move beyond knowledge transfer to performance improvement and behavioral change.
                        </p>
                    </div>

                    <div className="impact-grid mb-4">
                        <div className="impact-card">
                            <div className="impact-icon mb-2">📈</div>
                            <h3 className="impact-title mb-1">Hundreds Impacted</h3>
                            <p className="impact-desc">Designed and supported learning initiatives impacting hundreds of frontline and sales professionals.</p>
                        </div>
                        <div className="impact-card">
                            <div className="impact-icon mb-2">💡</div>
                            <h3 className="impact-title mb-1">Sales & Experience</h3>
                            <p className="impact-desc">Contributed to programs focused on improving sales performance and customer experience.</p>
                        </div>
                        <div className="impact-card">
                            <div className="impact-icon mb-2">🚀</div>
                            <h3 className="impact-title mb-1">Reduced Ramp-up</h3>
                            <p className="impact-desc">Built structured onboarding and learning journeys to reduce ramp-up time.</p>
                        </div>
                        <div className="impact-card">
                            <div className="impact-icon mb-2">🎯</div>
                            <h3 className="impact-title mb-1">Business Alignment</h3>
                            <p className="impact-desc">Developed performance-focused training aligned with real business KPIs.</p>
                        </div>
                        <div className="impact-card">
                            <div className="impact-icon mb-2">🔍</div>
                            <h3 className="impact-title mb-1">Skill Gap Analysis</h3>
                            <p className="impact-desc">Supported leaders in identifying skill gaps and performance barriers.</p>
                        </div>
                        <div className="impact-card">
                            <div className="impact-icon mb-2">⚙️</div>
                            <h3 className="impact-title mb-1">Operational Excellence</h3>
                            <p className="impact-desc">Created learning strategies tied to business outcomes and operational excellence.</p>
                        </div>
                    </div>

                    <div className="impact-pillars-row">
                        <div className="impact-pillars-column">
                            <h3 className="heading-sm mb-2 text-primary">Industries & Environments</h3>
                            <ul className="impact-list">
                                <li>Retail and sales</li>
                                <li>Customer experience</li>
                                <li>Manufacturing and operations</li>
                                <li>Corporate learning and development</li>
                            </ul>
                        </div>
                        <div className="impact-pillars-column">
                            <h3 className="heading-sm mb-2 text-primary">Performance-Driven Approach</h3>
                            <p className="mb-2">I combine the following pillars to ensure learning leads to real improvement, not just awareness:</p>
                            <div className="pillars-grid">
                                <div className="pillar-item">Instructional design</div>
                                <div className="pillar-item">Behavioral psychology</div>
                                <div className="pillar-item">Data insights</div>
                                <div className="pillar-item">Performance consulting</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-4 pt-3">
                        <Link href="/contact" className="btn btn-primary btn-lg">Book a Performance Consultation</Link>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="text-center section-header">
                        <h2 className="heading-md">Our Consulting Services</h2>
                        <p className="section-subtitle">We don't just advise; we embed within your workflows to architect solutions that stick.</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-number">01</div>
                            <h3 className="service-title">Learning Strategy</h3>
                            <p>Designing comprehensive, organization-wide learning architectures that upskill employees and directly support business objectives.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-number">02</div>
                            <h3 className="service-title">Sales Enablement</h3>
                            <p>Equipping your revenue teams with the tools, content, and psychological frameworks needed to close complex deals.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-number">03</div>
                            <h3 className="service-title">Customer Experience</h3>
                            <p>Mapping and refining the customer journey to ensure every touchpoint reflects your brand's premium value proposition.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-number">04</div>
                            <h3 className="service-title">Leadership Development</h3>
                            <p>Identifying high-potential talent and building cohorts capable of navigating ambiguity and driving strategic initiatives.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-number">05</div>
                            <h3 className="service-title">Performance Improvement</h3>
                            <p>Conducting deep-dive audits into operational bottlenecks and deploying behavioral interventions to boost team output.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-dark text-center">
                <div className="container max-w-md mx-auto">
                    <h2 className="heading-md mb-2 text-white">Let's Discuss Your Organization's Needs</h2>
                    <p className="mb-3 text-lg">Every corporate challenge is unique. Book a discovery call to explore how our consulting frameworks can be customized for your specific context.</p>
                    <Link href="/contact" className="btn btn-primary btn-lg">Book a Discovery Call</Link>
                </div>
            </section>
        </>
    );
}
