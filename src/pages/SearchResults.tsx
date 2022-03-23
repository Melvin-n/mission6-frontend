import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Results from '../components/Results'
import PropertyDetails from '../components/propertyDetailsType';



interface Props {
    searchResults: PropertyDetails[]
    setSearchResults: ([]) => void
  
  }

 

const SearchResults: React.FC<Props> = (props) => {
  return (
    <>
        <Header />
        <Results searchResults={props.searchResults} setSearchResults={props.setSearchResults} />
        <Footer />
    </>
  )
}

export default SearchResults