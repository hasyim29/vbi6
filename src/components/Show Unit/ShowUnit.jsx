import React from "react"
import{Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css";
import "./ShowUnit.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/Common";

const ShowUnit = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Seller</span>
                <span className='primaryText'>Ready Stock</span>
            </div>

            <Swiper {...sliderSettings}>
                <SlidersButtons/>
                {data.map((card, i)=> (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="home1" />

                                <span className="secondaryText r-price">
                                    <span style={{color: "orange"}}>IDR </span>
                                    <span>{card.price}</span>
                                </span>

                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default ShowUnit

const SlidersButtons = ()=> {
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    );
};