import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {Context} from './ThemeContext'
function CountryDetail(props){
    const {countryId}= useParams()
    const [country, setCountry] = React.useState({currencies:[],borders:[], flags:{png:'', svg:''}})
    const [borderingCountries, setBorderingCountries] = React.useState([])
    const [currencies, setCurrencies] = React.useState([])

    const {theme} = React.useContext(Context)
    console.log(countryId)
    React.useEffect(()=>{
        fetch(`https://restcountries.com/v2/alpha/${countryId}`)
        .then(res =>res.json())
        .then(data => setCountry(data))
    },[])
    
    React.useEffect(()=>{
        if(country.borders){
            country.borders.map(borderCode =>{
            fetch(`https://restcountries.com/v2/alpha/${borderCode}`)
            .then(res=>res.json())
            .then(({name}) =>setBorderingCountries(prevBorderingCountries=>[name, ...prevBorderingCountries]))
            })
        }
        if(country.currencies){
            setCurrencies(country.currencies.map(currency =>currency.name).join(", "))
        }
        
    },[country])

    
    
    const listBorderingCountries = borderingCountries.map(borderingCountry =>{
        return(<p className={`bordering-countries ${theme} ${theme}-element`} key={borderingCountry}>{borderingCountry}</p>)
    })
    
    const classToAdd = listBorderingCountries.length === 0 ? "hidden":""

    return (    
            <main className={`${theme} main-content`} role="main">
                <Link to="/"><p className={`link-container`}><span className={`${theme} back-link ${theme}-element`}><i className="fas fa-arrow-left" aria-hidden="true"></i> &nbsp; Back</span></p></Link>
                <div className="country-detail">
                    <img src={country.flags.svg} alt={`${country.name} flag`}/>
                    <div className="country-text-detail">    
                        
                        <h2>{country.name}</h2>
                        <div className="text-details">
                            
                            <div className="demographic-detail">
                                <p><span className="bold">Native: </span>{country.nativeName}</p>
                                <p><span className="bold">Population: </span>{country.population}</p>
                                <p><span className="bold">Region: </span>{country.region}</p>
                                <p><span className="bold">Sub Region: </span>{country.subregion}</p>
                                <p><span className="bold">Capital: </span>{country.capital}</p>
                            </div>

                            <div className="currency-language">
                                <p><span className="bold">Top Level Domain: </span>{country.topLevelDomain}</p>
                                <p><span className="bold">Currencies: </span>
                                {currencies.length ===0 ? "None" : currencies}</p>
                            </div>
                            
                            
                            <div className={`section-bordering-countries ${classToAdd}`}>
                                <h3 className="border-heading">Border Countries: </h3>
                                <div className="list-bordering-countries">{listBorderingCountries}</div>
                                
                                
                            </div>
                        
                        </div>  
                        
                    </div>
                </div>
            </main>)
}

export default CountryDetail