import React, {useEffect} from 'react'
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs'
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import './Conduct.css'
import Aos from 'aos';
import 'aos/dist/aos.css'


const Conduct = () => {

  useEffect(()=>{
    Aos.init();

  },[])


  return (
    
    <section className='c-wrapper'>

        <div className='paddings innerWidth flexCenter c-container'>

            <div className='flexColStart c-left' data-aos="fade-left" data-aos-duration="2000">

              <span className='orangeText'>Conduct Us</span>
              <span className='primaryText'>Easy to Conduct</span>
              <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corporis aliquid id aperiam. Ratione dolore ab nostrum quidem voluptas<br/> 
              ali  quam aspernatur in beatae blanditiis est commodi hic. Accusantium, eaque voluptatum!</span>

              <div className='flexColStart contactModes'>
                <div className='flexStart row'>

                  <div className='flexColCenter mode'>

                    <div className='flexStart'>
                      <div className='flexCenter icon'>
                        <MdCall size={15}/>
                      </div>

                      <div className='flexColStart detail'>
                        <span className='primaryText small'>Call</span>
                        <span className='secondaryText'> +94 77 113 2015</span>
                      </div>
                     
                    </div>
                    <div className='flexCenter btn'>
                        Call Now
                    </div>
                  </div>

                  <div className='flexColCenter mode'>

                    <div className='flexStart'>

                      <div className='flexCenter icon'>
                        <BsFillChatDotsFill size={15}/>
                      </div>
                      
                      <div className='flexColStart detail'>
                        <span className='primaryText small'>Chat</span>
                        <span className='secondaryText'> +94 77 113 2015</span>
                      </div>
                    </div>

                    <div className='flexCenter btn'>
                        Chat Now
                    </div>

                  </div>
                </div>

                <div className='flexStart row'>
                  <div className='flexColCenter mode'>

                    <div className='flexStart'>

                      <div className='flexCenter icon'>
                        <HiOutlineChatAlt2 size={15}/>
                      </div>

                      <div className='flexColStart detail'>
                        <span className='primaryText small'>Video Call</span>
                        <span className='secondaryText'> +94 77 113 2015</span>
                      </div>

                    </div>

                    <div className='flexCenter btn'>
                      Video Call Now
                    </div>

                    </div>

                    <div className='flexColCenter mode'>

                    <div className='flexStart'>
                      <div className='flexCenter icon'>
                        <HiChatBubbleBottomCenter size={15}/>
                      </div>

                      <div className='flexColStart detail'>
                        <span className='primaryText small'>Message</span>
                        <span className='secondaryText'> +94 77 113 2015</span>
                      </div>

                    </div>

                    <div className='flexCenter btn'>
                          Message Now
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='c-right' data-aos="fade-right" data-aos-duration="2000">

                <div className='img-container conduct-img'>
                    <img src='./contact.jpg' alt=''/>

                </div>

            </div>

        </div>

    </section>
  )
}

export default Conduct
