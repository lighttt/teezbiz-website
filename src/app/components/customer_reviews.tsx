import Image from 'next/image';
const reviews = [
    {
        id: 1,
        name: 'John Doe',
        rating: 5,
        comment: 'Excellent product! Highly recommend it.',
        image: 'https://logo.clearbit.com/netflix.com',
    },
    {
        id: 2,
        name: 'Jane Smith',
        rating: 4,
        comment: 'Very good quality, but the shipping was a bit slow.',
        image: 'https://logo.clearbit.com/netflix.com',
    },
    {
        id: 3,
        name: 'Alex Johnson',
        rating: 5,
        comment: 'I love the product. It was exactly what I was looking for.',
        image: 'https://logo.clearbit.com/netflix.com',
    },
    {
        id: 3,
        name: 'Rachel Green',
        rating: 5,
        comment: 'Great customer service. I had an issue with my order and they fixed it right away.',
        image: 'https://logo.clearbit.com/netflix.com',
    },
];

const CustomerReviews = () => {
    return (
        <div className="w-full bg-gray-100 px-16 py-12 justify-center items-center">
            <h2 className="text-3xl font-bold mb-16 text-center">Customer Reviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center gap-y-6">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-start">
                        <p className="text-start text-lg flex-1">{review.comment}</p>
                        <div className="flex flex-row justify-between w-full">
                            <div className="flex-1">
                                <div className="flex items-center mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927C9.29 2.056 10.71 2.056 10.951 2.927L12.347 8.09H17.8C18.669 8.09 19.021 9.21 18.33 9.712L14.106 12.875L15.502 18.037C15.743 18.908 14.782 19.59 14.092 19.088L9.868 15.925L5.644 19.088C4.954 19.59 3.993 18.908 4.234 18.037L5.63 12.875L1.406 9.712C0.715 9.21 1.066 8.09 1.935 8.09H7.388L8.784 2.927H9.049Z" />
                                        </svg>
                                    ))}
                                </div>

                                <h3 className="text-lg font-semibold mb-4">{review.name}</h3>
                            </div>
                            <Image src={review.image} alt={review.name} height={50} className="object-contain" width={50} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReviews;
