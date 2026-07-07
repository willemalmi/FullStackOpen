import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }, [notification])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    //const nameExists = persons.some(person => person.name === newName)
    const nameExists = persons.find(person => person.name === personObject.name)
    if (nameExists) {
      //alert(`${newName} is already added to phonebook`)
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(nameExists.id, personObject)
          .then(response => {
            setPersons(persons.map(person => person.id !== nameExists.id ? person : personObject))
            setNewName('')
            setNotification({ 'type': 'success', 'message': `Updated phone number ${response.number} to ${response.name}` })
          })
      }
    }
    else {
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response))
          setNewName('')
          setNotification({ 'type': 'success', 'message': `Added ${response.name}` })
        })
    }

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value)
  }

  const handleDeleteButton = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      personService
        .deletePerson(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== response.id))
          setNotification({ 'type': 'success', 'message': `Removed ${response.name}` })
        })
    }
  }

  const handleNotification = (notification) => {
    setNotificationMessage(message)
    notificationType === "error" ? setNotificationType("error") : setNotificationType("success")
    setTimeout(() => {
      setNotificationMessage(null)
      setNotificationType(null)
    }, 5000)
  }

  const personsToShow = filterName === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter filterName={filterName} handleFilterNameChange={handleFilterNameChange} />

      <h2>Add new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleDeleteButton={handleDeleteButton} />
    </div>
  )

}

export default App