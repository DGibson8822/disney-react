import React, { Fragment, useState, useEffect } from 'react';
import './App.css';

// components
import CharacterCard from './components/CharacterCard';


function App() {
  const [characters, setCharacters] = useState([])

  const getCharacters = async() => {
    try {
      const response = await fetch('http://localhost:5000/characters')
      const charactersJSON = await response.json()
      setCharacters(charactersJSON);
    } catch (err) {
      console.error(err.message);
    }
  }
  
  useEffect( () => {
    getCharacters();
  }, [])
  
  console.log(characters)
  return (
    <Fragment>
      <div className="container">
        {characters.map( character => (
          <CharacterCard characterData={character}/>
        ))}
        
      </div>
    </Fragment>
  );
}

export default App;
