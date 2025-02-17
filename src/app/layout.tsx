import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import '../components/carousel/carousel.css';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import { theme } from '../core/theme';
import './globals.css';

const kumbh = Kumbh_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-kumbh',
});

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
            <head>
                {/* Favicon */}
                <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />

                {/* Apple Touch Icon */}
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                {/* Android Icons */}
                <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
            </head>
            <body className={kumbh.className}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <link rel="icon" href="./favicon.ico" sizes="any" />
                        <Header />
                        {children}
                        <Footer />
                        <Analytics />
                        <SpeedInsights />
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
