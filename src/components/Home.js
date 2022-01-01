import React from 'react'
import SearchBar from './SearchBar'
import Flag from './Flag'
import {Link} from 'react-router-dom'
import {Context} from './ThemeContext'

function Home(props){
    const {countryList} = props
    const [searchQuery, setSearchQuery] = React.useState('')
    const [searchRegion, setSearchRegion] = React.useState('')

   const {theme} = React.useContext(Context)
    function handleQuery(event){
        setSearchQuery(event.target.value)
    }
    function handleRegionSelect(value){
        setSearchRegion(value)
    }
    const flagItems = countryList.filter(country=>country.name.includes(searchQuery) && country.region.includes(searchRegion)).map(country =>{
        return(   
                <Link 
                    key={country.name}
                    to={`/${country.name}`}>
                <Flag 
                    flagImg={country.flags.svg}
                    countryName ={country.name}
                    population = {country.population} 
                    region = {country.region}
                    capital = {country.capital}
                    />
                </Link>)
    })
    return(
        <main className={`search-and-flags main-content ${theme}`} role="main content">
            <SearchBar searchQuery = {searchQuery} handleQuery = {handleQuery}
                handleRegionSelect = {handleRegionSelect}/>
            <div className="country-collections">
            {flagItems}
            </div>
        </main>
    )
}
export default Home