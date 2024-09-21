'use client';

import AppImages from '@/src/core/constants/app_images';
import { mainRoutes } from '@/src/core/constants/routes';
import { ArrowRightIcon, GiftIcon } from '@heroicons/react/24/outline';
import { Orbitron } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileHeader from './mobile_header';

const orbitron = Orbitron({
    weight: ['400', '500', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-orbitron',
});

export default function Header() {
    const pathname = usePathname();
    const isError = mainRoutes.includes(pathname) ? false : true;

    const menu = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'About Us',
            path: '/about',
        },
        {
            title: 'Contact',
            path: '/contact',
        },
    ];

    if (isError) {
        return null;
    }

    return (
        <nav className="sticky top-0 z-50 flex flex-col border-b-[1px] border-b-gray-200 bg-white">
            <div className="relative flex items-center justify-between w-full md:p-2 md:px-12 py-2">
                {/* Mobile Menu Icon */}
                <div className="block flex-none md:hidden pl-2">
                    <MobileHeader menu={menu} />
                </div>

                {/* Logo */}
                <div className="flex justify-center items-center">
                    <Link href="/" className="mr-2">
                        <Image src={AppImages.logo} alt="TeezBiz" width={50} height={50} />
                    </Link>
                </div>
                {/* TEEZBIZ Text (Visible on Medium and Larger Screens) */}
                <span
                    className={`${orbitron.className} font-extrabold tracking-widest text-3xl hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                >
                    TEEZBIZ
                </span>

                {/* Menu (Visible on Medium and Larger Screens) */}
                <div className="flex flex-row justify-end">
                    {menu.length ? (
                        <ul className="hidden gap-10 text-base font-semibold md:flex md:items-center">
                            {menu.map((item) => (
                                <li key={item.title}>
                                    <Link href={item.path} className="text-black underline-offset-4 hover:text-red-500 hover:underline">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            </div>

            {/* Promo Bar */}
            <Link href="/shop">
                <div className="flex items-center justify-center w-full text-center border-t-[1px] py-1">
                    <div className="relative p-1 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 rounded-full">
                        <div className="flex items-center justify-center bg-white rounded-full p-1">
                            <GiftIcon className="h-4 w-4 text-red-500" />
                        </div>
                    </div>
                    <span className="ml-2">10% off on all orders</span>
                    <ArrowRightIcon className="h-5 w-5 text-black ml-2" />
                </div>
            </Link>
        </nav>
    );
}
