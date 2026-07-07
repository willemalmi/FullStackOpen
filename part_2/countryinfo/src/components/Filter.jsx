const Filter = ({ filterName, handleFilterNameChange }) => {
    return (
        <div>
            Find countries <input value={filterName} onChange={handleFilterNameChange} />
        </div>
    )
}

export default Filter