import PropertyTile from "./PropertyTile";

const PropertyCarousel = ({ List }) => {
    return (
        <div className="property-carousel">
            <p className="carousel-heading">
                More properties like this
            </p>

            <div className="tiles">
                <PropertyTile Property={List[1]} />
                <PropertyTile Property={List[2]} />
                <PropertyTile Property={List[3]} />
                <PropertyTile Property={List[4]} />
            </div>
        </div>
    )
}

export default PropertyCarousel;