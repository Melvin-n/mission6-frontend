import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import './styles/styles.css'
import './sass/index.scss'
import SearchPage from './pages/SearchPage';
import PropertyView from './pages/PropertyView';




const App: React.FC = () => {

  const [searchValue, setSearchValue] = useState<string>('')


  return (
    <div className='App'>
      {/* <SearchPage /> */}
      <PropertyView />
    </div>
  );
}

export default App;
