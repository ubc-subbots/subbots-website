import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
    Header,
    Footer
} from '../features'
import { ContactButton } from '../components/Contact';
import Router from './Router';
import '../styles/app.scss';

export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Router/>
            <Footer/>
            <ContactButton/>
        </BrowserRouter>
    </div>
  );
}
