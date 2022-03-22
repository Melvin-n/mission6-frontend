import { useState } from 'react'
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

const Map = ({ center, address }) => {
    const [showMarker, setShowMarker] = useState(false)

    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={{
                    width: '21.25em',
                    height: '23.75em'
                }}
                center={center}
                zoom={13}
                options={{
                    disableDefaultUI: true,
                    zoomControl: true
                }}
            >
                <Marker
                    position={center}
                    icon={{
                        url: '/images/Property-View/Marker.png',
                    }}
                    onClick={() => {
                        setShowMarker((prevState) => prevState = !prevState)
                    }}
                />

                <Circle
                    center={center}
                    options={circleOptions}
                />

                {showMarker ? <InfoWindow
                    position={center}
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
        </LoadScript>
    )
}

export default Map