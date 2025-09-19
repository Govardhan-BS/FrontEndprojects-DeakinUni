import React from 'react';
import { Container, Menu, Input, Button, Image, Icon } from 'semantic-ui-react';
import './Header.css';

const Header = () => {
  return (
    <Menu fixed='top' inverted className="header-menu">
      <Container>
        <Menu.Item header className="logo">
          <div className="logo-container">
            <Image 
              src="/images/deakin-logo.png" 
              size="mini" 
              className="logo-image"
              alt="Deakin University Logo"
            />
            <span className="logo-text">DEAKIN UNIVERSITY</span>
          </div>
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
            <Button basic inverted icon>
              <Icon name="plus" />
              Post
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button basic inverted icon>
              <Icon name="user" />
              Login
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Header;
