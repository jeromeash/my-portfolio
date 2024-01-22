import React from 'react';
import './work.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>MY PORTFOLIO</h2>
        <span className='worksdesc'></span>
        <div className='worksimg'>
          <img src={Portfolio1} alt='' className='worksImg'></img>
          <img src={Portfolio2} alt='' className='worksImg'></img>
          <img src={Portfolio3} alt='' className='worksImg'></img>
          <img src={Portfolio4} alt='' className='worksImg'></img>
          <img src={Portfolio5} alt='' className='worksImg'></img>
          <img src={Portfolio6} alt='' className='worksImg'></img>
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works