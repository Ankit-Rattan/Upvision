import React from 'react';
import './App.css';
import Hero from './Hero';
import EventPage from './EventPage';
import GalleryPage from './GalleryPage';



const App = () => {


    return (
        <div className="app">
                    <Hero/>
                    <EventPage />
                    <GalleryPage />
              
            
        </div>
    );
};

export default App;
