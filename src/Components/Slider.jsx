import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css';

import IMAGEM1 from '../assets/IMAGEM1.jpg';
import IMAGEM2 from '../assets/IMAGEM2.jpg';
import IMAGEM3 from '../assets/IMAGEM3.jpg';
import IMAGEM4 from '../assets/IMAGEM4.jpg';
import IMAGEM5 from '../assets/IMAGEM5.jpg';
import IMAGEM6 from '../assets/IMAGEM6.jpg';
import IMAGEM7 from '../assets/IMAGEM7.jpg';
import IMAGEM8 from '../assets/IMAGEM8.jpg';
import IMAGEM9 from '../assets/IMAGEM9.jpg';
import IMAGEM10 from '../assets/IMAGEM10.jpg';
import IMAGEM11 from '../assets/IMAGEM11.jpg';
import IMAGEM12 from '../assets/IMAGEM12.jpg';
import IMAGEM13 from '../assets/IMAGEM13.jpg';
import IMAGEM14 from '../assets/IMAGEM14.jpg';
import IMAGEM15 from '../assets/IMAGEM15.jpg';
import IMAGEM16 from '../assets/IMAGEM16.jpg';
import IMAGEM17 from '../assets/IMAGEM17.jpg';
import IMAGEM18 from '../assets/IMAGEM18.jpg';
import IMAGEM19 from '../assets/IMAGEM19.jpg';
import IMAGEM20 from '../assets/IMAGEM20.jpg';
import IMAGEM21 from '../assets/IMAGEM21.jpg';
import IMAGEM22 from '../assets/IMAGEM22.jpg';

const images = [
  IMAGEM1, IMAGEM2, IMAGEM3, IMAGEM4, IMAGEM5, IMAGEM6,
  IMAGEM7, IMAGEM8, IMAGEM9, IMAGEM10, IMAGEM11, IMAGEM12,
  IMAGEM13, IMAGEM14, IMAGEM15, IMAGEM16, IMAGEM17, IMAGEM18,
  IMAGEM19, IMAGEM20, IMAGEM21, IMAGEM22,
];

export default function ImageSlider() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Foto ${index + 1}`} className="slider-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}