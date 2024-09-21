'use client';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Button, IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

interface Product {
    id: string;
    imageUrl: string;
    name: string;
    price: string;
    colors: string[];
    materials: string;
}

const ProductShowcase: React.FC = () => {
    const productContainerRef = useRef<HTMLDivElement>(null);

    const dummyProducts: Product[] = [
        {
            id: '1120789793937182720',
            imageUrl: 'https://publichk.cdn.ajmall-group.com/tapstitch/site-static/tapstitch/images/newHome/display_1.png',
            name: 'Streetwear Unisex Oversized Snow Wash T-Shirt',
            price: '13.01',
            colors: ['#FEF5E3', '#BDBDBD', '#FF5AAB', '#A98464', '#FF5F3F', '#527BBA', '#5B5642', '#313B63'],
            materials: '100% Cotton | 400 g/m²',
        },
        {
            id: '1120789793937182721',
            imageUrl: 'https://publichk.cdn.ajmall-group.com/tapstitch/site-static/tapstitch/images/newHome/display_2.png',
            name: 'Minimalist Crew Neck T-Shirt',
            price: '15.99',
            colors: ['#FFFFFF', '#000000', '#E91E63'],
            materials: '100% Organic Cotton | 250 g/m²',
        },
        {
            id: '1120789793937182722',
            imageUrl: 'https://publichk.cdn.ajmall-group.com/tapstitch/site-static/tapstitch/images/newHome/display_3.png',
            name: 'Urban Fit Hoodie',
            price: '29.99',
            colors: ['#F0F0F0', '#5D5D5D', '#2B2B2B'],
            materials: 'Polyester Blend | 350 g/m²',
        },
        {
            id: '1120789793937182723',
            imageUrl: 'https://publichk.cdn.ajmall-group.com/tapstitch/site-static/tapstitch/images/newHome/display_4.png',
            name: 'Classic Fit Polo Shirt',
            price: '25.99',
            colors: ['#D9E021', '#FFFFFF', '#FF4500'],
            materials: 'Cotton Blend | 300 g/m²',
        },
        {
            id: '1120789793937182724',
            imageUrl: 'https://publichk.cdn.ajmall-group.com/tapstitch/site-static/tapstitch/images/newHome/display_5.png',
            name: 'Lightweight Performance Jacket',
            price: '45.99',
            colors: ['#333333', '#4CAF50', '#FFEB3B'],
            materials: 'Nylon | 150 g/m²',
        },
    ];

    const buildProductItem = (product: Product) => {
        return (
            <li
                key={product.id}
                className="group relative flex-none w-[40%] sm:w-[50%] md:w-[33%] lg:w-[25%] xl:w-[20%] rounded-xl bg-white p-2.5"
            >
                <a href={`/custom/${product.id}`} className="flex h-full flex-col justify-between gap-3.5">
                    <Image src={product.imageUrl} alt={product.name} className="mb-2.5 w-full h-auto" width={300} height={300} />
                    <h4 className="text-center font-semibold leading-[120%] group-hover:underline">{product.name}</h4>
                    <div className="flex items-center justify-center">
                        <span className="text-sm font-medium text-dark">${product.price}</span>
                        <span className="px-1">|</span>
                        <span className="text-sm font-medium text-dark">{product.colors.length} Colors</span>
                    </div>
                    <p className="text-center text-sm font-medium text-dark">{product.materials}</p>
                    <ul className="flex justify-center gap-1.5">
                        {product.colors.map((color, index) => (
                            <li key={index} className="h-5 w-5 rounded border-primary" style={{ backgroundColor: color }}></li>
                        ))}
                    </ul>
                </a>
                <div className="absolute right-6 top-6 hidden group-hover:block">
                    <div className="h-6 w-6 bg-black rounded-full flex items-center justify-center">
                        <ChevronRightIcon className="h-4 w-4 text-white" />
                    </div>
                </div>
            </li>
        );
    };

    const handleScrollLeft = () => {
        if (productContainerRef.current) {
            productContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        if (productContainerRef.current) {
            productContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-gray-100 w-full pt-16 md:pt-32">
            <div className="container mx-auto flex flex-col items-center px-5 md:px-0">
                {/* Title and Button */}
                <div className="flex w-full flex-col justify-between lg:flex-row mb-7 lg:items-center lg:mb-12 gap-4">
                    <h3 className="text-3xl md:text-4xl lg:text-[50px] font-semibold leading-[120%] lg:w-[887px]">
                        Your vision. Your style. Made real.
                    </h3>
                    <Link href="/collections/all" passHref>
                        <Button
                            variant="text"
                            sx={{
                                backgroundColor: 'black',
                                color: 'white',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '0.375rem',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Hover effect
                                },
                                transition: 'background-color 300ms ease-in-out',
                            }}
                        >
                            Show More
                            <div className="w-6 h-6 flex justify-center items-center rounded-full bg-white ml-2">
                                <ArrowRightIcon className="w-4 h-4 text-black" />
                            </div>
                        </Button>
                    </Link>
                </div>

                {/* Products */}
                <div className="w-full overflow-auto scroll-smooth flex scrollbar-none" ref={productContainerRef}>
                    <ul className="flex gap-4">{dummyProducts.map(buildProductItem)}</ul>
                </div>

                {/* Arrows */}
                <div className="flex justify-between space-x-3 mt-5 mb-4">
                    <IconButton onClick={handleScrollLeft} className="p-2 rounded-full bg-black text-white hover:bg-black/80">
                        <ArrowLeftCircleIcon className="h-8 w-8" />
                    </IconButton>
                    <IconButton onClick={handleScrollRight} className="p-2 rounded-full bg-black text-white hover:bg-black/80">
                        <ArrowRightCircleIcon className="h-8 w-8" />
                    </IconButton>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
