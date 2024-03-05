import React, { Fragment, useState, useEffect } from 'react';
import './App.css';

// components
import { Row, Col } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import CharacterCard from './components/CharacterCard';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [characters, setCharacters] = useState([])

  const getCharacters = async() => {
    try {
      const response = await fetch('http://localhost:5000/characters')
      const charactersJSON = await response.json()
      setCharacters(charactersJSON);
      setIsLoading(false)
    } catch (err) {
      console.error(err.message);
    }
  }
  
  useEffect( () => {
    getCharacters();
  }, [])
  
  console.log(characters)
  return (
    isLoading ? <div className='flexContainer'><Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
      </Spinner></div> :
      <Fragment>
        <Container>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand href="#">Disney Character Ideas</Navbar.Brand>
        </Navbar>
        <Row>
          
            {characters.map( character => (
              <CharacterCard key={character.id} characterData={character}/>
            ))} 
          
        </Row>  
        </Container>
      </Fragment>
  );
}

export default App;
