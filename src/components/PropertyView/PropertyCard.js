

import Map from '../PropertyView/Map'



const PropertyCard = ({ Property }) => {
    return (
        <div className='property-card'>
            <div className='card-left'>
                <div className='left-price'>
                    <h3 className='address'>{Property.address}</h3>
                    <h4 className='price'>{`$${Property.pricePerWeek}/wk`}</h4>
                </div>
                <div className='left-contact'>
                    <p className='manager'>
                        <b> {Property.propertyManager}</b> <br />
                        Property Manager
                    </p>
                    <p className='contact'>
                        {`Email: ${Property.propertyManagerEmail}`} <br />
                        {`Phone: ${Property.propertyManagerPhone}`}
                    </p>
                </div>

                <Map address={Property.address} />
            </div>
            <div className='card-right'>

            </div>
        </div>
    )
}

export default PropertyCard;