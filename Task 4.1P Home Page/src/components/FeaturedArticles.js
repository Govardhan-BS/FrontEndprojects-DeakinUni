import React from 'react';
import { Container, Grid, Button, Header } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';
import ArticleCard from './ArticleCard';
import './FeaturedArticles.css';

const FeaturedArticles = () => {
  const articles = [
    {
      id: 1,
      name: faker.lorem.words(3),
      description: "e.g., React OR Vue",
      image: "https://picsum.photos/300/200?random=2",
      rating: 5,
      author: faker.person.fullName()
    },
    {
      id: 2,
      name: faker.lorem.words(3),
      description: "e.g., NodeJS",
      image: "https://picsum.photos/300/200?random=3",
      rating: 5,
      author: faker.person.fullName()
    },
    {
      id: 3,
      name: faker.lorem.words(3),
      description: "e.g., React Hooks",
      image: "https://picsum.photos/300/200?random=4",
      rating: 5,
      author: faker.person.fullName()
    }
  ];

  return (
    <Container className="featured-articles">
      <Header as='h2' textAlign='center' className="section-title">
        Featured Articles
      </Header>
      
      <Grid columns={3} stackable>
        {articles.map((article) => (
          <Grid.Column key={article.id}>
            <ArticleCard article={article} />
          </Grid.Column>
        ))}
      </Grid>
      
      <div className="button-container">
        <Button primary size='large' className="see-all-button">
          See all articles
        </Button>
      </div>
    </Container>
  );
};

export default FeaturedArticles; 