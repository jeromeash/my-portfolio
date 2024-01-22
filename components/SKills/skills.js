import React from 'react'
import'./skills.css';
import blendernoback from '../../assets/blendernoback.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a skilled and passionate web and graphics designer with experience in creating vissually appealing and user-friendly websites. I have a strong understanding of designs and a keen eye for details, I am proficients in HTMl, CSS, REACT and Javascript, as well as design software such as Adobe Illustrator and Blender</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={blendernoback} alt='blendernoback' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Blender Design</h2>
                    <p>
                        Blender, an open-source 3D creation suite, is widely utilized for diverse purposes, including 3D modeling, game development, VFX, product visualization, VR/AR, education, scientific visualization, and open-source collaboration. Its versatility and user-friendly interface make it a go-to tool for creative endeavors across various industries.
                        </p>
                </div>
            </div>

           < div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>
                        Elevate your online presence with our expert website design services. We create visually stunning and user-friendly websites tailored to showcase your brand and captivate your audience.
                    </p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>
                    Crafting seamless user experiences: Our app design expertise combines aesthetics with functionality to ensure your application stands out in today's competitive digital landscape. Elevate your brand with intuitive and visually appealing app interfaces.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default skills