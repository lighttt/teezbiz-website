import { Banner } from './components/banner';
import BuildBrandSection from './components/build_brand_section';
import DesignWardrobeSection from './components/design_wardrobe_section';
import Features from './components/features';
import HighVolumeOrderForm from './components/high_volume_order_form';
import ProductShowcase from './components/product_showcase';

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
