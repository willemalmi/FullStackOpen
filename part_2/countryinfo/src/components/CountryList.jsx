import CountryCommon from "./CountryCommon"
import CountryDetail from "./CountryDetail"

const CountryList = ({ countriesToShow }) => {
    if (countriesToShow && countriesToShow.length >= 1) {
        if (countriesToShow.length >= 10) {
            return <div>Too many matches, specify another filter</div>
        }
        else if (countriesToShow.length < 10 && countriesToShow.length > 1) {
            return countriesToShow.map(country => <CountryCommon key={country.name.common} country={country} />)
        }
        else return <CountryDetail country={countriesToShow[0]} />

    }
    else return null
}

export default CountryList