import { useEffect, useState } from 'react'
import Geocode from "react-geocode";
import { GoogleMap, LoadScript, Marker, Circle, InfoWindow } from "@react-google-maps/api"

const circleOptions = {
    strokeColor: '#bf163d',
    strokeOpacity: 1,
    strokeWeight: 3,
    fillOpacity: 0,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 2000,
    zIndex: 1
}

const Map = ({ address }) => {
    const [showMarker, setShowMarker] = useState(false)
    const [latLng, setLatLng] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)

    useEffect(() => {
        Geocode.fromAddress(address).then(
            (response) => {
                setLatLng(response.results[0].geometry.location)
                setIsLoading(false)
            },
            (error) => {
                console.error(error);
            }
        );
    }, [])

    return (
        !isLoading ? <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={{
                    width: '21.25em',
                    height: '23.75em'
                }}
                center={latLng}
                zoom={13}
                options={{
                    disableDefaultUI: true,
                    zoomControl: true
                }}
            >
                <Marker
                    position={latLng}
                    icon={{
                        url: '/images/Property-View/Marker.png',
                    }}
                    onClick={() => {
                        setShowMarker((prevState) => prevState = !prevState)
                    }}
                />

                <Circle
                    center={latLng}
                    options={circleOptions}
                />

                {showMarker ? <InfoWindow
                    position={latLng}
                    onClick={() => {
                        setShowMarker((prevState) => prevState = !prevState)
                    }}
                >
                    <div style={{ padding: '0.7em' }}>
                        <h3>{address}</h3>
                    </div>
                </InfoWindow>
                    : null}
            </GoogleMap>
        </LoadScript> : null

    )
}

export default Map