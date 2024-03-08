import { MapContext } from "../../components/context/MapContext";
import GoogleMapReact from "google-map-react";
import { useContext } from "react";

const AnyReactComponent = ({ text }) => (
  <div className=" bg-red-600 block w-8 text-white h-8 rounded-full">
    {text}
  </div>
);

export default function Map({high}) {
  const { geo } = useContext(MapContext);

  const defaultProps = {
    center: {
      lat: 6.578249,
      lng: 3.364786,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div className={`w-full ${high}`}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: "AIzaSyDBEWGAPAENM1D_ENr34JlvZV4wfzwlkOs" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        // yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {/* <Marker position={{ lat: -38.132245, lng: 144.2994245 }}/> */}
        <AnyReactComponent lat={geo.lat} lng={geo.lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
