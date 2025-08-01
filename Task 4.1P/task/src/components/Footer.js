import React from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#1b1c1d', color: 'white', padding: '3rem 0', marginTop: '3rem' }}>
      <Container>
        <Grid columns={3} stackable textAlign="center" divided>
          <Grid.Row>
            <Grid.Column>
              <h4>About</h4>
              <p style={{ maxWidth: '250px', margin: '0 auto' }}>
                DEV@Deakin is a student community for learning and sharing IT knowledge.
              </p>
            </Grid.Column>

            <Grid.Column>
              <h4>Links</h4>
              <p>Home | Articles | Tutorials | Contact</p>
            </Grid.Column>

            <Grid.Column>
              <h4>Connect</h4>
              <div>
                <Icon name="facebook" size="large" link />
                <Icon name="twitter" size="large" link />
                <Icon name="linkedin" size="large" link />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} DEV@Deakin. All rights reserved.
        </p>
      </Container>
    </div>
  );
};

export default Footer;

