import { useState, useEffect } from "react";
import {
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer
} from "react-google-maps";
import _ from 'underscore';

import { MAP_CONSTANT } from '../../util/constants';

const { defaultZoom, defaultLatitude, defaultLongitude } = MAP_CONSTANT;

const GoogleMapComponent = withGoogleMap(({ direction }) => {
    const places = { ...direction };
    places.fromLocation = _.isEmpty(direction.fromLocation) ? { lat: 45.7640, lng: 4.8357 } : direction.fromLocation;
    places.toLocation = _.isEmpty(direction.toLocation) ? { lat: 48.7640, lng: 2.3557 } : direction.toLocation;

    const MapDirectionsRenderer = (props) => {
        const [directions, setDirection] = useState({});

        useEffect(() => {
            const directionsService = new google.maps.DirectionsService();

            directionsService.route({
                origin: places.fromLocation,
                destination:  places.toLocation,
                travelMode: google.maps.TravelMode.DRIVING
            }, (result, status) => {
                console.log('result', result);
                if (status === google.maps.DirectionsStatus.OK) {
                    setDirection(result);
                } else {
                    setDirection(null);
                }
            }
            );
        }, []);

        if (directions) {
            return <DirectionsRenderer directions={directions} />;
        } else {
            return null;
        }
    };

    return (
        <GoogleMap
            defaultZoom={defaultZoom}
            defaultCenter={{ lat: defaultLatitude, lng: defaultLongitude }}
        >
            <MapDirectionsRenderer />
        </GoogleMap>
    )
}
);




export default GoogleMapComponent;
