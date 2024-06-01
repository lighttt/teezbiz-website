import Image from 'next/image';

const AboutUs = () => {
    return (
        <div className="container p-12 py-4 mb-12 mt-12">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-20">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <div className="overflow-hidden rounded-lg shadow-md transform transition duration-500 hover:scale-105">
                        <Image
                            src="https://freshtees.com.au/cdn/shop/files/280622_FreshTees_0150.jpg?v=1673925486&width=1500"
                            alt="About Us"
                            width={1500}
                            height={1000}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <h2 className="text-4xl font-bold mb-4">About Us</h2>
                    <p className="text-lg mb-4">
                        Welcome to our company! We are dedicated to providing the best products and services to our customers. Our team is
                        composed of passionate and experienced professionals who are committed to excellence.
                    </p>
                    <p className="text-lg mb-4">
                        Our mission is to make a positive impact on the lives of our customers through innovation and quality. We believe in
                        the power of collaboration and strive to create a supportive and inspiring work environment.
                    </p>
                    <p className="text-lg">Thank you for choosing us. We look forward to serving you and making a difference together.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
