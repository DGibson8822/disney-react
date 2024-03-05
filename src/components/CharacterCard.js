import React, { Fragment } from 'react';
import Avatar from 'avataaars'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CharacterCard = (props) => {
    return (
        <Fragment>
            <Card style={{ width: '18rem' }}>
            <Avatar
          style={{width: '100%', height: '200px'}}
          avatarStyle = {props.characterData["avatar_style"]}
          topType = {props.characterData["top_type"]}
          accessoriesType = {props.characterData["accessories_type"]}
          hairColor = {props.characterData["hair_color"]}
          facialHairType = {props.characterData["facial_hair_type"]}
          clotheType = {props.characterData["clothe_type"]}
          clotheColor = {props.characterData["clothe_color"]}
          eyeType = {props.characterData["eye_type"]}
          eyebrowType = {props.characterData["eyebrow_type"]}
          mouthType = {props.characterData["mouth_type"]}
          skinColor = {props.characterData["skin_color"]}
        />
              <Card.Body>
                <Card.Title className="text-center"> {props.characterData["character_name"]} </Card.Title>
                <Card.Text>
                
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                
               <ListGroup.Item>
               {props.characterData["character_type"]}
                </ListGroup.Item>

                <ListGroup.Item>
                {props.characterData["character_description"]}
                </ListGroup.Item>
                
              </ListGroup>
              <Card.Body>
              <Button variant="primary" type="submit" style={{width: "100%"}}>
                     Edit
                </Button>
                <Button variant="danger" type="submit" style={{width: "100%"}}>
                     Delete
                </Button>
                
              </Card.Body>
            </Card>
        </Fragment>

    )
}

export default CharacterCard;