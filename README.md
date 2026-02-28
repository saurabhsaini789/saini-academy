# Performance and Learning Academy (PLA)

Performance and Learning Academy (PLA) is a premium, corporate-focused website designed to showcase consulting services, career programs, and performance training. Led by Saurabh Saini, a Corporate Performance Consultant and Instructional Designer, the academy aims to bridge the gap between academic knowledge and corporate excellence.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: Vanilla CSS (Modern, premium aesthetic)
- **Icons**: Custom SVG icons (see `src/components/Icons.tsx`)
- **Components**: Functional React components with a focus on responsiveness and performance.

## Key Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Service Modules**: Dedicated pages for Consulting, Career Programs, Courses, and Insights.
- **Dynamic Routing**: Program details are handled via dynamic routes (`/programs/[slug]`).
- **Interactive Elements**: Custom navigation, contact forms, and "Coming Soon" modals for social links.
- **Premium Aesthetics**: Curated color palette (Deep Navy & Subtle Gold) and modern typography (Poppins).

## Project Structure

```text
src/
├── app/               # Next.js App Router (Pages & Layouts)
│   ├── about/         # About the Founder
│   ├── consulting/    # Corporate Consulting services
│   ├── programs/      # Multi-tiered programs & detail template
│   ├── courses/       # Online learning pathways
│   ├── insights/      # Blog & articles
│   ├── contact/       # Contact & discovery call booking
│   └── ...            # Legal pages & globals
├── components/        # Reusable UI components (Header, Footer, Icons, etc.)
└── public/            # Static assets (Images, favicon)
```

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

This project emphasizes clean code and visual excellence. When adding new components, ensure they align with the existing CSS variable system defined in `src/app/globals.css`.

---
*Built for Saini Performance & Learning Academy*
