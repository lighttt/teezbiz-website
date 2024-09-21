import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
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
            <body className={kumbh.className}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <link rel="icon" href="./favicon.ico" sizes="any" />
                        <Header />
                        {children}
                        <Footer />
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
