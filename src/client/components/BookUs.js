import { Fragment } from 'react';


import mp4Format from '../assets/video/service-video-bg.mp4';
import oGgFormat from '../assets/video/service-video-bg.ogg';
import callUS from '../assets/images/action_img.jpeg';

const BookUs = () => {
    return (
        <Fragment>
            <div className='bookUsContainer'>
                <video playsInline autoPlay loop muted>
                    <source src={mp4Format} type="video/mp4" />
                    <source src={oGgFormat} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>

                <div className='bookUsContent'>
                    <div className='leftSideImage'>
                        <div className='overlay_bg'></div>
                        <div className='actionImage'>
                            <img src={callUS} alt={`Book us`} />
                        </div>
                    </div>

                    <div className='callUsContent'>
                        <h2>Call us to Book a Taxi</h2>
                        <h1>(060)-901-3150</h1>
                        <p>A long-distance trip? Event ? a specific need? An 8/9 seater Van? Contact us for a personalized quote</p>
                        <span><button>Get a Ride Now !!</button></span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};


export default BookUs;
