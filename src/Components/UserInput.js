function UserInput(props) {
    return (
        <div>
            <input placeholder = "enter your word here" onChange = {props.addChange}></input>
            <button type = "submit" onClick = {props.add} > Add word</button>
        </div>
    )
}

export default UserInput ;