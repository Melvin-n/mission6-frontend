import { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import './styles/styles.css'
import './sass/index.scss'
import SearchPage from './pages/SearchPage';
import PropertyView from './pages/PropertyView';

import Booking from './pages/Booking.js';




const App: React.FC = () => {

  const [searchValue, setSearchValue] = useState<string>('')

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
          <Route path='/' element={<SearchPage />} />
          <Route path="/booking" element={<Booking />} />
          { !isLoading ? <Route path="/view" element={<PropertyView Property={properties[0]} List={properties}/>} /> :null }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
