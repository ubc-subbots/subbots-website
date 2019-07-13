import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
    Header,
    Footer
} from './features'
import { ContactButton } from './components/Contact';
import Router from './Router';
import './styles.scss';

export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <div className="HeaderOffset"></div>
            <div className="AppBackground">
                <Router/>
                <Footer/>
            </div>
            <ContactButton/>
        </BrowserRouter>
    </div>
  );
}
