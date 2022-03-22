import Header from '../components/Header'
import PropertyCard from '../components/PropertyView/PropertyCard'
import PropertyCarousel from '../components/PropertyView/PropertyCarousel'
import Footer from '../components/Footer'

const PropertyView = () => {
    return (
        <>
            <Header />
            <PropertyCard />
            <PropertyCarousel />
            <Footer />
        </>
    )
}

export default PropertyView;