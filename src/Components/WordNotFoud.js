export const WordNotFoud = (props) => {
    return (
        <div>
             <h5> Word not found</h5>
             <p> Click on add if you want to add the word "{props.word}" to the list </p>
             <button type = "submit" onClick = {props.add }>Add </button>
        </div>
    )
}
