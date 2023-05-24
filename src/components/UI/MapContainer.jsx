import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
      render() {
            const mapStyles = {
                  width: "100%",
                  height: "400px",
            };

            return (
                  <Map
                        google={this.props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={{
                              lat: 37.7749,
                              lng: -122.4194,
                        }}
                  />
            );
      }
}

export default GoogleApiWrapper({
      apiKey: "AIzaSyBlpE6WC-dOa9bRbgCrMqNwqPX_aTInLj4",
})(MapContainer);
