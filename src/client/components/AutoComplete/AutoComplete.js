import React, { Fragment, useState, useContext } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

import { BookingContext } from '../../context/BookingContext';

const AutoComplete = (props) => {
    const [address, setAddress] = useState('');
    const [hideInput, setHideInput] = useState(true);

    const { bookingLocation, dispatchBookingLocation } = useContext(BookingContext);

    const handleChange = address => {
        setAddress(address);
        setHideInput(false)
    };

    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                const { name, updateLocation } = props;
                setAddress(address);
                setHideInput(true);
                dispatchBookingLocation({ type: 'UPDATE_LOCATION', payload: { [name] : latLng} })

                updateLocation(prevState => {
                    prevState[name] = address;
                    return { ...prevState };
                })

            })
            .catch(error => console.error('Error', error));
    };

    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <Fragment>
                    <input
                        {...getInputProps({
                            placeholder: props.placeholder,
                            className: 'location-search-input',
                        })}
                    />
                    {
                        address && !hideInput && (
                            <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                    const className = 'suggestion-item';
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                            })}
                                            key={suggestion.description}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        )
                    }
                </Fragment>
            )}
        </PlacesAutocomplete>
    );
}


export default AutoComplete;