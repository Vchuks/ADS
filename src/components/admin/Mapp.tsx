import { MapContext } from "../context/MapContext";
// import GoogleMapReact from "google-map-react";
import { useMemo, useContext } from "react";
// import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
// const AnyReactComponent = (props: {lat:number | string, lng:number | string,text:string} ) => (
//   <div className=" bg-red-600 block w-8 text-white h-8 rounded-full">{props.text}
//   </div>
// );

export default function Mapp(props: { high: string }) {
  const { geo } = useContext(MapContext);
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyDBEWGAPAENM1D_ENr34JlvZV4wfzwlkOs",
  // });
  const a = parseFloat(geo.lat);
  const b = parseFloat(geo.log);
  const center = useMemo(() => ({ lat: a, lng: b }), [a, b]);

  return (
    // Important! Always set the container height explicitly
    <div className={`w-full ${props.high}`}>
      {/* {!isLoaded ? (
        <h1>Loading...</h1>
      ) : ( */}
      <APIProvider apiKey="AIzaSyDBEWGAPAENM1D_ENr34JlvZV4wfzwlkOs">
        <Map
          defaultCenter={center}
          defaultZoom={12}
          mapId={"7bb050ff10d43d16"}
        >
          <AdvancedMarker position={{ lat: a, lng: b }} />
        </Map>
        {/* mapContainerClassName="h-full w-full"
         */}
      </APIProvider>
      {/* )} */}
    </div>
  );
}
