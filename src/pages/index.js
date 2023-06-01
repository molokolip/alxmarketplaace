import React from 'react'
import './App.css';
import Header from '../pages/header';
import MainContent from '../pages/mainContent';
import Footer from '../pages/footer';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';



export default function index() {
    return (
        <div className="container">
          
      <Header />
      
      
      <Grid item xs={16}>
          <MainContent />
        </Grid>
      
      
      
      <Footer />
      
      </div>
    )
}
