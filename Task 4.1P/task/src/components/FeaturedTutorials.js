import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const tutorials = [
  {
    title: 'Intro to HTML',
    description: 'e.g., Web Basics',
    author: 'Emily Rose',
    rating: 5,
    image: 'https://picsum.photos/200?4',
  },
  {
    title: 'CSS Fundamentals',
    description: 'e.g., Styling Web Pages',
    author: 'Michael Chan',
    rating: 4,
    image: 'https://picsum.photos/200?5',
  },
  {
    title: 'Getting Started with JavaScript',
    description: 'e.g., JS Basics',
    author: 'Sophia Turner',
    rating: 5,
    image: 'https://picsum.photos/200?6',
  },
];

const FeaturedTutorials = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>Featured Tutorials</h2>
      <Card.Group itemsPerRow={3} stackable>
        {tutorials.map((tutorial, index) => (
          <Card key={index}>
            <Image src={tutorial.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{tutorial.title}</Card.Header>
              <Card.Meta>
                <span>{tutorial.description}</span>
              </Card.Meta>
              <Card.Description>
                <Icon name="star" color="yellow" /> {tutorial.rating} by {tutorial.author}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button className="ui button">See all tutorials</button>
      </div>
    </div>
  );
};

export default FeaturedTutorials;
