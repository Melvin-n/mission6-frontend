import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import './styles/styles.css'
import SearchPage from './pages/SearchPage';

import Booking from './pages/Booking.js';




const App: React.FC = () => {

  const [searchValue, setSearchValue] = useState<string>('')


  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
