import Link from 'next/link';
import './page.css';
import Image from 'next/image';

import { CareerIcon, CorporateIcon, PerformanceIcon } from '@/components/Icons';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title animate-fade-in">Helping Professionals and Organizations Perform at Their Best</h1>
          <p className="hero-subtitle animate-fade-in delay-1">
            We provide corporate consulting, career programs, and performance training designed to build real-world skills and measurable results.
          </p>
          <div className="hero-actions animate-fade-in delay-2">
            <Link href="/consulting" className="btn btn-primary">Book a Consultation</Link>
            <Link href="/programs" className="btn btn-secondary" style={{ borderColor: 'var(--color-background)', color: 'var(--color-background)' }}>Explore Programs</Link>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section founder-section">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-image-wrapper">
              <Image
                src="/saini-academy/images/Thought Leader Portrait - 1.png"
                alt="Saurabh Saini"
                layout="fill"
                objectFit="cover"
                className="founder-image"
              />
            </div>
            <div className="founder-content">
              <h2 className="heading-md">Meet Saurabh Saini</h2>
              <h3 className="founder-title text-accent">Founder & Corporate Performance Consultant</h3>
              <p>
                With extensive international experience spanning Canada and global organizations, Saurabh combines corporate consulting, professional training, and career development into actionable insights.
              </p>
              <p>
                As an instructional designer and expert in learning, performance, and business skills, his mission is to drive tangible growth for both individuals and enterprises.
              </p>
              <div className="founder-stats">
                <div className="stat-item">
                  <span className="stat-number text-accent">10+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number text-accent">50+</span>
                  <span className="stat-label">Corporate Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number text-accent">5k+</span>
                  <span className="stat-label">Professionals Trained</span>
                </div>
              </div>
              <Link href="/about" className="btn btn-primary mt-2">Read Full Journey</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="section programs-section section-bg-light">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="heading-md">Our Core Programs</h2>
            <p className="section-subtitle">Comprehensive training pathways targeting different stages of your professional journey.</p>
          </div>

          <div className="grid grid-3">
            {/* Career Programs Card */}
            <div className="program-card">
              <div className="program-icon">
                <CareerIcon color="var(--color-accent)" />
              </div>
              <h3 className="program-title">Career Programs</h3>
              <p className="program-desc">
                Instructional Design, Corporate Communication, Interview Preparation, and Career Growth.
              </p>
              <Link href="/programs#career" className="program-link">View Details &rarr;</Link>
            </div>

            {/* Corporate Skills Card */}
            <div className="program-card">
              <div className="program-icon">
                <CorporateIcon color="var(--color-accent)" />
              </div>
              <h3 className="program-title">Corporate Skills</h3>
              <p className="program-desc">
                Conflict Management, Customer Experience, Emotional Intelligence, and Sales & Negotiation.
              </p>
              <Link href="/programs#corporate" className="program-link">View Details &rarr;</Link>
            </div>

            {/* Performance Card */}
            <div className="program-card">
              <div className="program-icon">
                <PerformanceIcon color="var(--color-accent)" />
              </div>
              <h3 className="program-title">Performance & Productivity</h3>
              <p className="program-desc">
                Focus and Time Management, Burnout and Resilience, Leadership Development.
              </p>
              <Link href="/programs#performance" className="program-link">View Details &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Consulting Highlight */}
      <section className="section consulting-highlight">
        <div className="container">
          <div className="consulting-box">
            <div className="consulting-content">
              <h2 className="heading-md">Partner with Us for Corporate Growth</h2>
              <p>
                Our bespoke consulting services range from learning strategy and sales enablement to leadership development. We embed in your organization to engineer performance improvements that impact the bottom line.
              </p>
              <Link href="/consulting" className="btn btn-primary">Book a Discovery Call</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="heading-md">Student & Corporate Success</h2>
            <p className="section-subtitle">Real results from professionals who have transformed their careers.</p>
          </div>

          <div className="grid grid-2">
            <div className="testimonial-card">
              <div className="testimonial-quote">"The leadership development program fundamentally changed how our management team handles conflict and drives results."</div>
              <div className="testimonial-author">
                <strong>Sarah Jenkins</strong>
                <span>VP Operations, TechGlobal Ltd</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">"Saurabh's interview preparation and career growth strategies helped me secure a senior role that I never thought possible so early in my career."</div>
              <div className="testimonial-author">
                <strong>Ankit Verma</strong>
                <span>Senior Analyst</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Short Section */}
      <section className="section vision-short-section">
        <div className="container">
          <div className="vision-short-grid">
            <div className="vision-short-content">
              <h2 className="heading-md mb-2">The Future of Performance & Learning</h2>
              <p className="vision-lead mb-2">The future of learning is performance-driven.</p>
              <p className="mb-2">
                Performance & Learning Academy is building a global platform focused on measurable growth, behavior change, and real business outcomes.
              </p>
              <p className="mb-3">
                We partner with organizations and professionals to move beyond training and create lasting performance transformation.
              </p>
              <Link href="/consulting" className="btn btn-primary">Explore Our Consulting Approach</Link>
            </div>
            <div className="vision-short-visual">
              <div className="vision-visual-box">
                <div className="visual-graphic"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-bg-dark text-center">
        <div className="container max-w-md mx-auto">
          <h2 className="heading-md mb-2">Ready to Elevate Your Performance?</h2>
          <p className="mb-3 text-lg">Join Performance and Learning Academy today and take the first step towards measurable success.</p>
          <div className="flex-center gap-2">
            <Link href="/contact" className="btn btn-primary">Get Started</Link>
            <Link href="/courses" className="btn btn-outline-light">Browse Courses</Link>
          </div>
        </div>
      </section>
    </>
  );
}
