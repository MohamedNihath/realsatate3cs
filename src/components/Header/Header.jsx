import React, { useState } from 'react';
import './Header.css'
import {BiMenuAltRight}  from "react-icons/bi";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div>

        <section className='h-wrapper'>

          <div className="flexCenter paddings innerWidth h-container" >
            <img src='logo.png' alt='logo' width={100}/>
            <div  className={`h-menu ${menuOpened ? "active": "disable"}`}
            >
              <a href=''>Residence</a>
              <a href=''>Our Value</a>
              <a href=''>Conduct Us</a>
              <a href=''>Get Started</a>
              <button className='btn'> 
                  <a href=''>Conduct</a>
              </button>
            </div>
            
            <div className='menu-icon' onClick={()=>setMenuOpened(!menuOpened)}>
              <BiMenuAltRight size={30}/>
            </div>
          </div>


        </section>
      
    </div>
  )
}

export default Header
