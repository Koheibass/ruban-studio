import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeaderSlider() {
    return (
        <Swiper modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}>
            <SwiperSlide><img src="/photo/hero1b.webp" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/photo/hero2b.webp" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/photo/hero3b.webp" alt="" /></SwiperSlide>
        </Swiper>
    );
};