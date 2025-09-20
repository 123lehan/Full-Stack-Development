import React from 'react';
import { Container, Grid, Segment, Header, List, Button, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const price = (amount) => <Header as="h2" style={{marginTop: 0}}>${amount}<span style={{fontSize:14}}>/mo</span></Header>;

const Bullet = ({ children }) => (
  <List.Item>
    <Icon name="check circle" color="green" style={{ marginRight: 8 }} />
    {children}
  </List.Item>
);

const Plans = () => {
  return (
    <div className="plans-wrap">
      <Container className="page">
        <Header as="h1" textAlign="center" style={{ marginBottom: 30 }}>
          Choose Your Plan
        </Header>

        <Grid stackable columns={2}>
          <Grid.Column>
            <Segment raised className="card-soft">
              <Label color="grey" ribbon>Free</Label>
              {price(0)}
              <List relaxed>
                <Bullet>Browse articles & tutorials</Bullet>
                <Bullet>Basic search</Bullet>
                <Bullet>Community access</Bullet>
              </List>
              <Button as={Link} to="/" basic>Continue Free</Button>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment raised className="card-soft" color="green">
              <Label color="green" ribbon>Most Popular</Label>
              {price(9)}
              <List relaxed>
                <Bullet>Custom messages & banners</Bullet>
                <Bullet>Themes & content controls</Bullet>
                <Bullet>Analytics dashboard</Bullet>
                <Bullet>Priority support</Bullet>
              </List>
              <Button as={Link} to="/checkout" color="green">Get Premium</Button>
              <Button as={Link} to="/plans/premium" basic style={{ marginLeft: 8 }}>
                View Details
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default Plans;

