import { useState } from 'react'
import countryService from './services/countries'
import { useEffect } from 'react'
import CountryList from './components/CountryList'
import Filter from './components/Filter'

const App = () => {

  const [allCountries, setAllCountries] = useState(null)
  const [filterName, setFilterName] = useState("")

  useEffect(() => {
    countryService
      .getAll()
      .then(response => setAllCountries(response))
  }, [])

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value)
  }

  const setFilterNameChange = (filterName) => {
    setFilterName(filterName)
  }

  const handleFilterCountries = () => {
    setFilterCountries(allCountries.find(country => country.name.common.includes(filterName)))
  }

  const countriesToShow = filterName === '' ? allCountries : allCountries.filter(country => country.name.common.toLowerCase().includes(filterName.toLowerCase()))

  if (!allCountries) return null

  return (
    <div>
      <Filter filterName={filterName} handleFilterNameChange={handleFilterNameChange} />
      {countriesToShow.length > 0 ? <CountryList countriesToShow={countriesToShow} handleFilterNameChange={handleFilterNameChange} /> : null}
    </div>
  )
}

export default App
