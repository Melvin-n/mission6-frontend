import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Results from '../components/Results'
import PropertyDetails from '../components/propertyDetailsType';



interface Props {
    searchResults: PropertyDetails[]
    setSearchResults: (arg0: PropertyDetails[]) => void
    setSelectedProperty: (arg0: string) => void
    setProperty: (arg0: PropertyDetails) => void
    selectedProperty: string
  
  }

 

const SearchResults: React.FC<Props> = (props) => {
  return (
    <>
        <Header />
        <Results setProperty={props.setProperty} selectedProperty={props.selectedProperty} setSelectedProperty={props.setSelectedProperty} searchResults={props.searchResults} setSearchResults={props.setSearchResults} />
        <Footer />
    </>
  )
}

export default SearchResults