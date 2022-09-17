const Filter = ({filter, handleChange}) => {
    return (
        <label>
            Find conacts by name
            <input
                type="text"
                name="filter"
                value = {filter}
                onChange={handleChange}
            />
        </label>
    )
}

export default Filter;