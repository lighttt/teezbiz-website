'use client';

import AppImages from '@/src/core/constants/app_images';
import { Instagram, LocationOn, Mail, YouTube } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-10">
            <section className="w-full px-5 py-10">
                <div className="items-center max-w-screen-1100 container mx-auto flex flex-col">
                    <div className="flex w-full flex-col justify-between lg:flex-row">
                        {/* Logo and Description */}
                        <div className="flex flex-col lg:w-[402px]">
                            <Link href="/" className="mb-10">
                                <Image src={AppImages.logo} height={100} width={100} alt="TeezBiz" />
                            </Link>
                            <p className="mb-5 leading-tight">Empowering everyone to express themselves through clothes.</p>
                            {/* Social Icons */}
                            <ul className="flex gap-4">
                                <li>
                                    <Link
                                        href="https://www.youtube.com/@teezbiz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-400"
                                    >
                                        <IconButton color="inherit" aria-label="YouTube">
                                            <YouTube />
                                        </IconButton>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.instagram.com/teezbiz/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-400"
                                    >
                                        <IconButton color="inherit" aria-label="Instagram">
                                            <Instagram />
                                        </IconButton>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Information, Support, Contact Sections */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full mt-8 lg:mt-0">
                            <div className="grid grid-cols-1 gap-9 lg:grid-cols-3 w-full">
                                {/* Information Section */}
                                <div className="flex flex-col">
                                    <h4 className="mb-5 font-bold">Information</h4>
                                    <Link href="/about-us" className="mb-2.5 hover:text-gray-400">
                                        About Us
                                    </Link>
                                    <Link href="/privacy-policy" className="mb-2.5 hover:text-gray-400">
                                        Privacy Policy
                                    </Link>
                                    <Link href="/terms-of-service" className="mb-2.5 hover:text-gray-400">
                                        Terms of Service
                                    </Link>
                                    <Link href="/blog" className="mb-2.5 hover:text-gray-400">
                                        Blog
                                    </Link>
                                </div>

                                {/* Support Section */}
                                <div className="flex flex-col">
                                    <h4 className="mb-5 font-bold">Support</h4>
                                    <Link
                                        href="https://support.teezbiz.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mb-2.5 hover:text-gray-400"
                                    >
                                        Help Center
                                    </Link>
                                    <Link
                                        href="https://support.teezbiz.com/returns"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mb-2.5 hover:text-gray-400"
                                    >
                                        Return
                                    </Link>
                                    <Link
                                        href="https://support.teezbiz.com/shipping"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mb-2.5 hover:text-gray-400"
                                    >
                                        Shipping
                                    </Link>
                                </div>

                                {/* Contact Section */}
                                <div className="flex flex-col">
                                    <h4 className="mb-5 font-bold">Contact</h4>
                                    <Link href="mailto:info@teezbiz.com.au" className="mb-2.5 hover:text-gray-400">
                                        <IconButton color="inherit">
                                            <Mail />
                                        </IconButton>
                                        info@teezbiz.com.au
                                    </Link>
                                    <p className="mb-2.5 hover:text-gray-400">
                                        <IconButton color="inherit">
                                            <LocationOn />
                                        </IconButton>
                                        9 Clevedon Rd, Hurstville, NSW 2220, Australia
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="mb-10 h-px w-full border-b border-dashed border-white pt-10 lg:mb-10 lg:pt-10"></div>

                    {/* Copyright and Payment Options */}
                    <div className="flex w-full flex-col lg:flex-row justify-between">
                        <p>© 2024, TEEZBIZ. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
