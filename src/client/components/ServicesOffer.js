import { Fragment } from "react";
import { ImGift } from 'react-icons/im';
import { BsSpeedometer2 } from 'react-icons/bs';
import { IoMdTimer } from 'react-icons/io';
import { GiReceiveMoney } from 'react-icons/gi';
import { BsCurrencyEuro } from 'react-icons/bs';

const ServicesOffer = () => {
    return (
        <Fragment>
            <div className="servicesContainer">
                <label className="subTitle">What We Offer</label>
                <h2 className="mainTitle">Our Services</h2>

                <div className="rowService container">
                    <div className="serviceBox">
                        <ImGift />
                        <h3>Personalized Welcome</h3>
                    </div>
                    <div className="serviceBox">
                        <BsSpeedometer2 />
                        <h3>Rapid City Transfer</h3>
                    </div>
                    <div className="serviceBox">
                        <IoMdTimer />
                        <h3>24/7 Support</h3>
                    </div>
                    <div className="serviceBox">
                        <GiReceiveMoney />
                        <h3>Easy Payment</h3>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};


export default ServicesOffer;