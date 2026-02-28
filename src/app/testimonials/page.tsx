import Link from 'next/link';
import './page.css';

export default function Testimonials() {
    const corporateTestimonials = [
        {
            quote: "Performance and Learning Academy redefined our approach to sales. The combination of psychological frameworks and practical sales enablement resulted in a 30% increase in closed deals over two quarters.",
            author: "Michael T.",
            role: "VP of Sales, Tech Innovators Group"
        },
        {
            quote: "Their leadership development program is second to none. Our managers transitioned from conflict-avoidant supervisors into empathetic, decisive leaders capable of handling high-stakes friction.",
            author: "Priya R.",
            role: "CHRO, Global Financial Services"
        }
    ];

    const studentTestimonials = [
        {
            quote: "I was stuck at the mid-management level for three years. Saurabh's career growth program gave me the exact blueprint to reposition myself, and I landed a Director role within four months.",
            author: "David Chen",
            role: "Director of Operations"
        },
        {
            quote: "The interview preparation sessions were a game changer. I learned how to articulate my value proposition confidently, helping me secure a position at a tier-1 consulting firm.",
            author: "Aisha M.",
            role: "Senior Consultant"
        },
        {
            quote: "As an instructional designer, the masterclass helped me elevate my content from 'informational' to 'transformational'. I now design programs that create measurable behavioral change.",
            author: "James Wilson",
            role: "Lead Instructional Designer"
        }
    ];

    return (
        <>
            <section className="testimonials-hero">
                <div className="container text-center">
                    <h1 className="heading-lg mb-2">Success Stories</h1>
                    <p className="hero-subtitle">
                        See how Performance and Learning Academy has helped individuals and teams achieve excellence.
                    </p>
                </div>
            </section>

            <section className="section bg-surface">
                <div className="container">
                    <div className="text-center section-header">
                        <h2 className="heading-md">Corporate Success Stories</h2>
                        <p className="section-subtitle">Impactful consulting that drives the bottom line.</p>
                    </div>
                    <div className="grid grid-2">
                        {corporateTestimonials.map((t, index) => (
                            <div key={index} className="testimonial-card-large">
                                <div className="quote-icon">“</div>
                                <p className="quote-text">{t.quote}</p>
                                <div className="author-info">
                                    <div className="author-name">{t.author}</div>
                                    <div className="author-role">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="text-center section-header">
                        <h2 className="heading-md">Student Transformations</h2>
                        <p className="section-subtitle">Accelerating professional trajectories across industries.</p>
                    </div>
                    <div className="grid grid-3">
                        {studentTestimonials.map((t, index) => (
                            <div key={index} className="testimonial-card-standard">
                                <p className="quote-text">"{t.quote}"</p>
                                <div className="author-info">
                                    <div className="author-name">{t.author}</div>
                                    <div className="author-role">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-dark text-center">
                <div className="container max-w-md mx-auto">
                    <h2 className="heading-md mb-2 text-white">Ready to Create Your Own Success Story?</h2>
                    <p className="mb-3 text-lg">Whether you are an individual looking to accelerate your career or an organization seeking performance consulting, we are here to help.</p>
                    <div className="flex-center gap-2">
                        <Link href="/contact" className="btn btn-primary">Book a Consultation</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
