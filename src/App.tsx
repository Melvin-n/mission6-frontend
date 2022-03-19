import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import './styles.css'

import Booking from './pages/Booking';



const App: React.FC = () => {

  const [searchValue, setSearchValue] = useState<string>('')


  return (
    <div className='App'>
      <span>Quick sort</span>
      <InputField  searchValue={searchValue} setSearchValue={setSearchValue} />
      <Booking />
    </div>
  );
}

export default App;
