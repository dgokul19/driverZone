import { Fragment, useContext } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import GoogleMap from './GoogleMap';

import { BookingContext } from '../../context/BookingContext';

import './map.scss';

const BookingMap = ({ open, closeModal, details={}}) => {
    const { username, phone, fromLocation, toLocation, pickUpDate, pickUpTime } = details;
    const { bookingLocation } = useContext(BookingContext);

    return (
        <Fragment>
            <div className={`mapLayerModal ${open ? 'open' : ''}`}>
                <div className={`mapTransitionLayer ${open ? 'active' : ''}`}>
                    <AiFillCloseCircle className={'closeIcon'} onClick={closeModal} />
                    <GoogleMap
                        direction={bookingLocation}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default BookingMap;