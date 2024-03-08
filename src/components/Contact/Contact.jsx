import React from 'react';
import "./Contact.css";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs";
import{HiChatBubbleBottomCenter} from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">

            <div className="flextColStart c-left">
                <span className="flextColStart orangeText">Our Contacts</span>
               
                <span className="flexColStart primaryText">Easy to Contact us</span>
               
                <span className="secondaryText"> We Always ready to help by providing the best
                 services beleive a good blace to live can make your better</span>

                <div className="flexColStart contactModes">

                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>0896-3570-6261</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                        {/* second mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>0896-3570-6261</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>

                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>0896-3570-6261</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call Now</div>
                        </div>

                        {/* second mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>0896-3570-6261</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message Now</div>
                        </div>
                    </div>
                </div>            
            </div>

            <div className="flexCenter c-right">
                <br /><br />
                <div className="image-container">
                    <img src="./gaura.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact