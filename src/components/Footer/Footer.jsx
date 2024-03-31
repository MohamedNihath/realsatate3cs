
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    
    <section className='f-wrapper'>
        <div className='paddings innerWidth flexCenter f-container'>

            <div className='flexColStart f-left'>
                
                <img src='logo2.png' alt="" width={120} />

                <span className='secondaryText'>
                    Our misssion into make all <br/> people the best place live for them

                </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'> Information</span>
                <span className='secondaryText'> Colombo Rajagiriye 12</span>
                <div className='flexCenter f-menu'>

                    <span>Property</span>
                    <span>Service</span>
                    <span>Product</span>
                    <span>About</span>

                </div>
            </div>
        </div>

    </section>
  )
}

export default Footer
