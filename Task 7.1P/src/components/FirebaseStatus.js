import React, { useState, useEffect } from 'react';
import { Button, Message, Container, Header, List } from 'semantic-ui-react';
import { auth, db } from '../firebase/config';
import { getDocs, collection } from 'firebase/firestore';
import './FirebaseStatus.css';

const FirebaseStatus = () => {
  const [status, setStatus] = useState({
    auth: 'checking',
    firestore: 'checking',
    config: 'checking'
  });
  const [error, setError] = useState('');
  const [details, setDetails] = useState({});

  useEffect(() => {
    checkFirebaseStatus();
  }, []);

  const checkFirebaseStatus = async () => {
    try {
      setError('');
      
      const config = auth.app.options;
      const hasConfig = config.apiKey && config.apiKey !== 'your-api-key';
      
      setStatus(prev => ({ ...prev, config: hasConfig ? 'connected' : 'not-configured' }));
      
      if (hasConfig) {
        try {
          await auth.authStateReady();
          setStatus(prev => ({ ...prev, auth: 'connected' }));
        } catch (authError) {
          setStatus(prev => ({ ...prev, auth: 'error' }));
          setDetails(prev => ({ ...prev, auth: authError.message }));
        }

        try {
          const testQuery = await getDocs(collection(db, 'test'));
          setStatus(prev => ({ ...prev, firestore: 'connected' }));
        } catch (firestoreError) {
          setStatus(prev => ({ ...prev, firestore: 'error' }));
          setDetails(prev => ({ ...prev, firestore: firestoreError.message }));
        }
      } else {
        setError('Firebase configuration is missing or incomplete. Please check your config file.');
      }
    } catch (error) {
      setError(`Firebase check failed: ${error.message}`);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'connected': return 'green';
      case 'error': return 'red';
      case 'not-configured': return 'orange';
      default: return 'yellow';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'connected': return 'check circle';
      case 'error': return 'times circle';
      case 'not-configured': return 'exclamation triangle';
      default: return 'spinner';
    }
  };

  return (
    <Container className="firebase-status-container">
      <Header as='h2' textAlign='center' className="status-header">
        Firebase Connection Status
      </Header>
      
      <div className="status-grid">
        <div className="status-item">
          <Header as='h4'>Configuration</Header>
          <Message
            color={getStatusColor(status.config)}
            icon={getStatusIcon(status.config)}
            header={status.config === 'connected' ? 'Configured' : 
                   status.config === 'not-configured' ? 'Not Configured' : 'Checking...'}
            content={status.config === 'not-configured' ? 'Update src/firebase/config.js with your Firebase credentials' : ''}
          />
        </div>

        <div className="status-item">
          <Header as='h4'>Authentication</Header>
          <Message
            color={getStatusColor(status.auth)}
            icon={getStatusIcon(status.auth)}
            header={status.auth === 'connected' ? 'Connected' : 
                   status.auth === 'error' ? 'Error' : 'Checking...'}
            content={details.auth || ''}
          />
        </div>

        <div className="status-item">
          <Header as='h4'>Firestore Database</Header>
          <Message
            color={getStatusColor(status.firestore)}
            icon={getStatusIcon(status.firestore)}
            header={status.firestore === 'connected' ? 'Connected' : 
                   status.firestore === 'error' ? 'Error' : 'Checking...'}
            content={details.firestore || ''}
          />
        </div>
      </div>

      {error && (
        <Message negative>
          <Message.Header>Configuration Error</Message.Header>
          <p>{error}</p>
        </Message>
      )}

      <div className="action-buttons">
        <Button primary onClick={checkFirebaseStatus}>
          Refresh Status
        </Button>
        <Button secondary onClick={() => window.open('https://console.firebase.google.com/', '_blank')}>
          Open Firebase Console
        </Button>
      </div>

      <div className="setup-instructions">
        <Header as='h3'>Setup Instructions</Header>
        <List ordered>
          <List.Item>Go to <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase Console</a></List.Item>
          <List.Item>Create a new project or select existing one</List.Item>
          <List.Item>Enable Authentication (Email/Password provider)</List.Item>
          <List.Item>Enable Firestore Database</List.Item>
          <List.Item>Go to Project Settings > General</List.Item>
          <List.Item>Copy the config object to src/firebase/config.js</List.Item>
        </List>
      </div>
    </Container>
  );
};

export default FirebaseStatus;
