import React, { useState, useEffect } from "react";
import {
    LoadScript,
    GoogleMap,
    DirectionsService,
    DirectionsRenderer
} from "@react-google-maps/api";

import _ from 'underscore';

import { MAP_CONSTANT } from '../../util/constants';

const { defaultZoom, defaultLatitude, defaultLongitude } = MAP_CONSTANT;

const GoogleMapComponent = ({ direction, pathDistance }) => {
    const [response, setResponse] = useState(null);
    // const places = { ...direction };
    // places.fromLocation = _.isEmpty(direction.fromLocation) ? { lat: 45.7640, lng: 4.8357 } : direction.fromLocation;
    // places.toLocation = _.isEmpty(direction.toLocation) ? { lat: 48.7640, lng: 2.3557 } : direction.toLocation;

    const callback = React.useCallback((r) => {
        if (r !== null) {
            if (r.status === "OK") {
                const covereDistance = r?.routes[0]?.legs[0]?.distance?.text ?? '0.00 Km';
                pathDistance(covereDistance);
                setResponse(r);
            } else {
                console.log("r: ", r);
            }
        }
    }, []);

    return (
        <GoogleMap
            zoom={defaultZoom}
            center={{ lat: defaultLatitude, lng: defaultLongitude }}
            mapContainerStyle={{
                height: "100%",
                width: "100%"
            }}
        >
            <DirectionsService
                callback={callback}
                options={{
                    destination: direction.toLocation,
                    origin: direction.fromLocation,
                    travelMode: "DRIVING"
                }}
            />
            {response !== null && (
                <DirectionsRenderer directions={response} />
            )}
        </GoogleMap>
    )
};




export default GoogleMapComponent;
