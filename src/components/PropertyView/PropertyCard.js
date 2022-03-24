

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
<<<<<<< HEAD
            <div className="photos">
=======
                <div className="photos">
>>>>>>> 63ed609c24d2ad5e0309f1c1c362bb7b617aff5e
                    <div className="photos-left">
                        <img src={Property.image} alt={`${Property._id}`} />
                    </div>
                    <div className="photos-right">
                        <div className="photos-right-upper">
                            <img src={Property.subimages[0]} alt={`${Property._id}`} />
                        </div>
                        <div className="photos-right-lower">
                            <img src={Property.subimages[1]} alt={`${Property._id}`} />
                        </div>
                    </div>
                </div>
                <div className="features">
                    <div className="features-top">
                        <div className="property-card-tile">
                            <p className="bedrooms">{`${Property.bedrooms} Bedrooms`}</p>
                        </div>
                        <div className="property-card-tile">
                            <p className="driveway">{Property.driveway ? 'Driveway' : 'None'}</p>
                        </div>
                        <div className="property-card-tile">
                            <p className="fenced">{Property.fullyFenced ? 'Fully Fenced' : 'Not Fully Fenced'}</p>
                        </div>
                    </div>
                    <div className="features-bottom">
                        <div className="property-card-tile">
                            <p className="bathrooms">{`${Property.bathrooms} Bathrooms`}</p>
                        </div>
                        <div className="property-card-tile">
                            <p className="facing">{`${Property.facingDirection.charAt(0).toUpperCase() + Property.facingDirection.slice(1)} Facing`}</p>
                        </div>
                        <div className="property-card-tile">
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
                        <i className="fa-regular fa-heart" /> Save Property
                    </button>
                    <button className="button button-outline">
                        Book a Viewing
                    </button>
                    <button className="button button-solid">
                        Apply to Rent
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard;