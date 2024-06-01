import AboutUs from './components/about_us';
import { Banner } from './components/banner';
import CustomerReviews from './components/customer_reviews';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between ">
            <Banner />
            <AboutUs />
            <CustomerReviews />
        </main>
    );
}
