

import Map from '../PropertyView/Map'



const PropertyCard = ({ Property, List }) => {

    return (
        <div className='property-card'>
            <div className='card-left'>
                <div className='left-price'>
                    <h3 className='address'>{Property.Property.address}</h3>
                    <h4 className='price'>{`$${Property.Property.pricePerWeek}/wk`}</h4>
                </div>
                <div className='left-contact'>
                    <p className="manager">
                        <b> {Property.Property.propertyManager}</b> <br />
                        Property Manager
                    </p>
                    <p className="contact">
                        {`Email: ${Property.Property.propertyManagerEmail}`} <br />
                        {`Phone: ${Property.Property.propertyManagerPhone}`}
                    </p>
                </div>

                <Map address={Property.Property.address} />
            </div>
            <div className='card-right'>

            </div>
        </div>
    )
}

export default PropertyCard;