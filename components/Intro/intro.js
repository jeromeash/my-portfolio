import React from 'react';
import './intro.css';
import bg from '../../assets/illustrator-removebg-preview.png';
import BtnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello.</span>
            <span className='introText'>I'm <span className='introName'>Jake</span><br /> Website Designer <br/> Graphics designer</span>
            <p className='introPara'>I am a skilled web and graphics designer with experience in <br />creating visually appealing and user friendly websites </p>
            <Link> <button className= "btn"> <img src={BtnImg} alt='Hire' className='btnImg' /> Hire Me </button> </Link>
        </div>
        <img   src = {bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro