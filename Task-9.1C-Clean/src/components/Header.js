import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

const Header = ({ user }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <Menu fixed='top' inverted className="header-menu">
      <Container>
        <Menu.Item header className="logo">
          DEV@Deakin
        </Menu.Item>
        
        <Menu.Menu position='right'>
          {user ? (
            <>
              <Menu.Item>
                Welcome, {user.email}
              </Menu.Item>
              <Menu.Item>
                <Button basic inverted onClick={handleSignOut}>
                  Sign Out
                </Button>
              </Menu.Item>
            </>
          ) : (
            <Menu.Item>
              <Button basic inverted onClick={handleLoginClick}>
                Login
              </Button>
            </Menu.Item>
          )}
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Header;