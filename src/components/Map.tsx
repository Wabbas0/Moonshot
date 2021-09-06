import React from "react";
import { launchesSelector } from "../redux/modules/launches";
import GoogleMapReact from "google-map-react";
import Marker from "../components/Marker";
import { useSelector } from "react-redux";
import { Filters } from "../components/Filters";

const Map = ({ filters }: { filters: Filters }): JSX.Element => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const launches = useSelector(launchesSelector);

  return (
    <GoogleMapReact
      resetBoundsOnResize
      bootstrapURLKeys={{
        key: "AIzaSyCZbhsPH2uJr2sRbwlJSKSE-bW5kUrvnMM",
      }}
      // bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      style={{ width: "100%", height: "500px" }}
      onChildClick={(key) => {
        console.log(key);
      }}
    >
      {!filters
        ? launches.data.map((launch) => {
            const { latitude, longitude } = launch.pad;
            return <Marker lng={longitude} lat={latitude} />;
          })
        : launches.data
            .filter((lan) => {
              if (filters.agency && filters.status) {
                return (
                  lan.launch_service_provider.name === filters.agency &&
                  lan.status.abbrev === filters.status
                );
              }

              if (filters.agency) {
                return lan.launch_service_provider.name === filters.agency;
              }

              if (filters.status) {
                return lan.status.abbrev === filters.status;
              }
            })
            .map((lan) => (
              <Marker lng={lan.pad.longitude} lat={lan.pad.latitude} />
            ))}
    </GoogleMapReact>
  );
};

export default Map;
