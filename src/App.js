import { useState } from "react";
import UserInput from "./Components/UserInput";
import List from "./Components/List";
import Search from "./Components/Search";
import {WordFound} from "./Components/WordFound";
import {WordNotFoud} from "./Components/WordNotFoud";

function App() {
  const [userInput ,setUserInput] = useState(null) ;
  const [list, setList] = useState([]) ;
  const [userSearch, setUserSearch] = useState(null) ; 
  const [wordFound, setWordFound] = useState(undefined) ;
  const [wordPosition, setWordPosition] = useState(undefined) ;  

  const handleAddChange = (event) => {
      setUserInput(event.target.value) ;
  }

  const handleAdd = () => {
    const checkIfWord = /\w/g
    if (!userInput.match(checkIfWord)) return ; 
    const whiteSpace = /^\s+|\s+$/g;
    const word = userInput.replace(whiteSpace, '') ;  
    const found = list.indexOf(word) ;
    if(found !== -1) return ;
    const newList = list.concat(word);
    setList(newList) ;  
  }

  const handleSearchChange = (event) => {
    setUserSearch(event.target.value) ;
  } 

  const handleSearch = () => {
    const checkIfWord = /\w/g
    if (!userSearch.match(checkIfWord)) return ;
    const whiteSpace = /^\s+|\s+$/g;
    const word = userSearch.replace(whiteSpace, '') ;  
    const found = list.indexOf(word) ;
    if ( found !== -1) {
      setWordPosition(found) ;
      setWordFound(true) ;
    }
    else {
      setWordFound(false);
    }
  }

  const handleNotFoundAdd = () => {
    const checkIfWord = /\w/g
    if (!userSearch.match(checkIfWord)) return ;
    const whiteSpace = /^\s+|\s+$/g;
    const word = userSearch.replace(whiteSpace, '') ;  
    const newList = list.concat(word);
    setList(newList) ;
    setWordFound(undefined) ; 
  }
  return (
    <div className="App">
     <h1>Dictionary-React</h1>
     {wordFound === true ? <WordFound position = {wordPosition}/> : wordFound === false ?  <WordNotFoud add = {handleNotFoundAdd} word = {userSearch}/> : <></> }
     <UserInput add = {handleAdd} addChange = {handleAddChange}/>
     <Search  searchChange = {handleSearchChange} search = {handleSearch} />
     <List content = {list} />
    </div>
  );
}

export default App;
