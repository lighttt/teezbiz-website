import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import './globals.css';

const kumbh = Kumbh_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'TeezBiz',
    description: 'The best place to find the perfect t-shirt for you',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={kumbh.className}>
                <link rel="icon" href="./favicon.ico" sizes="any" />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
