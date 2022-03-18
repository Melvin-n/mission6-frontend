import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import './styles.css'
import './sass/index.scss'



const App: React.FC = () => {

  const [searchValue, setSearchValue] = useState<string>('')


  return (
    <div className='App'>
      <span>Quick sort</span>
      <InputField  searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  );
}

export default App;
