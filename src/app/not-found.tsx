import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Button } from '@mui/material';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AppImages from '../core/constants/app_images';

export const metadata: Metadata = {
    title: 'Page not found | TeezBiz',
};

/**
 * [Screen]: A screen to display page not found (404) error.
 */
const NotFound = () => {
    return (
        <div className="w-dvw h-dvh flex flex-col justify-center items-center px-8 bg-gray-200">
            <section>
                <Link href={'/'}>
                    <Image src={AppImages.logo} alt="Logo" height={50} width={50} />
                </Link>
            </section>

            <section className="w-full lg:w-8/12 flex flex-col items-center justisfy-center mt-8">
                <div className="relative w-[300px] lg:w-[400px] aspect-square">
                    <Image src={AppImages.notFound} alt="404" fill className="object-contain" />
                </div>

                <div className="mt-6 pb-8 px-8 flex flex-col justify-center text-center">
                    <div>
                        <h1 className="text-3xl font-semibold">{`Oops! Page not found or doesn't exist.`}</h1>
                        <p className="text-lg mt-4">
                            {`The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.`}
                        </p>
                    </div>

                    <div className="mt-8 lg:mt-12">
                        <Link href={'/'}>
                            <Button
                                type="submit"
                                variant="text"
                                sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    marginTop: '1.25rem',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '2rem',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Hover effect
                                    },
                                    transition: 'background-color 300ms ease-in-out',
                                }}
                            >
                                Go back to home
                                <div className="w-6 h-6 flex justify-center items-center rounded-full bg-white ml-2">
                                    <ArrowRightIcon className="w-4 h-4 text-black" />
                                </div>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
