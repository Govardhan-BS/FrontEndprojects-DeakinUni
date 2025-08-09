import React from 'react';
import { Container, Menu, Input, Button } from 'semantic-ui-react';
import './Header.css';

const Header = () => {
  return (
    <Menu fixed='top' inverted className="header-menu">
      <Container>
        <Menu.Item header className="logo">
          DEV@Deakin
        </Menu.Item>
        
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input 
              placeholder='Search...' 
              className="search-input"
              icon='search'
              iconPosition='left'
            />
          </Menu.Item>
          <Menu.Item>
            <Button basic inverted>Post</Button>
          </Menu.Item>
          <Menu.Item>
            <Button basic inverted>Login</Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Header; 