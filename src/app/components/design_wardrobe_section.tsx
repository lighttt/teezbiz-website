'use client';
import Image from 'next/image';
import React from 'react';

const DesignWardrobeSection: React.FC = () => {
    return (
        <section>
            <div className="container mx-auto flex max-w-screen-1100 flex-col items-center px-5 py-[50px] md:px-0">
                <div className="flex w-full flex-col items-center gap-7.5 lg:flex-row">
                    {/* Text Section */}
                    <div className="mb-5 flex w-full flex-col items-center text-center lg:items-start lg:text-left lg:w-[504px]">
                        <h3 className="mb-5 text-[36px] font-semibold leading-[120%] lg:text-[50px]">Design your dream wardrobe</h3>
                        <p className="mb-8 text-xl text-dark">Express yourself and your brand with large prints and bold statements.</p>
                        <a href="/collections" className="btn btn-primary flex items-center gap-2.5 font-bold">
                            Create Now
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" className="w-6">
                                <rect width="28" height="28" fill="#fff" rx="14"></rect>
                                <path
                                    stroke="#0E0E11"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8.168 14h11.667m0 0L14 8.167M19.835 14 14 19.833"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-[520px]">
                        <Image
                            src="https://publichk.cdn.ajmall-group.com/tapstitch/site-static/tapstitch/images/newHome/frame.png"
                            alt="Design your wardrobe"
                            className="w-full"
                            width={520}
                            height={520}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignWardrobeSection;
