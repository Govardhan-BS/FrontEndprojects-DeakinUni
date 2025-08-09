import React from 'react';
import { Card, Rating, Image } from 'semantic-ui-react';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  return (
    <Card className="article-card">
      <Image 
        src={article.image} 
        wrapped 
        className="article-image"
        alt={article.name}
      />
      <Card.Content>
        <Card.Header className="article-title">{article.name}</Card.Header>
        <Card.Description className="article-description">
          {article.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra className="article-footer">
        <Rating 
          icon='star' 
          defaultRating={article.rating} 
          maxRating={5} 
          disabled 
          size='mini'
        />
        <span className="rating-text">{article.rating}</span>
        <span className="author-name">{article.author}</span>
      </Card.Content>
    </Card>
  );
};

export default ArticleCard; 