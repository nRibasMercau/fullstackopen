import Person from './Person'

const Persons = ({ persons, filterName, removeNumber }) => {
    return (
        <div>
            {persons
                .filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
                //.map(person => <p key={person.name}>{person.id} {person.name} {person.number}</p>)
                .map(person => <Person key={person.id} person={person} removeNumber={removeNumber}/>)
            }
        </div>
    )
}

export default Persons