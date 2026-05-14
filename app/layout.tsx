import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'STARSHIP // SUBRAHMANYA - Portfolio',
  description: 'Immersive spacecraft portfolio experience. Mission: Showcase engineering expertise in systems, automation, and enterprise infrastructure.',
  keywords: ['portfolio', 'engineer', 'spacecraft', 'SAP', 'Fivetran', 'ETL', 'incident management'],
  openGraph: {
    title: 'STARSHIP // SUBRAHMANYA',
    description: 'Interactive spacecraft portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="preload" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-spacecraft-darker text-spacecraft-cyan font-grotesk overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
