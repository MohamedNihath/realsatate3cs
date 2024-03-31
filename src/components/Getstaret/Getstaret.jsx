import React, {useEffect} from 'react'
import './Getstaret.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Getstaret = () => {

  useEffect(()=>{
    Aos.init();

  },[])

  return (
   
    <section className='g-wrapper'>
        <div className='paddings innerWidth g-container' >
            <div className='flexColCenter inner-container' data-aos="flip-down" data-aos-duration="2000">
                <span className='primaryText'>Get Started with Homyz</span>
                <span className='secondaryText'>I encourage you to live with life.<br/>Be courageous, adventurous. Give us a tomorrow, more than we deserve.</span>
               
               <button className='btn'>
                  <a href='mailto:mohamednihath0308@gamil.com'>Get Started</a>
               </button>

            </div>

        </div>

    </section>
  )
}

export default Getstaret
