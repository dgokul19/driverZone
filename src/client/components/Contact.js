import { Fragment, useState } from "react";

import Header from "./Header";
import SubBanner from './SubBanner';
import BookUs from './BookUs';

import { GiRotaryPhone } from 'react-icons/gi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdMarkEmailRead } from 'react-icons/md';
import { RiMailSendFill } from 'react-icons/ri';

import { DEFAULT_VALUE } from '../util/constants';

const ContactComponent = () => {
    const { CONTACT_FORM } = DEFAULT_VALUE;

    const [ formState, setFormState ] = useState({...CONTACT_FORM});
    return (
        <Fragment>
            <Header/>
            <SubBanner title={'Contacts Us'} path={`contact`}/>

            <div className="contactPageWrapper">
                <div className="contactContainer">
                    <div className="innerBox gMapContainer">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31359.961970782508!2d79.10085565!3d10.734849299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1656769370480!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                        <div className="locationContent">
                            <h3>Contact Information</h3>
                            <ul>
                                <li>
                                    <GiRotaryPhone />
                                    <span>(060)-901-3150</span>
                                </li>
                                <li>
                                    <IoLogoWhatsapp />
                                    <span>+33 (060)-901-3150</span>
                                </li>
                                <li>
                                    <MdMarkEmailRead />
                                    <span>driverszone@outlook.fr</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="innerBox formContainer">
                        <div className="formBox">
                            <p>If you have any query's, please raise here ..</p>
                            <div className="formElement">
                                <label>Your name ( required )<sup>*</sup></label>
                                <input name={`contactName`} placeholder={`Enter your name`} value={formState.contactName} />
                            </div>

                            <div className="formElement">
                                <label>Your Phone ( required )<sup>*</sup></label>
                                <input name={`contactPhone`} placeholder={`Enter your phone`} value={formState.contactNumber} />
                            </div>

                            <div className="formElement">
                                <label>Your Email </label>
                                <input name={`contactEmail`} placeholder={`Enter your email`} value={formState.contactEmail} />
                            </div>

                            <div className="formElement">
                                <label>Message </label>
                                <textarea name={`contactMessage`} placeholder={`Enter your message here`} value={formState.contactMessage} />
                            </div>
                            <span>
                                <button><RiMailSendFill/>Send</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <BookUs />
        </Fragment>
    );
};


export default ContactComponent;