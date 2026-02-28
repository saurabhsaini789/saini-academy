import Link from 'next/link';
import '@/app/programs/page.css';

export function generateStaticParams() {
    return [
        { slug: 'career' },
        { slug: 'corporate' },
        { slug: 'performance' },
    ];
}

export default function ProgramDetail({ params }: { params: { slug: string } }) {
    // This would ideally come from a CMS or data file
    const programData: Record<string, any> = {
        'career': {
            title: 'Career Transformation Programs',
            desc: 'A comprehensive suite of programs designed to bridge the gap between academic knowledge and corporate excellence.'
        },
        'corporate': {
            title: 'Corporate Skills Excellence',
            desc: 'Targeted interventions for teams and leaders to master the high-stakes skills of modern business.'
        },
        'performance': {
            title: 'Peak Performance & Productivity',
            desc: 'Scientific frameworks and behavioral systems to unlock maximum cognitive output and sustainable growth.'
        }
    };

    const program = programData[params.slug] || { title: 'Program Details', desc: 'Expertly crafted training for professional excellence.' };

    return (
        <div className="program-detail-page">
            <section className="programs-hero">
                <div className="container text-center max-w-md mx-auto">
                    <h1 className="heading-lg mb-2">{program.title}</h1>
                    <p className="hero-subtitle">{program.desc}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="text-center max-w-md mx-auto">
                        <h2 className="heading-md mb-2">Curriculum Overview</h2>
                        <p>We are currently finalizing the detailed modules for this program. Each curriculum is designed to be highly interactive, practical, and results-oriented.</p>
                        <div className="mt-4">
                            <Link href="/contact" className="btn btn-primary">Enquire for Syllabus</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
