import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
    "/photo/hero1b.webp",
    "/photo/hero2b.webp",
    "/photo/hero3b.webp",
];

export default function TopSlider() {
    const slideSettings = {
        0: {
            slidesPerView: 1,
            spaceBetween: 1,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 1,
        },
    };
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={slideSettings}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            speed={2000}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}

        >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={src}
                        width={1920}
                        height={820}
                        sizes="(min-width: 1024px) 100vw, 60vw"
                        alt="slide"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}