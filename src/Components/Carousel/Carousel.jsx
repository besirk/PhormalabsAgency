// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";


import Suuber from '../../assets/partners/suuber_logo.png';
import Wpengine from '../../assets/partners/sigurnost.jpg';
import Demogency from '../../assets/partners/demogency.webp';
import Hte from '../../assets/partners/hte.jpg';
import Zenit from '../../assets/partners/zenit.jpg';
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
            <SwiperSlide> <img src={Wpengine} width={150} alt="Avtoskola sigurnost partner" /></SwiperSlide>
            <SwiperSlide><img src={Demogency} width={150} alt="Demogency partner" /></SwiperSlide>
            <SwiperSlide><img src={Hte} width={150} alt="HTE partner" /></SwiperSlide>
            <SwiperSlide><img src={Zenit} width={150} alt="Zenit partner" /></SwiperSlide>
            <SwiperSlide>  <img src={Suuber} width={150} alt="suuber partner" /></SwiperSlide>
            <SwiperSlide> <img src={Wpengine} width={150} alt="Avtoskola sigurnost partner" /></SwiperSlide>
            <SwiperSlide><img src={Demogency} width={150} alt="Demogency partner" /></SwiperSlide>
            <SwiperSlide><img src={Hte} width={150} alt="HTE partner" /></SwiperSlide>
            <SwiperSlide><img src={Zenit} width={150} alt="Zenit partner" /></SwiperSlide>
        </Swiper>
    );
};