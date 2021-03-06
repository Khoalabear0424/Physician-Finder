import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 37.8283,
            lng: -98.5795
        },
        zoom: 4
    };

    render() {
        const { markerCoords } = this.props
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '375px', width: '100' }} className="m-4">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {markerCoords.map((marker, index) =>
                        <Marker
                            key={index}
                            lat={marker.lat}
                            lng={marker.lng}
                            color={marker.color}
                        />
                    )}
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;