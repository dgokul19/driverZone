import { Fragment, useState } from "react";
import { FaUserTie } from 'react-icons/fa';
import { GiRotaryPhone } from 'react-icons/gi';
import { TiLocation } from 'react-icons/ti';
import { BsCalendarDateFill } from 'react-icons/bs';
import { IoIosTime } from 'react-icons/io';

import AutoComplete from './AutoComplete/AutoComplete';
import BookingMap from './Map/BookingMap';

import { DEFAULT_VALUE } from '../util/constants';

import '../styles/bookingForm.scss';

import LeftImage from '../assets/images/tesla_form.png';

const BookYourJourneyForm = () => {
    const { BOOKING_DETAILS } = DEFAULT_VALUE;

    const [ modal, setModal ] = useState(false); 
    const [ bookingFrom, setBookingForm ] = useState({...BOOKING_DETAILS}); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingForm({
            ...bookingFrom,
            [name] : value
        });
    };
   
    const handleBooking = (e) => {
        setModal(true);
    };

    const handleLocation = (e) => {
    };

    console.log({bookingFrom});

    return (
        <Fragment>
            <div className="bookingContainer">
                <div className="formOuterLayer">
                    <div className="imageSide">
                        <img src={LeftImage} alt={`Berline Tesla`}/>
                    </div>
                    <div className="formSide">
                        <h3>Book Your Ride !!</h3>
                        <ul>
                            <li>Berline</li>
                            <li>Van</li>
                        </ul>

                        <div className="formBoxContainer">
                            <div className="rowForm">
                                <div className="formBox">
                                    <FaUserTie/>
                                    <input name={`username`} placeholder={`Enter your name...`} value={bookingFrom.username} onChange={handleChange}/>
                                </div>

                                <div className="formBox">
                                    <GiRotaryPhone/>
                                    <input name={`phone`} placeholder={`Enter your phone...`} value={bookingFrom.phone} onChange={handleChange}/>
                                </div>
                            </div>


                            <div className="rowForm">
                                <div className="formBox">
                                    <TiLocation/>
                                    <AutoComplete placeholder={'Starting location...'} name={`fromLocation`} updateLocation={setBookingForm}/>
                                </div>

                                <div className="formBox">
                                    <TiLocation/>
                                    <AutoComplete placeholder={'Destinaton location...'} name={`toLocation`} updateLocation={setBookingForm}/>
                                    {/* <input name={`toLocation`} placeholder={`Destinaton location...`} value={bookingFrom.toLocation} onChange={handleLocation} /> */}
                                </div>
                            </div>

                            <div className="rowForm">
                                <div className="formBox">
                                    <BsCalendarDateFill/>
                                    <input name={`pickUpDate`} type="date" value={bookingFrom.pickUpDate} onChange={handleChange}/>
                                </div>

                                <div className="formBox">
                                    <IoIosTime/>
                                    <input name={`pickUpTime`} type="time" value={bookingFrom.pickUpTime} onChange={handleChange}/>
                                </div>
                            </div>

                            <span>
                                <button onClick={() => handleBooking()}>Book Now</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div> 
            {<BookingMap open={modal} closeModal={() => setModal(false)}/>}
        </Fragment>
    )
};

export default BookYourJourneyForm;