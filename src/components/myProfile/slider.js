import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./slider.css"
import game1 from "./../../assets/images/game1.png"
import game2 from "./../../assets/images/game2.png"
import game3 from "./../../assets/images/game3.png"
import game4 from "./../../assets/images/game4.png"


const Slider = () => {
    return (
        <Swiper 
            spaceBetween={5}
            slidesPerView={4.5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

            <SwiperSlide><img src={game1} alt="Apex Legends" /></SwiperSlide>
            <SwiperSlide><img src={game2} alt="Valorent" /></SwiperSlide>
            <SwiperSlide><img src={game3} alt="PUBG" /></SwiperSlide>
            <SwiperSlide><img src={game4} alt="COD Black Ops" /></SwiperSlide>
            <SwiperSlide><img src={game1} alt="Apex Legends" /></SwiperSlide>
            <SwiperSlide><img src={game2} alt="Valorent" /></SwiperSlide>
            <SwiperSlide><img src={game3} alt="PUBG" /></SwiperSlide>
            <SwiperSlide><img src={game4} alt="COD Black Ops" /></SwiperSlide>
        </Swiper>
    );
}

export default Slider;