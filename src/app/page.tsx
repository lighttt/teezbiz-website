import { Banner } from './components/banner';
import BuildBrandSection from './components/build_brand_section';
import DesignWardrobeSection from './components/design_wardrobe_section';
import Features from './components/features';
import HighVolumeOrderForm from './components/high_volume_order_form';
import ProductShowcase from './components/product_showcase';

export async function generateMetadata() {
    return {
        title: 'TeezBiz - Your Partner for Custom Apparel Printing & Brand Identity Creation',
        description:
            'TeezBiz specializes in premium t-shirt and hoodie printing, empowering businesses and individuals to build their brand identity through high-quality custom apparel. From design to delivery, we make it easy for you to create standout merchandise and leave a lasting impression.',
        image: 'https://i.ibb.co/hcpc3xs/logo.png',
        openGraph: {
            title: 'TeezBiz - Your Partner for Custom Apparel Printing & Brand Identity Creation',
            description:
                'TeezBiz specializes in premium t-shirt and hoodie printing, empowering businesses and individuals to build their brand identity through high-quality custom apparel. From design to delivery, we make it easy for you to create standout merchandise and leave a lasting impression.',
            image: 'https://i.ibb.co/hcpc3xs/logo.png',
            images: [
                {
                    url: 'https://i.ibb.co/hcpc3xs/logo.png',
                    width: 401,
                    height: 401,
                },
            ],
            type: 'website',
            siteName: 'TeezBiz',
        },
        twitter: {
            cardType: 'summary_large_image',
            card: 'summary_large_image',
            image: 'https://i.ibb.co/hcpc3xs/logo.png',
            images: [
                {
                    url: 'https://i.ibb.co/hcpc3xs/logo.png',
                    width: 401,
                    height: 401,
                },
            ],
            site: '@teezbiz',
            title: 'TeezBiz - Your Partner for Custom Apparel Printing & Brand Identity Creation',
            description:
                'TeezBiz specializes in premium t-shirt and hoodie printing, empowering businesses and individuals to build their brand identity through high-quality custom apparel. From design to delivery, we make it easy for you to create standout merchandise and leave a lasting impression.',
            type: 'website',
        },
    };
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between ">
            <Banner />
            <Features />
            <BuildBrandSection />
            <ProductShowcase />
            <DesignWardrobeSection />
            <HighVolumeOrderForm />
        </main>
    );
}
