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
  console.log(process.env.PUBLIC_URL);
  
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
