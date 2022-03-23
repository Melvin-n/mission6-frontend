import React  from 'react'
import Header from '../components/Header'
import HomeSearch from '../components/HomeSearch'
import Footer from '../components/Footer'
import PropertyDetails from '../components/propertyDetailsType';



interface Props {
  searchResults: PropertyDetails[]
  setSearchResults: ([]) => void

}

const SearchPage: React.FC<Props> = (props) => {
  return (
    <>
        <Header />
        <HomeSearch searchResults={props.searchResults} setSearchResults={props.setSearchResults}/>
        <Footer />
    </>
  )
}

export default SearchPage