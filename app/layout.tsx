import { Montserrat, Roboto } from 'next/font/google';

import './globals.css';
import Footer from './components/Footer';

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Sasha Spievakov — Software Developer',
  description: "Sasha Spievako's Portfolio",
  keywords: [
    'Sasha Spievakov',
    "Sasha Spievakov's Portfolio",
    'Sasha Spievakov - Software Developer',
    'Sasha Spievakov Software Developer',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${roboto.variable} scroll-smooth`}
    >
      <body className="font-roboto">
        {children}
        <Footer />
      </body>
    </html>
  );
}
