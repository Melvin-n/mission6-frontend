const PropertyTile = ({ Property }) => {

    return (
        <div className='tile'>
            <div className='tile-upper'>
                <img src={Property.image} alt={`${Property._id}`} />
            </div>
            <div className='tile-lower'>
                <div className='tile-lower-left'>
                    <p className='tile-heading'>
                        {Property.subtitle}
                    </p>
                    <p className='tile-address'>
                        {Property.address}
                    </p>
                    <p className='tile-price'>
                        {`$${Property.pricePerWeek}/wk`}
                    </p>
                </div>
                <div className='tile-lower-right'>
                    <div className='chip-left'>
                        <div className='chip'>
                            <p className='chip-bedrooms'>{Property.bedrooms}</p>
                        </div>
                        <div className='chip'>
                            <p className='chip-bathrooms'>{Property.bathrooms}</p>
                        </div>
                        <div className='chip'>
                            <p className='chip-pet'>
                                <i className={`far ${Property.petFriendly ? 'fa-check-circle' : 'fa-times-circle'}`} />
                            </p>
                        </div>
                    </div>

                    <div className='chip-right'>
                        <div className='chip'>
                            <p className='chip-grocery'>
                                {Property.distanceFromGrocery >= 1000 ? Property.distanceFromGrocery / 1000 : Property.distanceFromGrocery}
                                {Property.distanceFromGrocery >= 1000 ? 'km' : 'm'}
                            </p>
                        </div>
                        <div className='chip'>
                            <p className='chip-park'>
                                {Property.distanceFromPark >= 1000 ? Property.distanceFromPark / 1000 : Property.distanceFromPark}
                                {Property.distanceFromPark >= 1000 ? 'km' : 'm'}
                            </p>
                        </div>
                        <div className='chip'>
                            <p className='chip-school'>
                                {Property.distanceFromSchool >= 1000 ? Property.distanceFromSchool / 1000 : Property.distanceFromSchool}
                                {Property.distanceFromSchool >= 1000 ? 'km' : 'm'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyTile;