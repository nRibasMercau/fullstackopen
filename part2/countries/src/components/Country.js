import Button from './Button'

const Country = ({ countryName, countryFlag, handleClick }) => {
    const countryStyle = {
        fontFamily: 'sans-serif', 
        padding: 6
    }

    return (
        <div style={countryStyle}>
            {countryFlag} {countryName} <Button handleClick={() => handleClick(countryName)} text='show' />
        </div>
    )
}

export default Country