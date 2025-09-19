import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header';
import NewPostPage from './components/NewPostPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NewPostPage />
    </div>
  );
}

export default App;
