import React from "react"
import {Context} from "./ThemeContext"

function SearchBar(props){
    const {searchQuery, handleQuery, handleRegionSelect} = props
    const [selectedRegion, setSelectedRegion] = React.useState('Filter by Region') 
    
    const {theme} = React.useContext(Context)

    function handleSelection(event){
        setSelectedRegion(event.target.value)
        handleRegionSelect(event.target.value ==="Filter by Region"? '' : event.target.value)
    }
    return(
        <form className="search-and-filter"> 
            <input 
                className={`search-bar ${theme} ${theme}-element`}
                autoComplete="off"
                type="text"
                name="search"
                value={searchQuery}
                onChange = {(event)=>handleQuery(event)}
                placeholder="&#xf002; &nbsp; &nbsp; &nbsp; Search for a country"
                />
            <div className="select">
                <select 
                className={`filter ${theme} ${theme}-element`}
                name="filter"
                value={selectedRegion}
                onChange={handleSelection}>
                    <option value='Filter by Region'>Filter by Region</option>
                    <option value='Africa'>Africa</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='America'>America</option>
                    <option>Oceania</option>
                </select>
            </div>
        </form>
    )
}

export default SearchBar