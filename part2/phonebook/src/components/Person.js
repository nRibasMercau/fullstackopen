import Button from './Button'
import personService from '../services/persons'

const Person = ({ person, removeNumber }) => {
    return (
        <>
            <p key={person.id}>{person.name} {person.number} <Button handleClick={() => removeNumber(person.id)} text='delete' /></p>
        </>
    )
}

export default Person