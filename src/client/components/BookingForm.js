import { Fragment } from "react";
import { FaUserTie } from 'react-icons/fa';
import { GiRotaryPhone } from 'react-icons/gi';
import { TiLocation } from 'react-icons/ti';
import { BsCalendarDateFill } from 'react-icons/bs';
import { IoIosTime } from 'react-icons/io';



import '../styles/bookingForm.scss';

import LeftImage from '../assets/images/tesla_form.png';

const BookYourJourneyForm = () => {
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
                                    <input name={`username`} placeholder={`Enter your name...`} />
                                </div>

                                <div className="formBox">
                                    <GiRotaryPhone/>
                                    <input name={`Phone`} placeholder={`Enter your phone...`} />
                                </div>
                            </div>


                            <div className="rowForm">
                                <div className="formBox">
                                    <TiLocation/>
                                    <input name={`fromLocation`} placeholder={`Starting location...`} />
                                </div>

                                <div className="formBox">
                                    <TiLocation/>
                                    <input name={`toLocation`} placeholder={`Destinaton location...`} />
                                </div>
                            </div>

                            <div className="rowForm">
                                <div className="formBox">
                                    <BsCalendarDateFill/>
                                    <input name={`date`} type="date" placeholder={`Date`} />
                                </div>

                                <div className="formBox">
                                    <IoIosTime/>
                                    <input name={`time`} type="time" value={`00:00`} placeholder={`Time`} />
                                </div>
                            </div>

                            <span>
                                <button>Book Now</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div> 
        </Fragment>
    )
};

export default BookYourJourneyForm;