import React, { createContext, useReducer } from 'react';
import { DEFAULT_VALUE } from '../util/constants'; 

import bookingReducer from '../reducer/booking';

export const BookingContext = createContext();

export function BookingContextProvider (props) {
    const [ bookingLocation, dispatchBookingLocation] = useReducer(bookingReducer, { ...DEFAULT_VALUE.BOOKING_REDUCER });

    return (
        <BookingContext.Provider value= {{ bookingLocation, dispatchBookingLocation }}>
            {props.children}
        </BookingContext.Provider>
    );
}