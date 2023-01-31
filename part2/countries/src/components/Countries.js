import Country from './Country'

const Countries = ({ countries, filterName, handleClick }) => {
    if (filterName === '') {
        return <div></div>
    }
    return (
        <div>
            {countries
                .filter(country => country.name.common.toLowerCase().startsWith(filterName.toLowerCase()))
                .map(country => <Country key={country.ccn3} countryName={country.name.common} countryFlag={country.flag} handleClick={handleClick} />)
            }
        </div>
    )
}

export default Countries