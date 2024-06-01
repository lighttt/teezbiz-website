export const Banner = () => {
    return (
        <div className="w-full h-screen flex items-start justify-center flex-col p-24 bg-bannerMobile md:bg-banner bg-cover bg-center bg-no-repeat gap-3">
            <p className="text-base text-green-600"> 50% off on your first order</p>
            <h1 className="text-4xl font-bold text-center">Welcome to TeezBiz</h1>
            <p className="text-lg text-center">The best place to find the perfect t-shirt for you</p>
            <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg mt-4">Get a Quote</button>
        </div>
    );
};
