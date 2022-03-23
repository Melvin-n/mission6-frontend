

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
                <div className="photos"></div>
                <div className="features">
                    <div className="features-top">
                        <div className="tile">
                            <p className="bedrooms">{`${Property.bedrooms} Bedrooms`}</p>
                        </div>
                        <div className="tile">
                            <p className="driveway">{Property.driveway ? 'Driveway' : 'None'}</p>
                        </div>
                        <div className="tile">
                            <p className="fenced">{Property.fullyFenced ? 'Fully Fenced' : 'Not Fully Fenced'}</p>
                        </div>
                    </div>
                    <div className="features-bottom">
                        <div className="tile">
                            <p className="bathrooms">{`${Property.bathrooms} Bathrooms`}</p>
                        </div>
                        <div className="tile">
                            <p className="facing">{`${Property.facingDirection} Facing`}</p>
                        </div>
                        <div className="tile">
                            <p className="pet">{Property.petFriendly ? 'Pet Friendly' : 'Not Pet Friendly'}</p>
                        </div>
                    </div>
                </div>
                <div className="text">
                    <h5 className="subtitle">{Property.subtitle}</h5>
                    <p className="description">{Property.description}</p>
                </div>
                <div className="button-group">
                    <button className="button button-outline">
                        <i class="fa-regular fa-heart" /> Save Property
                    </button>
                    <button className="button button-outline">
                        Book A Viewing
                    </button>
                    <button className="button button-solid">
                        Apply To Rent
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard;