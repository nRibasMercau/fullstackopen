import Weather from './Weather'

const CountryHighlight = ({ country }) => {
    const countryHighlightStyle = {
        fontFamily: 'sans-serif'
    }
    const countryHighlightInfoStyle = {
        iframeStyle: {
            border: 1, 
            borderStyle: 'solid',
            borderColor: 'black'
        }
    }

    return (
        <div style={countryHighlightStyle}>
            <h1>{country.name.common}</h1>
            <img src={country.flags.png} alt={`${country.name.common}-flag`}/>
            <div style={countryHighlightInfoStyle}>
                <p>Official name: {country.name.official}</p>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area}</p>
                <p>Population: {country.population}</p>
                <p>Languages:</p> 
                <ul>
                    {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
                </ul>
                <p><a href={country.maps.googleMaps}>Google maps</a></p>
                <Weather location={country.capital} />
            </div> 
        </div>
        
    )
} 

export default CountryHighlight

