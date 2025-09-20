import React from 'react';
import { Menu, Container, Input } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <Menu inverted borderless style={{ padding: '0.8rem 1rem' }}>
        <Container fluid>
          <Menu.Item header style={{ fontSize: '1.3rem', paddingLeft: '1rem' }}>
            DEV@Deakin
          </Menu.Item>

          <Menu.Item as={Link} to="/" name="Home" active={pathname === '/'} style={{ marginLeft: '2rem' }} />
          <Menu.Item as={Link} to="/plans" name="Plans" active={pathname.startsWith('/plans')} />
          <Menu.Item name="Articles" />
          <Menu.Item name="Tutorials" />
          <Menu.Item name="Contact" />

          <Menu.Menu position="right">
    <Menu.Item>
    <Input icon="search" placeholder="Search..." style={{ width: '200px' }} />
  </Menu.Item>
  <Menu.Item as={Link} to="/post" name="Post" active={pathname.startsWith('/post')} />
  <Menu.Item name="Login" />
</Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default Navbar;



