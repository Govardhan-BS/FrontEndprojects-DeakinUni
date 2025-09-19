import React from 'react';
import { Container, Menu, Input, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handlePostClick = () => {
    navigate('/post');
  };

  const handleStatusClick = () => {
    navigate('/status');
  };

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
            <Button basic inverted onClick={handlePostClick}>Post</Button>
          </Menu.Item>
          <Menu.Item>
            <Button basic inverted onClick={handleStatusClick}>Status</Button>
          </Menu.Item>
          <Menu.Item>
            <Button basic inverted onClick={handleLoginClick}>Login</Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Header;
