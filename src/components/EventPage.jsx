import React, { useState, useEffect } from 'react';
import '../Styles/EventPage.css';
// import techodyssey from '../images/techodyssey.jpg'; 
import CODE_ON from '../images/CODE_ON.jpg';
import resume from '../images/resume.jpg'; 
import Techphoria from '../images/Techphoria.jpg'; 
import AnimatedCursor from 'react-animated-cursor';

function EventPage() {
    const [events, setEvents] = useState([]);
    const [activeEvent, setActiveEvent] = useState(null);

    const exampleEventsData = [
        {
            id: 1,
            
            name: 'CODE ON',
            date: 'April 3, 2024',
            time: '4:00 PM onwards',
            location: 'NIT Delhi Auditorium',
            description: 'Participate in our coding marathon and showcase your programming skills to win exciting prizes.',
            image: CODE_ON
        },
        {
            id: 2,
          
            name: 'Resume',
            date: 'April 10, 2024',
            time: '9:00 AM - 9:00 PM',
            location: 'NIT Delhi Campus',
            description: '',
            image: resume
        },
        // {
        //     id: 3,
        //     name: 'Tech Odyssey 2023',
        //     date: 'November 23, 2023',
        //     time: '4 PM Onwards',
        //     location: 'NIT Delhi Auditorium',
        //     description: "UPVISION, the technical club of NIT Delhi in collaboration with Google Developer Student Club (GDSC), organized the technical extravaganza Tech Odyssey 2023. The event unfoldedwith enthusiasm and innovation, featuring three captivating events: the Interbranch Technical Quiz,Interbranch Technical Pictionary, and Interbranch Cryptographic Treasure Hunt. The event brought together tech enthusiasts from various branches, creating an electrifying atmosphere.There were a total of 4 teams for each event – CSE,ECE, EEE and ME+CIVIL.",
        //     image: techodyssey
        // },
        {
            id: 4,
            name: 'Techphoria',
            date: 'April 10, 2024',
            time: '9:00 AM - 9:00 PM',
            location: 'NIT Delhi Campus',
            description: 'TechPhoria, in collaboration with the Bureau of Indian Standards (BIS), kicked off it’s highlyanticipated event on the 1st day with a series of informative and   engaging activities. The event aimed to educate and inspire students about the importance of adhering to BIS standards in the technology and manufacturing sectors.',
            image: Techphoria
        }    
    ];

    useEffect(() => {
        setEvents(exampleEventsData);
    }, []);

    const toggleEventDetails = (eventId) => {
        setActiveEvent(activeEvent === eventId ? null : eventId);
    };

    const EventPopup = ({ event }) => {
        return (
            <>
            <div className="event-popup">
            <AnimatedCursor/>
                <div className="event-popup-content">
                    <button className="close-button" onClick={() => toggleEventDetails(event.id)}>
                        &times;
                    </button>
                    <h3 className="event-popup-title">{event.name}</h3>
                    <p className="event-popup-date-time">{event.date} | {event.time}</p>
                    <p className="event-popup-location">{event.location}</p>
                    <p className="event-popup-description">{event.description}</p>
                </div>
            </div>
            </>
        );
    };

    return (
        <>
        <section className="event-page">
    <AnimatedCursor/>
            <h2 className="event-page-title">Events</h2>
            <div className="event-grid flex justify-evenly">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className={`event-poster ${activeEvent === event.id ? 'active' : ''}`}
                        onClick={() => toggleEventDetails(event.id)}
                    >
                        <img
                            src={event.image}
                            alt={event.name}
                            className="event-poster-image"
                        />
                        <h3 className="event-poster-title">{event.name}</h3>
                    </div>
                ))}
            </div>
            {activeEvent && <EventPopup event={events.find((event) => event.id === activeEvent)} />}
        </section>
        </>
    );
}

export default EventPage;
