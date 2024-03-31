import React from 'react'
import './Hero.css'
// import { HiLocationMarker } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";
// import CountUp from 'react-countup';  
import CountUp from 'react-countup'; 
import {motion} from 'framer-motion' ;


const Hero = () => {
   return (
      <section className='hero-wrapper'>
        <div className='paddings innerWidth flexCenter hero-container'>
          <div className='flexColStart hero-left'>
              <div className='hero-title'>
                <div className='orange-cercle'></div>
                <motion.h1

                  initial={{y:"2rem" , opacity: 0}}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 2, 
                    type:"spring"
                  }}
                >
                  Discover <br />
                  Most Suitable <br />
                  Property
                </motion.h1>
              </div>

              <div className='flexColStart hero-des'>
                <span>You can go slow. Allow your dreams and goals to change, but live an intentional life</span>
              </div>

              <div className='search-bar'>
                  <HiLocationMarker color="var(--blue)" size={25} />
                  <input type='text' placeholder="Search by location" />
                  <button className='btn'>Search</button>
              </div>

              <div>
                <motion.div
                  initial={{y:"-4rem" , opacity: 0}}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 2, 
                    type:"spring"
                  }}
                
                className='hero-count'>
                  <div className='flexcolstart'>
                    <span>
                        <CountUp start={8800} end={9000} duration={4} />
                        <span>+</span>
                    </span>
                    <span  className='seconderytext'>Premium Products</span>
                  </div>

                  <div className='flexcolstart'>
                    <span>
                        <CountUp start={1950} end={2000} duration={4} />
                        <span>+</span> 
                    </span>
                    <span className='seconderytext'> Happy Customer</span>
                  </div>

                  <div className='flexcolstart'>
                    <span>
                        <CountUp  end={28} />
                        <span>+</span>
                    </span>
                    <span className='seconderytext'>Winning Award</span>                     
                  </div>
                </motion.div>
              </div>
          </div>

          <div className='flexCenter hero-right'>
            <motion.div 
            initial={{x:"7rem" , opacity: 0}}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2, 
              type:"spring"
            }}

            className="img-container">
              <img src='./hero-image.png' alt='Hero Image'/>
            </motion.div>
          </div>
        </div>
      </section>
   );
 }

 export default Hero
 