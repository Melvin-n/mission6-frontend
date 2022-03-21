import React, { useState } from 'react'
import '../styles/homesearch.css'

const HomeSearch: React.FC = () => {

  const [suburb, setSuburb] = useState<string>('')
  const [minBedrooms, setMinBedrooms] = useState<number>()
  const [maxBedrooms, setMaxBedrooms] = useState<number>()
  const [minWeeklyRental, setMinWeeklyRental] = useState<number>()
  const [maxWeeklyRental, setMaxWeeklyRental] = useState<number>()
  const [bathrooms, setBathrooms] = useState<number>()
  const [hasPets, setHasPets] = useState<boolean>(false)
  const [groceryStoreDistance, setGroceryStoreDistance] = useState<number>(500)
  const [schoolDistance, setSchoolDistance] = useState<number>(500)
  const [parkDistance, setParkDistance] = useState<number>(500)
  const [keyWords, setKeyWords] = useState<string>()



  return (
    <div id='form-section-container'>
        <form id='main-search-form'>
            <h2 id='form-header'>Find your perfect rental property.</h2>
            {/* top left of form  */}
            <section id='form-top-left'>       
              <h5 className='form-item-title'>Suburb</h5>
              <input name='suburb' id='form-suburb'/>
              <h5 className='form-item-title'>Bedrooms</h5>
              <div id='bedrooms-form-section'>
                <select name='min-bedrooms' id='min-bedrooms'>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </select>
                <p>to</p>
                <select name='max-bedrooms' id='max-bedrooms'>
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
                <select name='min-rent' id='min-rent'>
                    <option value={100}>100</option>
                    <option value={200}>200</option>
                    <option value={300}>300</option>
                    <option value={500}>500</option>
                    <option value={1000}>1000</option>
                    <option value={2000}>2000</option>
                    <option value={3000}>3000+</option>
                  </select>
                  <p>to</p>
                  <select name='max-rent' id='max-rent'>
                    <option value={100}>100</option>
                    <option value={200}>200</option>
                    <option value={300}>300</option>
                    <option value={500}>500</option>
                    <option value={1000}>1000</option>
                    <option value={2000}>2000</option>
                    <option value={3000}>3000+</option>
                  </select>
                </div>
              </div>
              <div id='bathroom-pets-form-section'>
                <div id='bathroom-section'>
                  <h5 className='form-item-title'>Bathrooms</h5>
                  <select name='bathrooms' id='bathrooms'>
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
                  <input type='checkbox' id='has-pets' />
                </div>
              </div>
            </section>
            {/* bottom section of form */}
            <section id='form-bottom-section'>
              <h5 className='form-item-title'>Needs to be close to</h5>
              <div id='grocery-store-distance-form' className='form-slider-container'>
                <input type='checkbox' id='grocery-store-distance-check' />
                <h5 className='form-item-title'>Grocery store</h5>
                <input type='range' min='500' max='5000' value='500' className='form-slider' />
                <h5 className='distance-number'>{groceryStoreDistance}m</h5>
                <h6 className='radius-text'><i>radius</i></h6>
              </div>
              <div id='school-distance-form' className='form-slider-container'>
                <input type='checkbox' id='school-distance-check' />
                <h5 className='form-item-title'>Schools</h5>
                <input type='range' min='500' max='5000' value='500' className='form-slider' />
                <h5 className='distance-number'>{schoolDistance}m</h5>
                <h6 className='radius-text'><i>radius</i></h6>
              </div>
              <div id='park-distance-form' className='form-slider-container'>
                <input type='checkbox' id='park-distance-check' />
                <h5 className='form-item-title'>Parks</h5>
                <input type='range' min='500' max='5000' value='500' className='form-slider' />
                <h5 className='distance-number'>{parkDistance}m</h5>
                <h6 className='radius-text'><i>radius</i></h6>
              </div>
              <div id='form-key-search-clear'>
                <h5 className='form-item-title'>Any key words</h5>
                <div id='form-search-clear-bottom'>
                  <input id='key-words' value={keyWords} placeholder='E.g family friendly, pool' />
                  <button id='clear-search-button'>Clear search filters</button>
                </div>
              </div>
            </section>
        </form>
        <button id='form-search-button'>Search</button>
    </div>
  )
}

export default HomeSearch