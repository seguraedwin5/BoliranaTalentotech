import {
  APIProvider,
  Map,
  useMarkerRef,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
function MapContainer() {
  const [markerRef, marker] = useMarkerRef();
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="relative w-full h-full  bg-white">
        <Map
          style={{ width: "100%", height: "100%" }}
          defaultCenter={{ lat: 4.742540866658166, lng: -74.12745763908937 }}
          defaultZoom={12}
          gestureHandling={"greedy"}
          disableDefaultUI={false}
          mapId={"2745ac87cb8769de"}
        >
          <AdvancedMarker
            ref={markerRef}
            position={{ lat: 4.742540866658166, lng: -74.12745763908937 }}
          />
        </Map>
      </div>
    </APIProvider>
  );
}

export default MapContainer;
