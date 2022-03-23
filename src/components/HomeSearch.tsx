import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/homesearch.css'
import PropertyDetails from './propertyDetailsType';

interface Props {
  searchResults: PropertyDetails[]
  setSearchResults: ([]) => void

}

const HomeSearch: React.FC<Props> = (props) => {
  let navigate = useNavigate()
  const [suburb, setSuburb] = useState<string>(' ')
  const [minBedrooms, setMinBedrooms] = useState<number>(1)
  const [maxBedrooms, setMaxBedrooms] = useState<number>(6)
  const [minWeeklyRental, setMinWeeklyRental] = useState<number>(1)
  const [maxWeeklyRental, setMaxWeeklyRental] = useState<number>(999999)
  const [bathrooms, setBathrooms] = useState<number>(1)
  const [allowsPets, setAllowsPets] = useState<boolean>(false)
  const [includeGroceryDistance, setIncludeGroceryDistance] = useState(false)
  const [groceryStoreDistance, setGroceryStoreDistance] = useState<number>(500)
  const [includeSchoolDistance, setIncludeSchoolDistance] = useState(false)
  const [schoolDistance, setSchoolDistance] = useState<number>(500)
  const [includeParkDistance, setIncludeParkDistance] = useState(false)
  const [parkDistance, setParkDistance] = useState<number>(500)
  const [keyWords, setKeyWords] = useState<string>()
  
  

  interface Query {
    address :{$regex: `.*${string}*.`, $options: string}
    bedrooms: Between
    pricePerWeek: Between
    bathrooms: {$gte: number}
    petFriendly: boolean
    distanceFromPark: {$lte: number}
    distanceFromGrocery: {$lte: number}
    distanceFromSchool: {$lte: number}
  }

  interface Between {
    $lte: number 
    $gte: number
  }

  const queryBuilder = (): Query => {
    let query: Query = {
    "address": {$regex : `.*${suburb}*.`, $options: "i"},
    "bedrooms": {$gte:minBedrooms, $lte:maxBedrooms},
    "pricePerWeek": {$gte: minWeeklyRental, $lte:maxWeeklyRental},
    "bathrooms": {$gte: bathrooms},
    "petFriendly": allowsPets,
    "distanceFromPark": {$lte: includeParkDistance ? parkDistance : 9999999},
    "distanceFromGrocery": {$lte: includeGroceryDistance ? groceryStoreDistance : 9999999}, 
    "distanceFromSchool": {$lte:includeSchoolDistance ? schoolDistance : 9999999}

    };
    return query
  }

  const querySearch = (): void => {
    fetch('http://mym6-alb-2138763550.us-east-2.elb.amazonaws.com/api/properties/query', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        query: queryBuilder()
      })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      props.setSearchResults(data) 
      navigate('/results')  
    })
  }

  return (
    <div id='form-section-container'>
        <form id='main-search-form'>
            <h2 id='form-header'>Find your perfect rental property.</h2>
            {/* top left of form  */}
            <section id='form-top-left'>       
              <h5 className='form-item-title'>Suburb</h5>
              <input name='suburb' id='form-suburb' onChange={(e) => setSuburb(e.target.value)}/>
              <h5 className='form-item-title'>Bedrooms</h5>
              <div id='bedrooms-form-section'>
                <select name='min-bedrooms' id='min-bedrooms' onChange={(e) => setMinBedrooms(parseInt(e.target.value))}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </select>
                <p>to</p>
                <select name='max-bedrooms' id='max-bedrooms' onChange={(e) => setMaxBedrooms(parseInt(e.target.value))}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </select>
              </div>
            </section>
            {/* top right of form  */}
            <section id='form-top-right'>
              <div id='weekly-rental-section'>
                <h5 className='form-item-title'>Weekly rental</h5>
                <div id='rental-price-form-section'>
                <select name='min-rent' id='min-rent' onChange={(e) => setMinWeeklyRental(parseInt(e.target.value))}>
                    <option value={100}>$100</option>
                    <option value={200}>$200</option>
                    <option value={300}>$300</option>
                    <option value={500}>$500</option>
                    <option value={1000}>$1000</option>
                    <option value={2000}>$2000</option>
                    <option value={3000}>$3000+</option>
                  </select>
                  <p>to</p>
                  <select name='max-rent' id='max-rent' onChange={(e) => setMaxWeeklyRental(parseInt(e.target.value))}>
                    <option value={100}>$100</option>
                    <option value={200}>$200</option>
                    <option value={300}>$300</option>
                    <option value={500}>$500</option>
                    <option value={1000}>$1000</option>
                    <option value={2000}>$2000</option>
                    <option value={3000}>$3000+</option>
                  </select>
                </div>
              </div>
              <div id='bathroom-pets-form-section'>
                <div id='bathroom-section'>
                  <h5 className='form-item-title'>Bathrooms</h5>
                  <select name='bathrooms' id='bathrooms' onChange={(e) => setBathrooms(parseInt(e.target.value))}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                  </select>
                </div>
                <div id='pets-section'>
                  <h5 className='form-item-title'>Pets?</h5>
                  <input type='checkbox' id='has-pets' onChange={() => setAllowsPets(!allowsPets)}/>
                </div>
              </div>
            </section>
            {/* bottom section of form */}
            <section id='form-bottom-section'>
              <h5 className='form-item-title'>Needs to be close to</h5>
              <div id='grocery-store-distance-form' className='form-slider-container'>
                <input type='checkbox' id='grocery-store-distance-check' 
                onChange={() => {
                  setIncludeGroceryDistance(!includeGroceryDistance) 
                  setGroceryStoreDistance(500)}}
                  />
                <h5 className='form-item-title'>Grocery store</h5>
                <input 
                  type='range' 
                  min='500' 
                  max='5000' 
                  value={!includeGroceryDistance ? 500 : groceryStoreDistance} 
                  className={!includeGroceryDistance ? 'inactive-form-slider' : 'form-slider'}
                  onChange={(e) => !includeGroceryDistance ? setGroceryStoreDistance(500) : setGroceryStoreDistance(parseInt(e.target.value))}
                />
                <h5 className='distance-number'>{groceryStoreDistance}m</h5>
                <h6 className='radius-text'><i>radius</i></h6>
              </div>

              <div id='school-distance-form' className='form-slider-container'>
                <input type='checkbox' id='school-distance-check' 
                onChange={() => {
                  setIncludeSchoolDistance(!includeSchoolDistance) 
                  setSchoolDistance(500)}}
                  />
                <h5 className='form-item-title'>Schools</h5>
                <input 
                  type='range' 
                  min='500' 
                  max='5000' 
                  value={!includeSchoolDistance ? 500 : schoolDistance}
                  className={!includeSchoolDistance ? 'inactive-form-slider' : 'form-slider'}
                  onChange={(e) => !includeSchoolDistance ? setSchoolDistance(500) : setSchoolDistance(parseInt(e.target.value))}
                />
                <h5 className='distance-number'>{schoolDistance}m</h5>
                <h6 className='radius-text'><i>radius</i></h6>
              </div>

              <div id='park-distance-form' className='form-slider-container'>
                <input type='checkbox' id='park-distance-check' 
                onChange={() => {
                  setIncludeParkDistance(!includeParkDistance) 
                  setParkDistance(500)}}
                  />
                <h5 className='form-item-title'>Parks</h5>
                <input 
                  type='range' 
                  min='500'
                  max='5000' 
                  value={!includeParkDistance ? 500 : parkDistance} 
                  className={!includeParkDistance ? 'inactive-form-slider' : 'form-slider'} 
                  onChange={(e) => !includeParkDistance ? setParkDistance(500) : setParkDistance(parseInt(e.target.value))}
                />
                <h5 className='distance-number'>{parkDistance}m</h5>
                <h6 className='radius-text'><i>radius</i></h6>
              </div>

              <div id='form-key-search-clear'>
                <h5 className='form-item-title'>Any key words</h5>
                <div id='form-search-clear-bottom'>
                  <input id='key-words' value={keyWords} placeholder='E.g family friendly, pool' onChange={(e) => setKeyWords(e.target.value)}/>
                  <button id='clear-search-button'>Clear search filters</button>
                </div>
              </div>
            </section>
        </form>
        <button id='form-search-button' onClick={querySearch}>Search</button>

    </div>
  )
}

export default HomeSearch