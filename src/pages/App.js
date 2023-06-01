import React from 'react';
import './App.css';
import Header from '../pages/header';
import MainContent from '../pages/mainContent';
import Footer from '../pages/footer';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  

  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
      </div>
  );
}

export default App;