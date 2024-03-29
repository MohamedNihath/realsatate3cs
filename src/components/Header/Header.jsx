import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div>

        <section className='h-wrpper'>

          <div className="flexCenter padding innerwidth h-container" >

            <img src='logo.png' alt='logo' width={100}/>

                <div  className="h-menu">

                      <a href=''>Residence</a>
                      <a href=''>Our Value</a>
                      <a href=''>Conduct Us</a>
                      <a href=''>Get Started</a>

                      <button className='btn'> 
                         <a href=''>Conduct</a>

                             </button>
                      

                </div>

          </div>

        </section>
      
    </div>
  )
}

export default Header
