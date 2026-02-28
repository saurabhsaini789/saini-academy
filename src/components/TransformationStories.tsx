import Link from 'next/link';
import './TransformationStories.css';

export default function TransformationStories() {
    return (
        <section className="section bg-surface transformation-section">
            <div className="container">
                <div className="text-center section-header max-w-lg mx-auto mb-4">
                    <h2 className="heading-md mb-2 text-primary">Real Transformation. Real Performance.</h2>
                    <p className="section-subtitle">
                        The goal is not just to train people, but to transform behavior and performance. Here are examples of how structured learning and performance systems create measurable impact.
                    </p>
                </div>

                <div className="stories-grid">

                    {/* Story 1 */}
                    <div className="story-card">
                        <div className="story-header mb-2">
                            <span className="story-icon">📈</span>
                            <div className="story-badge">Case Story 1</div>
                        </div>
                        <h3 className="story-title mb-2">From Knowledge to Confidence</h3>
                        <p className="story-context mb-2">
                            <strong>The Challenge:</strong> A new sales associate struggled with confidence, product knowledge, and customer conversations during the first few weeks.
                        </p>
                        <div className="story-solution mb-2">
                            <strong>The Approach:</strong> Instead of focusing only on product training, we created a structured performance plan that included:
                            <ul className="story-list mt-1">
                                <li>Guided practice and coaching</li>
                                <li>Scenario-based learning</li>
                                <li>Real customer simulations</li>
                                <li>Continuous feedback</li>
                            </ul>
                        </div>
                        <div className="story-result mt-3">
                            <strong>The Result:</strong> Within a few months, the associate showed strong improvement in engagement and confidence with customers. <em>This reinforced the belief that confidence and behavior drive results more than information alone.</em>
                        </div>
                    </div>

                    {/* Story 2 */}
                    <div className="story-card">
                        <div className="story-header mb-2">
                            <span className="story-icon">🚀</span>
                            <div className="story-badge">Case Story 2</div>
                        </div>
                        <h3 className="story-title mb-2">Accelerating New Hire Performance</h3>
                        <p className="story-context mb-2">
                            <strong>The Challenge:</strong> Many organizations struggle with long ramp-up periods. New hires often take months to reach expected performance levels.
                        </p>
                        <div className="story-solution mb-2">
                            <strong>The Approach:</strong> We shifted the focus from passive training to active engagement:
                            <ul className="story-list mt-1">
                                <li>Real-world simulations</li>
                                <li>Performance feedback</li>
                                <li>Clear success metrics</li>
                                <li>Structured onboarding journeys</li>
                            </ul>
                        </div>
                        <div className="story-result mt-3">
                            <strong>The Result:</strong> We helped create a more performance-driven onboarding approach that accelerated development and reduced learning fatigue.
                        </div>
                    </div>

                    {/* Story 3 */}
                    <div className="story-card">
                        <div className="story-header mb-2">
                            <span className="story-icon">🎯</span>
                            <div className="story-badge">Case Story 3</div>
                        </div>
                        <h3 className="story-title mb-2">Aligning Learning with Business Goals</h3>
                        <p className="story-context mb-2">
                            <strong>The Challenge:</strong> Traditional training often focuses only on knowledge transfer, detached from real ROI.
                        </p>
                        <div className="story-solution mb-2">
                            <strong>The Approach:</strong> By working closely with leaders and understanding business priorities, we shifted focus toward:
                            <ul className="story-list mt-1">
                                <li>Behavior and performance</li>
                                <li>Clear business KPIs</li>
                                <li>Customer experience outcomes</li>
                                <li>Continuous improvement</li>
                            </ul>
                        </div>
                        <div className="story-result mt-3">
                            <strong>The Result:</strong> This helped align learning initiatives with real organizational goals, proving training impact to stakeholders.
                        </div>
                    </div>

                </div>

                <div className="text-center mt-5">
                    <h3 className="heading-sm mb-2 text-primary">Let&apos;s Create Performance Transformation in Your Organization</h3>
                    <Link href="/contact" className="btn btn-primary btn-lg">Book a Consultation</Link>
                </div>
            </div>
        </section>
    );
}
