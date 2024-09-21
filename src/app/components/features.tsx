'use client';

import { CheckBadgeIcon, CubeTransparentIcon, DocumentTextIcon, TruckIcon } from '@heroicons/react/24/outline';

const Features = () => {
    return (
        <section className="px-5 md:pt-4">
            <div className="items-center py-[50px] lg:py-5 container mx-auto flex max-w-screen-lg flex-col px-5 md:px-0">
                <ul className="flex w-full flex-col items-center justify-center gap-7 lg:flex-row lg:justify-between">
                    <li className="flex items-center gap-2 font-medium">
                        <CubeTransparentIcon className="h-6 w-6" />
                        <span className="flex-1">Quality Stylish Apparel</span>
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                        <DocumentTextIcon className="h-6 w-6" />
                        <span className="flex-1">Easy to Customize</span>
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                        <CheckBadgeIcon className="h-6 w-6" />
                        <span className="flex-1">No Minimums or Upfront Costs</span>
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                        <TruckIcon className="h-6 w-6" />
                        <span className="flex-1">Fast Delivery</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Features;
