import React from 'react'
import "./Hero.css"
import CountUp from "react-countup"
import {motion} from 'framer-motion' 
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">     
              {/* left side  */}
            <div className="hero-left"> 
                <div className="hero-title">
                     <div className="orange-circle"></div>
                        <motion.h1
                        initial={{y : "2rem", opacity: 0}}
                        animate={{y:0, opacity:1}}
                        transition={{
                            duration: 2,
                            type:String
                        }}
                        >
                        Vila <br />
                        Bogor <br />Indah 6</motion.h1>
                        <br />
                </div>

                 <div className="flexColStart hero-des">
                    <span className='secondaryText'>
                    Cluster Perumahan Exclusive <br />
                    Dengan Design Rumah
                    Modern Minimalis Di Bogor
                    <br />
                    Hunian asri dan sejuk di Bogor ini merupakan pengembangan project sebelumnya di 
                    <br />
                    Vila Bogor Indah 1, 2, 3 & 5, dan fasilitasnya lengkap 
                    <br /> 
                    mulai dari Sport Center, Masjid dan Sekolah
                    <br />
                    Lokasi Strategis dekat dengan Tol BORR, dan dekat dengan stasiun Cilebut.
                     <br /><br />

                    DP 5jt All in - Free Kanopi - Free BPHTB s.d SHM - Free Toren Air - Free Wifi 1 tahun
                    </span>
                 </div>
                 <br />
                 <br />

                 <div className="flexCenter stats">
                    <div className="flexColCenter stat">

                        <span>
                            <CountUp start={400} end={500} duration={3}/>
                            <span>+</span>
                        </span>
                            <span className='secondaryText'>Premium Products</span>
                    </div>

                    <div className="flexColCenter stat">

                        <span>
                            <CountUp start={55} end={80} duration={3}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>Ready Stock</span>
                    </div>
                 </div>

            </div>


            <div className="flexCenter hero-right"></div>
            <motion.div
            initial={{x:"7rem", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{
                duration:2,
                type:String
            }}
             className="image-container">
                <img src="./home3.jpg" alt="" />
            </motion.div>
            
        </div>
    </section>
  )
}

export default Hero