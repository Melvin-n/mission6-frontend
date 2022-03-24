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
import Confirm from './pages/Confirm.js';



const App: React.FC = () => {


  const [searchValue, setSearchValue] = useState<string>('')
  const [searchResults, setSearchResults] = useState<PropertyDetails[]>([])
  const [properties, setProperties] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    axios.get('http://mym6-alb-2138763550.us-east-2.elb.amazonaws.com/api/properties')
    .then(res => {
      setProperties(res.data)
      setIsLoading(false)
    })
    .catch((error) => {
      console.error(error)
    })
  }, []) 

  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchPage searchResults={searchResults} setSearchResults={setSearchResults} />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirm" element={<Confirm />} />
          { !isLoading ? <Route path="/view" element={<PropertyView Property={properties[0]} List={properties}/>} /> :null }
          <Route path='/results' element={<SearchResults searchResults={searchResults} setSearchResults={setSearchResults}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;