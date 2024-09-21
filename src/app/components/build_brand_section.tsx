'use client';

import Image from 'next/image';
import React from 'react';

const BuildBrandSection: React.FC = () => {
    return (
        <section className="w-full pt-20">
            <div className="items-center max-w-screen-xl container mx-auto flex flex-col px-4">
                {/* Section Title */}
                <h2 className="home-section__title mb-[50px] text-center text-[28px] font-semibold leading-[120%] lg:text-[54px] 2xl:mb-[70px] lg:w-[840px] w-full">
                    Build your clothing brand
                </h2>

                {/* Steps */}
                <ul className="flex w-full flex-col lg:flex-row lg:gap-10 items-center justify-center">
                    {/* Step 1 */}
                    <li className="flex-1">
                        <div className="flex flex-col items-center pb-8 lg:pb-16">
                            <div className="relative mb-2.5 space-y-3">
                                <p className="text-center">
                                    <span className="inline-block h-8 w-8 rounded-full border border-primary text-lg leading-8">1</span>
                                </p>
                                <h4 className="w-max text-center text-[22px] lg:text-[26px] font-semibold">You Create</h4>
                            </div>
                            <p className="w-full text-center text-sm lg:text-xl">Design apparel quickly and easily on TeezBiz</p>
                        </div>
                        <Image
                            src="https://publichk.cdn.ajmall-group.com/tapstitch/site-static/tapstitch/images/newHome/1.png"
                            alt="You Create"
                            className="w-full max-w-[300px] lg:max-w-full"
                            width={500}
                            height={500}
                        />
                    </li>

                    {/* Step 2 */}
                    <li className="flex-1">
                        <div className="flex flex-col items-center pb-8 lg:pb-16">
                            <div className="relative mb-2.5 space-y-3">
                                <p className="text-center">
                                    <span className="inline-block h-8 w-8 rounded-full border border-primary text-lg leading-8">2</span>
                                </p>
                                <h4 className="w-max text-center text-[22px] lg:text-[26px] font-semibold">You Sell</h4>
                            </div>
                            <p className="w-full text-center text-sm lg:text-xl">Add items to your store in a few clicks</p>
                        </div>
                        <Image
                            src="https://publichk.cdn.ajmall-group.com/tapstitch/site-static/tapstitch/images/newHome/2.png"
                            alt="You Sell"
                            className="w-full max-w-[300px] lg:max-w-full"
                            width={500}
                            height={500}
                        />
                    </li>

                    {/* Step 3 */}
                    <li className="flex-1 justify-center flex flex-col">
                        <div className="flex flex-col items-center pb-8 lg:pb-16">
                            <div className="relative mb-2.5 space-y-3">
                                <p className="text-center">
                                    <span className="inline-block h-8 w-8 rounded-full border border-primary text-lg leading-8">3</span>
                                </p>
                                <h4 className="w-max text-center text-[22px] lg:text-[26px] font-semibold">We Handle the Rest</h4>
                            </div>
                            <p className="w-full text-center text-sm lg:text-xl">
                                TeezBiz delivers directly to you or your customers in customizable packaging
                            </p>
                        </div>
                        <Image
                            src="https://publichk.cdn.ajmall-group.com/tapstitch/site-static/tapstitch/images/newHome/3.png"
                            alt="We Handle the Rest"
                            className="w-full max-w-[300px] lg:max-w-full"
                            width={500}
                            height={500}
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default BuildBrandSection;
