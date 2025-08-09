import React from 'react';
import { Card, Rating, Image } from 'semantic-ui-react';
import './TutorialCard.css';

const TutorialCard = ({ tutorial }) => {
  return (
    <Card className="tutorial-card">
      <Image 
        src={tutorial.image} 
        wrapped 
        className="tutorial-image"
        alt={tutorial.name}
      />
      <Card.Content>
        <Card.Header className="tutorial-title">{tutorial.name}</Card.Header>
        <Card.Description className="tutorial-description">
          {tutorial.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra className="tutorial-footer">
        <Rating 
          icon='star' 
          defaultRating={tutorial.rating} 
          maxRating={5} 
          disabled 
          size='mini'
        />
        <span className="rating-text">{tutorial.rating}</span>
        <span className="username">{tutorial.username}</span>
      </Card.Content>
    </Card>
  );
};

export default TutorialCard; 