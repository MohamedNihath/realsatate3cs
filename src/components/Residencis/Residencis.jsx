import React, {useEffect} from 'react'
import {Swiper, SwiperSlide, useSwiper} from  "swiper/react";
import "swiper/css";
import './Residencis.css';
import Data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Residencis = () => {

  useEffect(()=>{
    Aos.init();

  },[])


  return (
  
    <section className='r-wrapper'>

      <div className='paddings innerWidth r-container'>
          <div className='flexColStart r-head' data-aos="fade-down" data-aos-duration="2000">

            <span className='orangeText'>Best Choice</span>
            <span className='primaryText'>Popular recidencies</span>

          </div>

          <Swiper {...sliderSettings} className='swiper' data-aos="fade-up" data-aos-duration="2000">
            
                {
                  Data.map((card,i)=>
                    <SwiperSlide key={i} >
                      <div className='flexColStart r-card'>
                        <img src={card.image} alt="Home"/>
                        <span className='secondaryText flexColStart r-price'>
                          <span style={{color:"orange"}}>$</span>
                          <span>{card.price}</span>
                        </span>
                        <span className='primaryText'>{card.name}</span>
                        <span className='secondaryText'>{card.detail}</span>
                      </div>
                    </SwiperSlide>
                  )
                }
                <SliderButtons/>
          </Swiper>

      </div>

    </section>
  )
}

export default Residencis

const SliderButtons =()=>{
  const swiper = useSwiper();
  return (
    <div className='flexCenter r-buttons'>
        <button onClick={()=> swiper.slidePrev()}>&lt;</button>
        <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  )
}
