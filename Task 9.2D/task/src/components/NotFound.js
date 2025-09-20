import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container text style={{ padding: '3rem 0' }}>
      <Header as="h1">Page Not Found</Header>
      <p>That route doesn’t exist. Head back to Home or view our Plans.</p>
      <Button as={Link} to="/" basic>Home</Button>
      <Button as={Link} to="/plans" color="green">View Plans</Button>
    </Container>
  );
}
