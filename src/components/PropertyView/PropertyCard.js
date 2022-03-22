

import Map from '../PropertyView/Map'



const PropertyCard = ({ Property, List }) => {

    return (
        <Map address={Property.Property.address} />
    )
}

export default PropertyCard;