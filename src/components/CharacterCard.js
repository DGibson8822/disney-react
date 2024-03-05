import React, { Fragment } from 'react';
import Avatar from 'avataaars'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CharacterCard = () => {
    return (
        <Fragment>
            <Card style={{ width: '18rem' }}>
            <Avatar
          style={{width: '100%', height: '100px'}}
          avatarStyle='Circle'
          topType='LongHairMiaWallace'
          accessoriesType='Prescription02'
          hairColor='BrownDark'
          facialHairType='Blank'
          clotheType='Hoodie'
          clotheColor='PastelBlue'
          eyeType='Happy'
          eyebrowType='Default'
          mouthType='Smile'
          skinColor='Light'
        />
              <Card.Body>
                <Card.Title> Name </Card.Title>
                <Card.Text>
                
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                
               <ListGroup.Item>
                    Type
                </ListGroup.Item>

                <ListGroup.Item>
                    Description
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