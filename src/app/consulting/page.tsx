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
