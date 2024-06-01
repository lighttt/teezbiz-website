import AppImages from '@/src/core/constants/app_images';
import Image from 'next/image';
import Link from 'next/link';
import MobileHeader from './mobile_header';

export default async function Header() {
    const menu = [
        {
            title: 'Home',
            path: '/',
        },
        // {
        //     title: 'Shop',
        //     path: '/shop',
        // },
        {
            title: 'About',
            path: '/about',
        },
        {
            title: 'Contact',
            path: '/contact',
        },
    ];

    return (
        <nav className="relative flex items-center justify-between p-4 lg:px-6 border-b-[1px] border-b-gray-200">
            <div className="block flex-none md:hidden">
                <MobileHeader menu={menu} />
            </div>
            <div className="flex w-full items-center px-20">
                <div className="flex-1">
                    <Link
                        href="/"
                        className="mr-2 flex w-full  md:w-auto lg:mr-6 justify-center items-center md:items-start md:justify-start"
                    >
                        <Image src={AppImages.logo} alt="TeezBiz" width={50} height={50} />
                    </Link>
                </div>
                {menu.length ? (
                    <ul className="hidden gap-10 text-base font-semibold md:flex md:items-center">
                        {menu.map((item) => (
                            <li key={item.title}>
                                <Link href={item.path} className="text-black underline-offset-4 hover:text-red-500 hover:underlie">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </nav>
    );
}
