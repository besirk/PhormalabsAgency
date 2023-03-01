// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";


import Suuber from '../../assets/partners/suuber_logo.png';
import Wpengine from '../../assets/partners/wpengine.png';
import Demogency from '../../assets/partners/demogency.webp';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import './carousel.css'

export default () => {
    return (







        <Swiper

            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                }
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}


            modules={[Autoplay]}
            className="CarouselLogo" >
            <SwiperSlide>  <img src={Suuber} width={150} alt="suuber partner" /></SwiperSlide>
            <SwiperSlide> <img src={Wpengine} width={150} alt="Wpengine partner" /></SwiperSlide>
            <SwiperSlide><img src={Demogency} width={150} alt="Demogency partner" /></SwiperSlide>
            <SwiperSlide>  <img src={Suuber} width={150} alt="suuber partner" /></SwiperSlide>
            <SwiperSlide> <img src={Wpengine} width={150} alt="Wpengine partner" /></SwiperSlide>
            <SwiperSlide><img src={Demogency} width={150} alt="Demogency partner" /></SwiperSlide>


        </Swiper>
    );
};