import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import './styles/styles.css'
import './sass/index.scss'
import SearchPage from './pages/SearchPage';




const App: React.FC = () => {

  const [searchValue, setSearchValue] = useState<string>('')


  return (
    <div className='App'>
      <SearchPage />
    </div>
  );
}

export default App;
