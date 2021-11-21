function Search(props) {
    return (
        <div>
            <input placeholder = "enter your word here" onChange = {props.searchChange}></input>
            <button type = "submit" onClick = {props.search} > Search</button>
        </div>
    )
}

export default Search
