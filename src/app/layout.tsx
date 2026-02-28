import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Performance and Learning Academy | Corporate Consulting & Career Programs',
  description: 'Performance and Learning Academy helps professionals and organizations unlock their true potential through bespoke corporate consulting, career programs, and performance training. Led by Saurabh Saini, Corporate Performance Consultant.',
  keywords: 'corporate performance, instructional design, career coaching, leadership development, sales enablement, Saurabh Saini, professional training',
  openGraph: {
    title: 'Performance and Learning Academy',
    description: 'Elevate your professional and organizational performance with expert consulting and training.',
    url: 'https://sainiacademy.com',
    siteName: 'Performance and Learning Academy',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
