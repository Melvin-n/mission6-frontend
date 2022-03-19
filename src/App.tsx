import React, { useState } from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import InputField from './components/InputField';
import './styles.css'

import Booking from './pages/Booking.js';



const App: React.FC = () => {

  const [searchValue, setSearchValue] = useState<string>('')


  return (
    <div className='App'>
      <span>Quick sort</span>
      <InputField  searchValue={searchValue} setSearchValue={setSearchValue} />

      <BrowserRouter>
        <Routes>
          <Route path="/booking" element={<Booking />} />
        </Routes>
        {/* <button>
          <Link to="/booking">Book a viewing</Link>
        </button> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
