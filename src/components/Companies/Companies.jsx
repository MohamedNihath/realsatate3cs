import React, {useEffect} from 'react'
import './Companies.css'
import {motion} from 'framer-motion' ;
import Aos from 'aos';
import 'aos/dist/aos.css'

const Companies = () => {

  useEffect(()=>{
    Aos.init();

  },[])


  return (
    
    <section className='co-wrapper'> 
        <div className='innerWidth flexCenter co-container'>
            <img data-aos="fade-in" data-aos-duration="2500" src='./prologis.png'/>
            <img data-aos="fade-in" data-aos-duration="2500" delay='200' src='./tower.png'/>
            <img data-aos="fade-in" data-aos-duration="2500" delay='400' src='./equinix.png'/>
            <img data-aos="fade-in" data-aos-duration="2500" delay='600' src='./realty.png'/>                  
         
        </div>

    </section>
  )
}

export default Companies
