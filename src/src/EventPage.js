import React, { useState, useEffect } from 'react';
import './EventPage.css'; 

function EventPage() {
   
    const [events, setEvents] = useState([]);

    
    const exampleEventsData = [
        {
            id: 1,
            name: 'Tech Odyssey 2023',
            date: 'November 23, 2023',
            time: '10:00 AM - 4:00 PM',
            location: 'NIT Delhi Auditorium',
            description: 'Join us for an exciting day of talks, workshops, and networking opportunities with leading industry experts.'
        },
        {
            id: 2,
            name: 'Code On',
            date: 'April 10, 2024',
            time: '9:00 AM - 9:00 PM',
            location: 'NIT Delhi Campus',
            description: 'Participate in our coding marathon and showcase your programming skills to win exciting prizes.'
        },
        {
            id: 3,
            name: 'Code On',
            date: 'April 10, 2024',
            time: '9:00 AM - 9:00 PM',
            location: 'NIT Delhi Campus',
            description: 'Participate in our coding marathon and showcase your programming skills to win exciting prizes.'
        },
        {
            id: 4,
            name: 'Code On',
            date: 'April 10, 2024',
            time: '9:00 AM - 9:00 PM',
            location: 'NIT Delhi Campus',
            description: 'Participate in our coding marathon and showcase your programming skills to win exciting prizes.'
        }
    ];

   
    useEffect(() => {
        setEvents(exampleEventsData);
    }, []);

    return (
        <section className="event-page">
            <h2 className="event-page-title"> Events</h2>
            <div className="event-grid">
                {events.map(event => (
                    <div key={event.id} className="event-card">
                        <h3 className="event-card-title">{event.name}</h3>
                        <p className="event-card-date-time">
                            {event.date} | {event.time}
                        </p>
                        <p className="event-card-location">{event.location}</p>
                        <p className="event-card-description">{event.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default EventPage;
