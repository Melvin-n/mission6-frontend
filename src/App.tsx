import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import './styles/styles.css'
import SearchPage from './pages/SearchPage';

import SearchResults from './pages/SearchResults';
import Booking from './pages/Booking';
import PropertyDetails from './components/propertyDetailsType';
import Confirm from './pages/Confirm.js';




const App: React.FC = () => {

  const [searchResults, setSearchResults] = useState<PropertyDetails[]>([])

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchPage searchResults={searchResults} setSearchResults={setSearchResults} />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path='/results' element={<SearchResults searchResults={searchResults} setSearchResults={setSearchResults}/>} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
