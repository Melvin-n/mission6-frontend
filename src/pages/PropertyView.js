import Header from '../components/Header'
import PropertyCard from '../components/PropertyView/PropertyCard'
import PropertyCarousel from '../components/PropertyView/PropertyCarousel'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PropertyView = ({ Property, List, selectedProperty, setProperty}) => {

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        axios.post('http://localhost:4000/api/selected-property', {
        propertyAddress: selectedProperty
        })
        .then((res) => {
        setProperty(res.data)
        setIsLoaded(true)
        })
        .catch((error) => {
        console.error(error)
        })
    })
    if (isLoaded) {
        return (
            <>
                <Header />
                <PropertyCard Property={Property} />
                <PropertyCarousel List={List} />
                <Footer />
            </>
        )
    }

    return (<></>)
    
}

export default PropertyView;