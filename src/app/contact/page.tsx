"use client";

import { useState } from 'react';
import './page.css';
import { LocationIcon, MailIcon, WhatsAppIcon } from '@/components/Icons';
import ComingSoonModal from '@/components/ComingSoonModal';

export default function Contact() {
    const [activeTab, setActiveTab] = useState<'message' | 'call'>('message');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        inquiry: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/mvzbnppy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    inquiry: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error('Submission error:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    return (
        <>
            <section className="contact-hero">
                <div className="container max-w-md mx-auto text-center">
                    <h1 className="heading-lg mb-2">Get in Touch</h1>
                    <p className="hero-subtitle">
                        Book a discovery call, enquire about corporate consulting, or leave a message.
                    </p>
                </div>
            </section>

            <section className="section bg-surface">
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Information */}
                        <div className="contact-info">
                            <h2 className="heading-md mb-2">Connect with Us</h2>
                            <p className="info-desc">
                                Whether you need bespoke corporate consulting, a career breakthrough, or a keynote speaker, Performance and Learning Academy is here to partner with you.
                            </p>

                            <ul className="info-list">
                                <li>
                                    <span className="info-icon">
                                        <LocationIcon />
                                    </span>
                                    <div>
                                        <strong>Global & Online</strong>
                                        <span>Available for international consulting and virtual coaching.</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="info-icon">
                                        <MailIcon />
                                    </span>
                                    <div>
                                        <strong>Email Us</strong>
                                        <span>info@sainiacademy.com</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="info-icon">
                                        <WhatsAppIcon />
                                    </span>
                                    <div>
                                        <strong>WhatsApp Support</strong>
                                        <span>Available for quick course inquiries.</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="social-links mt-3">
                                <a href="https://www.linkedin.com/in/iamsaurabhsaini/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>in</a>
                                <button onClick={() => setIsModalOpen(true)} className="social-btn" aria-label="Twitter">𝕏</button>
                                <button onClick={() => setIsModalOpen(true)} className="social-btn" aria-label="YouTube">▶</button>
                            </div>
                        </div>

                        {/* Contact Form / Calendly */}
                        <div className="contact-action">
                            <div className="action-tabs">
                                <button
                                    className={`tab ${activeTab === 'message' ? 'active' : 'inactive'}`}
                                    onClick={() => setActiveTab('message')}
                                >
                                    Send a Message
                                </button>
                                <button
                                    className={`tab ${activeTab === 'call' ? 'active' : 'inactive'}`}
                                    onClick={() => setActiveTab('call')}
                                >
                                    Book a Call
                                </button>
                            </div>

                            <div className="form-container" style={{ display: activeTab === 'message' ? 'block' : 'none' }}>
                                {isSubmitted ? (
                                    <div className="submission-success text-center">
                                        <div className="success-icon">✓</div>
                                        <h3 className="heading-sm mb-1">Message Sent Successfully</h3>
                                        <p className="mb-2">Thank you for reaching out. Saurabh or a member of our team will get back to you within 24-48 hours.</p>
                                        <button className="btn btn-secondary" onClick={() => setIsSubmitted(false)}>Send Another Message</button>
                                    </div>
                                ) : (
                                    <form className="contact-form" onSubmit={handleSubmit}>
                                        <div className="form-group grid-2">
                                            <div>
                                                <label htmlFor="firstName">First Name</label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    className="form-control"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="lastName">Last Name</label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    className="form-control"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Corporate Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="inquiry">Inquiry Type</label>
                                            <select
                                                id="inquiry"
                                                className="form-control"
                                                value={formData.inquiry}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select an option</option>
                                                <option value="corporate">Corporate Consulting</option>
                                                <option value="career">Career Programs</option>
                                                <option value="speaking">Keynote Speaking</option>
                                                <option value="other">Other Inquiry</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea
                                                id="message"
                                                rows={5}
                                                className="form-control"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>

                                        <button type="submit" className="btn btn-primary w-full btn-lg">Send Message</button>
                                    </form>
                                )}
                            </div>

                            <div className="calendly-container" style={{ display: activeTab === 'call' ? 'block' : 'none' }}>
                                <div className="calendly-placeholder">
                                    <div className="icon">📅</div>
                                    <h3 className="heading-sm mb-1">Schedule a Discovery Call</h3>
                                    <p className="mb-2">Select a time that works for you via our Calendly integration. These sessions are best for corporate leaders looking for performance consulting.</p>
                                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-2">Open Calendly Calendar</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
