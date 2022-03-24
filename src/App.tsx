import { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import './styles/styles.css'
import './sass/index.scss'

import SearchPage from './pages/SearchPage';

import SearchResults from './pages/SearchResults';
import PropertyView from './pages/PropertyView';
import Booking from './pages/Booking';
import PropertyDetails from './components/propertyDetailsType';
import BookingConfirmType from './components/bookingConfirmType';
import Confirm from './pages/Confirm.js';




const App: React.FC = () => {


  const [searchValue, setSearchValue] = useState<string>('')
  const [searchResults, setSearchResults] = useState<PropertyDetails[]>([])
  const [property, setProperty] = useState<PropertyDetails>()
  const [isLoading, setIsLoading] = useState(true)
  const [bookingConfirm, setBookingConfirm] = useState<BookingConfirmType>()
  const [selectedProperty, setSelectedProperty] = useState<string>('42 Seacliffe Road, Hillsborough, 1042')

  useEffect(() => {
    axios.post('http://localhost:4000/api/selected-property', {
      propertyAddress: selectedProperty
    })
    .then((res: any) => {
      setProperty(res.data)
      setIsLoading(false)
    })
    .catch((error: any) => {
      console.error(error)
    })
  }, []) 

  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchPage searchResults={searchResults} setSearchResults={setSearchResults} />} />
          <Route path="/booking" element={<Booking  setBookingConfirm={setBookingConfirm} />} />
          <Route path="/confirm" element={<Confirm bookingConfirm={bookingConfirm} />} />
          <Route path="/view" element={<PropertyView selectedProperty={selectedProperty} setProperty={setProperty} Property={property} List={property}/>} /> 
          <Route path='/results' element={<SearchResults setProperty={setProperty} selectedProperty={selectedProperty} setSelectedProperty={setSelectedProperty} searchResults={searchResults} setSearchResults={setSearchResults}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
