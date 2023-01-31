const Filter = ({ filterName, handleFilterName }) => {
    return (
        <div>
            filter names <input value={filterName} onChange={handleFilterName} />
        </div>
    )
}

export default Filter