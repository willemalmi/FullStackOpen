const CountryCommon = ({ country, handleFilterNameChange }) => {
    return (
        <div>{country.name.common} <button onClick={() => handleFilterNameChange({ target: { value: country.name.common } })}>Show</button></div>
    )
}

export default CountryCommon