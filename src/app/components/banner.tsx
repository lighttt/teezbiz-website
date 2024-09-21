import Carousel from '@/src/components/carousel/carousel';

export const Banner = () => {
    return (
        <div className="w-full flex flex-col items-center px-4 md:px-8  py-4 md:py-8 md:flex-row">
            <div className="items-center justify-center flex-col px-2 mb-6 gap-3 text-black flex md:hidden">
                <h1 className="text-4xl font-bold text-center">Welcome to TeezBiz</h1>
                <p className="text-lg text-center">The best place to find the perfect t-shirt for you</p>
                <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg mt-4">Get a Quote</button>
            </div>
            <div className="flex flex-row w-full bg-banner rounded-2xl p-4 md:p-12">
                <div className="items-start justify-center flex-col px-24 gap-3 text-white hidden md:flex">
                    <p className="text-base "> 50% off on your first order</p>
                    <h1 className="text-4xl font-bold text-center">Welcome to TeezBiz</h1>
                    <p className="text-lg text-center">The best place to find the perfect t-shirt for you</p>
                    <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg mt-4">Get a Quote</button>
                </div>
                <Carousel
                    slides={[0, 1, 2, 3, 4]}
                    options={{
                        loop: true,
                    }}
                />
            </div>
        </div>
    );
};
