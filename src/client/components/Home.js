import { Fragment } from "react";

import Banner from "./Banner";
import BookingForm from './BookingForm';
import ServicesOffer from './ServicesOffer';
import TariffComponent from './Tariff/TariffComponent';
import BookUs from './BookUs';


const HomeComponent = () => {
    return (
        <Fragment>
            <Banner/>

            <BookingForm />

            <ServicesOffer />

            <TariffComponent />

            <BookUs />
        </Fragment>
    )
};

export default HomeComponent;