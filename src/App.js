import React from 'react'
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import CountryDetail from './components/CountryDetail'

import {Link, Routes, Route} from 'react-router-dom'

function App() {
    
    const [countryList, setCountryList] = React.useState([])
    React.useEffect(()=>{
            fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => {
                setCountryList(data)
            })
        },[])

  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home countryList={countryList}/>}></Route>
        <Route path= "/:countryId" element={<CountryDetail/>}></Route>
      </Routes>
      
    </React.Fragment>
    

  )
}

export default App;
