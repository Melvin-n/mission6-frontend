import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import InputField from './components/InputField';
import './styles.css'

import Booking from './pages/Booking.js';
import 'bootstrap/dist/css/bootstrap.min.css';



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
      </BrowserRouter>
    </div>
  );
}

export default App;
