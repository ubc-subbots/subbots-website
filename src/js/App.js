import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
    Header,
    Footer
} from '../components'
import { ContactButton } from '../components/Contact';
import Router from './Router';
import '../styles/app.scss';

export default function App() {
  console.log(process.env.PUBLIC_URL);
  
  return (
    <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header/>
            <Router/>
            <ContactButton/>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}
