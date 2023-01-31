import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import Countries from './components/Countries'
import CountryHighlight from './components/CountryHighlight'

import countriesService from './services/countries'

const App = () => {
  const [filterName, setFilterName] = useState('')
  const [countries, setCountries] = useState([])
  
  const titleStyle = {
    fontFamily: 'sans-serif', 
    fontSize: 56
  }

  useEffect(() => {
    countriesService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const handleFilterName = (event) => {
    setFilterName(event.target.value)
  }

  let countryComponent = <Countries countries={countries} filterName={filterName} handleClick={setFilterName} />
  if (countries.filter(country => country.name.common.toLowerCase().startsWith(filterName.toLowerCase())).length === 1) {
    countryComponent = <CountryHighlight country={countries.filter(country => country.name.common.toLowerCase().startsWith(filterName.toLowerCase()))[0]} />
  }
  return (
    <div className='app'>
      <h1 style={titleStyle}>Countries</h1>
      <Filter filterName={filterName} handleFilterName={handleFilterName} />
      {countryComponent}
    </div>
  )
}

export default App;
