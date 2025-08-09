import React from 'react';
import { Container, Grid, Button, Header } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';
import TutorialCard from './TutorialCard';
import './FeaturedTutorials.css';

const FeaturedTutorials = () => {
  const tutorials = [
    {
      id: 1,
      name: faker.lorem.words(3),
      description: "e.g., 356",
      image: "https://picsum.photos/300/200?random=5",
      rating: 5,
      username: faker.internet.userName()
    },
    {
      id: 2,
      name: faker.lorem.words(3),
      description: "e.g., React Router",
      image: "https://picsum.photos/300/200?random=6",
      rating: 4.9,
      username: faker.internet.userName()
    },
    {
      id: 3,
      name: faker.lorem.words(3),
      description: "e.g., Express",
      image: "https://picsum.photos/300/200?random=7",
      rating: 5,
      username: faker.internet.userName()
    }
  ];

  return (
    <Container className="featured-tutorials">
      <Header as='h2' textAlign='center' className="section-title">
        Featured Tutorials
      </Header>
      
      <Grid columns={3} stackable>
        {tutorials.map((tutorial) => (
          <Grid.Column key={tutorial.id}>
            <TutorialCard tutorial={tutorial} />
          </Grid.Column>
        ))}
      </Grid>
      
      <div className="button-container">
        <Button primary size='large' className="see-all-button">
          See all tutorials
        </Button>
      </div>
    </Container>
  );
};

export default FeaturedTutorials; 