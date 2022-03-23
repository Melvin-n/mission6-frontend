import React, { useState } from 'react'
import '../styles/refine-search.css'
import PropertyDetails from './propertyDetailsType';

interface Props {
  searchResults: PropertyDetails[]
  setSearchResults: ([]) => void

}

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

const RefineSearch: React.FC<Props> = (props)  => {

    const [suburb, setSuburb] = useState<string>('')
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
    const [searchResults, setSearchResults] = useState<[]>()

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
  
    const querySearch = (e: React.FormEvent): void => {
      e.preventDefault()
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
      })
    }

  return (
    <>
        <form id='refine-search-form'>
            <h1 id='refine-search-title'>Refine your search</h1>
            <h5 className='form-item-title'>Suburb</h5>
            <input name='suburb' id='form-suburb' className='refine-search-input' onChange={(e) => setSuburb(e.target.value)}/>

            <h5 className='form-item-title'>Bedrooms</h5>
              <div id='bedrooms-form-section'>
                <select className='refine-search-input' name='min-bedrooms' id='min-bedrooms' onChange={(e) => setMinBedrooms(parseInt(e.target.value))}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </select>
                <p>to</p>
                <select name='max-bedrooms' id='max-bedrooms' className='refine-search-input' onChange={(e) => setMaxBedrooms(parseInt(e.target.value))}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </select>
              </div>

              <div id='weekly-rental-section'>
                <h5 className='form-item-title'>Weekly rental</h5>
                <div id='rental-price-form-section'>
                <select className='refine-search-input' name='min-rent' id='min-rent' onChange={(e) => setMinWeeklyRental(parseInt(e.target.value))}>
                    <option value={100}>$100</option>
                    <option value={200}>$200</option>
                    <option value={300}>$300</option>
                    <option value={500}>$500</option>
                    <option value={1000}>$1000</option>
                    <option value={2000}>$2000</option>
                    <option value={3000}>$3000+</option>
                  </select>
                  <p>to</p>
                  <select className='refine-search-input' name='max-rent' id='max-rent' onChange={(e) => setMaxWeeklyRental(parseInt(e.target.value))}>
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
                  <select className='refine-search-input' name='bathrooms' id='bathrooms' onChange={(e) => setBathrooms(parseInt(e.target.value))}>
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

              <section id='form-bottom-section'>
              <h5 className='form-item-title'>Needs to be close to</h5>
              <div id='grocery-store-distance-form' className='form-slider-container'>
                <input type='checkbox' id='grocery-store-distance-check' 
                onChange={() => {
                  setIncludeGroceryDistance(!includeGroceryDistance) 
                  setGroceryStoreDistance(500)}}
                  />
                <h5 className='form-item-title'>Grocery store</h5>
                <select 
                  value={!includeGroceryDistance ? 500 : groceryStoreDistance} 
                  className={!includeGroceryDistance ? 'inactive-form-dropdown' : 'form-dropdown'}
                  onChange={(e) => !includeGroceryDistance ? setGroceryStoreDistance(500) : setGroceryStoreDistance(parseInt(e.target.value))}
                    disabled={!includeGroceryDistance ? true : false} 
                >
                    <option value={500}>500m</option>
                    <option value={1000}>1000m</option>
                    <option value={2000}>2000m</option>
                    <option value={3000}>3000m</option>
                    <option value={5000}>5000m</option> 
                </select>
                <h6 className='radius-text'><i>radius</i></h6>
              </div>

              <div id='school-distance-form' className='form-slider-container'>
                <input type='checkbox' id='school-distance-check' 
                onChange={() => {
                  setIncludeSchoolDistance(!includeSchoolDistance) 
                  setSchoolDistance(500)}}
                  />
                <h5 className='form-item-title'>Schools</h5>
                <select 
                  value={!includeSchoolDistance ? 500 : schoolDistance} 
                  className={!includeSchoolDistance ? 'inactive-form-dropdown' : 'form-dropdown'}
                  onChange={(e) => !includeSchoolDistance ? setSchoolDistance(500) : setSchoolDistance(parseInt(e.target.value))}
                  disabled={!includeSchoolDistance ? true : false} 
                >
                    <option value={500}>500m</option>
                    <option value={1000}>1000m</option>
                    <option value={2000}>2000m</option>
                    <option value={3000}>3000m</option>
                    <option value={5000}>5000m</option> 
                </select>
                <h6 className='radius-text'><i>radius</i></h6>
              </div>

              <div id='park-distance-form' className='form-slider-container'>
                <input type='checkbox' id='park-distance-check' 
                onChange={() => {
                  setIncludeParkDistance(!includeParkDistance) 
                  setParkDistance(500)}}
                  />
                <h5 className='form-item-title'>Parks</h5>
                <select 
                  value={!includeParkDistance ? 500 : parkDistance} 
                  className={!includeParkDistance ? 'inactive-form-dropdown' : 'form-dropdown'}
                  onChange={(e) => !includeParkDistance ? setParkDistance(500) : setParkDistance(parseInt(e.target.value))}
                  disabled={!includeParkDistance ? true : false} 
                >
                    <option value={500}>500m</option>
                    <option value={1000}>1000m</option>
                    <option value={2000}>2000m</option>
                    <option value={3000}>3000m</option>
                    <option value={5000}>5000m</option> 
                </select>
                <h6 className='radius-text'><i>radius</i></h6>
              </div>
              </section>

              <button className='refine-search-button' onClick={querySearch}>Search</button>
        </form>
    </>
  )
}

export default RefineSearch