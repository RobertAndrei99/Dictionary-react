function List(props) {
    const list = props.content ; 
    return (
       <div>
           { list.map( (element, index) => (
               <div key = {index}> {index} : {element}</div>
           ))}
       </div>
    )
}

export default List

