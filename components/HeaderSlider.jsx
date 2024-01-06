import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';

import Image from 'next/image';

const images = [
    "/photo/hero1b.webp",
    "/photo/hero2b.webp",
    "/photo/hero3b.webp",
];

const Slider = () => {
    useEffect(() => {
        SwiperCore.use([Navigation, Pagination, Autoplay]);
    }, []);

    return (
        <Swiper
            pagination={{
                clickable: true,
            }}
            loop={true}
            speed={1000}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            slidesPerView={1}
        >
            {images.map((src, index) => (
                <SwiperSlide key={`${index}`}>
                    <Image src={src} layout="responsive" width={640} height={200} alt="slider_image" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
