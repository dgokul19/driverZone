import { Fragment } from "react";
import Header from './Header';

const Banner = () => {
    return (
        <Fragment>
            <div className="BannerContainer">
                <div className="container">
                    <Header />
                    <div className="bannerContent">
                        <h2>Move beyond your choice</h2>
                        <p>We want and act so that the service is not limited only to the transport of people. You will be able to take advantage of services to make your trip the best!</p>
                        <button>Our Tariff</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Banner;