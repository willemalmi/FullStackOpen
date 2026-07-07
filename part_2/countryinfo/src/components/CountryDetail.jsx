import Weather from './Weather'

const CountryDetail = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital}</p>
            <p>Area {country.area}</p>

            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
            </ul>

            <img src={country.flags.svg} alt={country.flags.alt} width={200} />

            <h2>Weather in {country.capital}</h2>
            <Weather coordinates={country.capitalInfo.latlng} />
        </div >
    )
}

export default CountryDetail