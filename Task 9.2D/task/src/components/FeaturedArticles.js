import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const articles = [
  {
    title: 'Understanding React',
    description: 'e.g., React OR Vue',
    author: 'Jane Doe',
    rating: 5,
    image: 'https://picsum.photos/200?1',
  },
  {
    title: 'Node.js Basics',
    description: 'e.g., NodeJS',
    author: 'John Smith',
    rating: 5,
    image: 'https://picsum.photos/200?2',
  },
  {
    title: 'Mastering React Hooks',
    description: 'e.g., React Hooks',
    author: 'Alex Lee',
    rating: 5,
    image: 'https://picsum.photos/200?3',
  },
];

const FeaturedArticles = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>Featured Articles</h2>
      <Card.Group itemsPerRow={3} stackable>
        {articles.map((article, index) => (
          <Card key={index}>
            <Image src={article.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{article.title}</Card.Header>
              <Card.Meta>
                <span>{article.description}</span>
              </Card.Meta>
              <Card.Description>
                <Icon name="star" color="yellow" /> {article.rating} by {article.author}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button className="ui button">See all articles</button>
      </div>
    </div>
  );
};

export default FeaturedArticles;
