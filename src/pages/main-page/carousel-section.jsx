import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import Banner01 from '@/assets/img/banner-01.png'
import Banner02 from '@/assets/img/banner-02.png'
import Banner03 from '@/assets/img/banner-03.png'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

export default function CarouselSection() {
    return (
        <div className="carousel-section-container">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                pagination
            >
                <SwiperSlide>
                    <img
                        className="carousel-slide-img"
                        src={Banner01}
                        alt="banner"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="carousel-slide-img"
                        src={Banner02}
                        alt="banner"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="carousel-slide-img"
                        src={Banner03}
                        alt="banner"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
