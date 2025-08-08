"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
    "/images/slide5.jpg",
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((src, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-[400px] relative">
                        <Image
                            src={src}
                            alt={`Slide ${index}`}
                            fill
                            className="object-cover rounded-xl"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Navigation */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-10"
            >
                ◀
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-10"
            >
                ▶
            </button>
        </div>
    );
};

export default Carousel;
