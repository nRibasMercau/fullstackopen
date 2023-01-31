const Filter = ({ filterName, handleFilterName }) => {
    const filterStyle = {
        fontFamily: 'sans-serif', 
        padding: 6, 
        fontSize: 'large'
    }

    return (
        <div style = {filterStyle}>
            find country: <input value={filterName} onChange={handleFilterName} />
        </div>
    )
}

export default Filter