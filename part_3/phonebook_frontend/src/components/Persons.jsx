const Persons = ({ personsToShow, handleDeleteButton }) => {
    return (
        <table>
            <tbody>
                {personsToShow.map(person => <tr key={person.name}><td>{person.name}</td><td>{person.number}</td><td><button onClick={() => handleDeleteButton(person.id, person.name)}>Delete</button></td></tr>)}
            </tbody>
        </table>
    )
}

export default Persons