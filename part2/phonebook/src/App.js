import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [notificationType, setNotificationType] = useState('notification')
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterName = (event) => {
    setFilterName(event.target.value)
  }

  const addNumber = (event) => {
    event.preventDefault()

    if(persons.find(element => element.name === newName)) {
      const person = persons.find(p => p.name === newName)
      const changedPerson = { ...person, number: newNumber }
      const changedPersonId = person.id
      //const id = persons.find(element => element.name === newName).id
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(changedPersonId, changedPerson)
          .then(updatedPerson => {
            setPersons(persons.map(p => p.id !== changedPersonId ? p : changedPerson))
            setNotificationType('notification')
            setNotificationMessage(`Number for ${newName} updated.`)
            setTimeout(() => {
              setNotificationMessage(null)
            }, 5000)
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            setNotificationType('error')
            setNotificationMessage(`Person ${newName} already removed from server.`)
            setTimeout(() => {
              setNotificationMessage(null)
            }, 5000)
            setNewName('')
            setNewNumber('')
          })
      }
      setNewName('')
      setNewNumber('')
      return null
    }
    const nameObject = {
      name: newName, 
      number: newNumber
    } 
    personService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNotificationType('notification')
        setNotificationMessage(`${newName} added to phonebook.`)
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
        setNewName('')
        setNewNumber('')
      })
  }

  const removeNumber = (id) =>  {
    const name = persons.find(person => person.id === id).name
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .deletePerson(id)
        .then(updatedPersons => {
          setPersons(updatedPersons)
        })
    }
  }
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification notificationType={notificationType} notificationMessage={notificationMessage}/>
      <Filter 
        filterName={filterName} 
        handleFilterName={handleFilterName} 
      />
      <h3>add a new number</h3>
      <PersonForm 
        addNumber={addNumber} 
        newName={newName} 
        handleNewName={handleNewName} 
        newNumber={newNumber} 
        handleNewNumber={handleNewNumber}
      />
      <h3>Numbers</h3>
      <Persons 
        persons={persons} 
        filterName={filterName} 
        removeNumber={removeNumber}
      />
    </div>
  )
}

export default App
