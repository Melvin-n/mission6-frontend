import React, {useEffect, useRef} from 'react'
import RefineSearch from './RefineSearch'
import '../styles/results.css'
import PropertyDetails from './propertyDetailsType';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'




interface Props {
  searchResults: PropertyDetails[]
  setSearchResults: (arg0: PropertyDetails[]) => void
  setSelectedProperty: (arg0: string) => void
  setProperty: (arg0: PropertyDetails) => void
  selectedProperty: string

}

const Results: React.FC<Props> = (props) => {

  const navigate = useNavigate();
  const isMounted = useRef(false)

  //take meter value and return formatted meters/kms
  const metersToKilometers = (meters: number): string => {
    let distance: string;
    if (meters > 999) {
      distance = (meters/1000).toString() + 'km'
    } else {
      distance = meters.toString() + 'm'
    }
    return distance
  }

  //set chosen property and redirect to property view page
useEffect(() => {
  if (isMounted.current) {
    axios.post('http://localhost:4000/api/selected-property', {
      propertyAddress: props.selectedProperty
    })
    .then((res: any) => {
      props.setProperty(res.data)
      navigate('/view')
    })
    .catch((error: any) => {
      console.error(error)
    })
  } else {
    isMounted.current = true;
  }
    

  }, [props.selectedProperty])


  return (
    <div id='results-section'>
        <RefineSearch  searchResults={props.searchResults} setSearchResults={props.setSearchResults}/>
        <div id='display-results'>
            <h2 id='display-results-title'>Results</h2>
            <div id='result-cards'>
            {props.searchResults.map((result: PropertyDetails, i: number) => (
              <div key={i} className='property-result-card' onClick={() => props.setSelectedProperty(result.address)}>
                <img className='property-card-image' src={result.image} alt='property' />
                <div className='property-card-details'>
                  <div className='left-property-card'>
                    <h1 className='property-card-subtitle'>{result.subtitle}</h1>
                    <h3 className='property-card-address'>{result.address}</h3>
                    <h2 className='property-card-price'>${result.pricePerWeek}/wk</h2>
                  </div>
                  <div className='right-property-card'>
                    <span className='card-icon-set'><img className='card-icon' src='./images/Search/Bed.png' alt='bed' /> <p className='icon-value'>{result.bedrooms} </p></span>
                    <span className='card-icon-set'><img className='card-icon' src='./images/Search/Forest.png' alt='park' /> <p className='icon-value'>{metersToKilometers(result.distanceFromPark)} </p></span>
                    <span className='card-icon-set'><img className='card-icon' src='./images/Search/Sink.png' alt='sink' /> <p className='icon-value'>{result.bathrooms} </p></span>
                    <span className='card-icon-set'><img className='card-icon' src='./images/Search/Ingredients.png' alt='grocery' /> <p className='icon-value'>{metersToKilometers(result.distanceFromGrocery)} </p></span>
                    <span className='card-icon-set'><img className='card-icon' src='./images/Search/Animal Shelter.png' alt='pets' /> <p className='icon-value'>{result.petFriendly ? <img className='card-check' src='images/Search/icon/outlined/suggested/circle/check.png' alt='yes' /> : 'x'} </p></span>
                    <span className='card-icon-set'><img className='card-icon' src='./images/Search/Classroom.png' alt='school' /> <p className='icon-value'>{metersToKilometers(result.distanceFromSchool)} </p></span>
                  </div>
                </div>
              </div>
              ))}
            </div> 
              <p id='page-nav'> Results page 1 of 1</p> 
                     
        </div>
    </div>
  )
}

export default Results