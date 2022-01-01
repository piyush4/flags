import React from "react"
import {Context} from './ThemeContext'
function Flag(props){

    const {theme} = React.useContext(Context)

    const {flagImg, countryName, population, region, capital} = props
    return(
    <div className={`countryInfo ${theme} ${theme}-element`}>
        <img src={flagImg} alt={`${countryName} flag`}/>
        <div className="country-name-pop">
            <h2>{countryName}</h2>
            <p><span className="bold">Population</span>: {population}</p>
            <p><span className="bold">Region:</span> {region}</p>
            <p><span className="bold">Capital:</span> {capital}</p>
        
        </div>
        
    </div>)
}
export default Flag