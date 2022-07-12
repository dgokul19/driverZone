import React, { Fragment } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            address: '',
            hideInput : true
        };
    }

    handleChange = address => {
        this.setState({ address, hideInput : false });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                const { name, updateLocation } = this.props;
                this.setState({ address, hideInput : true });
                updateLocation(prevState => {
                    prevState[name] = address;
                    return { ...prevState };
                })

            })
            .catch(error => console.error('Error', error));
    };

    
    render() {

        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <Fragment>
                        <input
                            {...getInputProps({
                                placeholder: this.props.placeholder,
                                className: 'location-search-input',
                            })}
                        />
                        {
                            this.state.address && !this.state.hideInput && (
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
}


export default AutoComplete;