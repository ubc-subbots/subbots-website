import React from 'react';
import { HashRouter } from 'react-router-dom';
import {
    Header,
    Footer
} from '../components'
import { ContactButton } from '../components/Contact';
import Router from './Router';
import '../styles/app.scss';

export default function App() {  
  return (
    <div className="App">
        <HashRouter basename="/">
            <Header/>
            <Router/>
            <ContactButton/>
            <Footer/>
        </HashRouter>
    </div>
  );
}
