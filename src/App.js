import React from 'react'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import Residencis from './components/Residencis/Residencis';
import Value from './components/Value/Value';
import Conduct from './components/Conduct/Conduct';
import Getstaret from './components/Getstaret/Getstaret';
import Footer from './components/Footer/Footer';




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
        <Value/>
        <Conduct/>
        <Getstaret/>
        <Footer/>
   </div>

  </>   
  
   
  
}

export default App
