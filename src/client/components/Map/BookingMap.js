import { Fragment, useContext } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { RiMailSendLine } from 'react-icons/ri';
import _ from 'underscore';
import GoogleMap from './GoogleMap';

import { BookingContext } from '../../context/BookingContext';

import './map.scss';

const BookingMap = ({ open, closeModal, details = {} }) => {
    const { username, phone, fromLocation, toLocation, pickUpDate, pickUpTime } = details;
    const { bookingLocation } = useContext(BookingContext);
    let distance = 0.00;

    //calculates distance between two points in km's
    const calcDistance = (p1, p2) => {
        return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    };

    if (!_.isEmpty(bookingLocation.fromLocation) && !_.isEmpty(bookingLocation.toLocation)) {
        const location1 = new google.maps.LatLng(bookingLocation.fromLocation.lat, bookingLocation.fromLocation.lng);
        const location2 = new google.maps.LatLng(bookingLocation.toLocation.lat, bookingLocation.toLocation.lng);

        distance = calcDistance(location1, location2);
    }

    return (
        <Fragment>
            <div className={`mapLayerModal ${open ? 'open' : ''}`}>
                <div className={`mapTransitionLayer ${open ? 'active' : ''}`}>
                    <AiFillCloseCircle className={'closeIcon'} onClick={closeModal} />

                    {
                        (!_.isEmpty(bookingLocation.fromLocation) && !_.isEmpty(bookingLocation.toLocation)) && <GoogleMap
                            direction={bookingLocation}
                            containerElement={<div className='mapContainer' />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    }

                    <div className='detailsContainer'>
                        <h3>Booking Details</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{username}</td>
                                </tr>

                                <tr>
                                    <td>Phone</td>
                                    <td>{phone}</td>
                                </tr>

                                <tr>
                                    <td>From location</td>
                                    <td>{fromLocation}</td>
                                </tr>

                                <tr>
                                    <td>Destinaton location</td>
                                    <td>{toLocation}</td>
                                </tr>
                                <tr>
                                    <td>Pick Date & Time</td>
                                    <td>{pickUpDate} - {pickUpTime}</td>
                                </tr>
                                <tr>
                                    <td>Calculated distance</td>
                                    <td>{distance} km</td>
                                </tr>
                            </tbody>
                        </table>
                        <span>
                            <button> <RiMailSendLine />Confirm Booking</button>
                        </span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default BookingMap;