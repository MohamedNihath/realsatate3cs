import React from 'react'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import Residencis from './components/Residencis/Residencis';




const App = () => {
  return <>


   <div className='App'>
        <div>
          <div className='white-gradient'/>
          <Header/>
          <Hero/>
        </div>
        <Companies/>
        <Residencis/>
   </div>

  </>   
  
   
  
}

export default App
