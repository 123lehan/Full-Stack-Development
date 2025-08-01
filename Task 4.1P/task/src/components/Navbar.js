import React from 'react';
import { Menu, Container, Input } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <div style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <Menu inverted borderless style={{ padding: '0.8rem 1rem' }}>
        <Container fluid>
          <Menu.Item header style={{ fontSize: '1.3rem', paddingLeft: '1rem' }}>
            DEV@Deakin
          </Menu.Item>

          <Menu.Item name="Home" style={{ marginLeft: '2rem' }} />
          <Menu.Item name="Articles" />
          <Menu.Item name="Tutorials" />
          <Menu.Item name="Contact" />

          <Menu.Menu position="right">
            <Menu.Item>
              <Input
                icon="search"
                placeholder="Search..."
                style={{ width: '200px' }}
              />
            </Menu.Item>
            <Menu.Item name="Post" />
            <Menu.Item name="Login" />
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default Navbar;

