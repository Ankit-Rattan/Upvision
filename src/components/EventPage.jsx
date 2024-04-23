import React, { useState, useEffect } from "react";
import "../Styles/EventPage.css";
// import techodyssey from './techodyssey.jpg';
import CODE_ON from "../images/CODE_ON.jpg";
import resume from "../images/resume.jpg";
// import Techphoria from '../images/Techphoria.jpg';

function EventPage() {
  const [events, setEvents] = useState([]);
  const [activeEvent, setActiveEvent] = useState(null);

  const exampleEventsData = [
    // {
    //     id: 1,
    //     name: 'Tech Odyssey 2023',
    //     date: 'November 23, 2023',
    //     time: '4 PM Onwards',
    //     location: 'NIT Delhi Auditorium',
    //     description: "UPVISION, the technical club of NIT Delhi in collaboration with Google Developer Student Club (GDSC), organized the technical extravaganza Tech Odyssey 2023. The event unfoldedwith enthusiasm and innovation, featuring three captivating events: the Interbranch Technical Quiz,Interbranch Technical Pictionary, and Interbranch Cryptographic Treasure Hunt. The event brought together tech enthusiasts from various branches, creating an electrifying atmosphere.There were a total of 4 teams for each event – CSE,ECE, EEE and ME+CIVIL.",
    //     image: techodyssey
    // },
    {
      id: 2,
      name: "CODE ON",
      date: "April 10, 2024",
      time: "9:00 AM - 9:00 PM",
      location: "NIT Delhi Campus",
      description:
        "Participate in our coding marathon and showcase your programming skills to win exciting prizes.",
      image: CODE_ON,
    },
    {
      id: 3,
      name: "Resume",
      date: "April 10, 2024",
      time: "9:00 AM - 9:00 PM",
      location: "NIT Delhi Campus",
      description:
        "UPVISION, the technical club of NIT Delhi, recently organized an online session titled Crafting Careers: Mastering the Art of Resume Building. Led by Ms. Arushi Jain, an esteemed alumni from the graduating batch of 2023, the session aimed to highlight the importance of impactful resumes and provide practical insights into creating them. Ms. Jain, drawing from her successful journey, shared valuable lessons on resume building, emphasizing its significance in today&#39;s competitive job market. The workshop focused on key components of a compelling resume, effective formatting tips, and strategies for tailoring resumes to specific opportunities.",
      image: resume,
    },
    // {
    //     id: 4,
    //     name: 'Techphoria',
    //     date: 'April 10, 2024',
    //     time: '9:00 AM - 9:00 PM',
    //     location: 'NIT Delhi Campus',
    //     description: 'TechPhoria, in collaboration with the Bureau of Indian Standards (BIS), kicked off it’s highlyanticipated event on the 1st day with a series of informative and   engaging activities. The event aimed to educate and inspire students about the importance of adhering to BIS standards in the technology and manufacturing sectors.',
    //     image: Techphoria
    // }
  ];

  useEffect(() => {
    setEvents(exampleEventsData);
  }, []);

  const toggleEventDetails = (eventId) => {
    setActiveEvent(activeEvent === eventId ? null : eventId);
  };

  return (
    <section className="event-page">
      <h1 className="event-page-title">Events</h1>
      <div className="event-grid">
        {events.map((event) => (
          <div
            key={event.id}
            className={`event-card ${activeEvent === event.id ? "active" : ""}`}
            onClick={() => toggleEventDetails(event.id)}
          >
            <div className="event-card-header">
              <h3 className="event-card-title">{event.name}</h3>
              <img
                src={event.image}
                alt={event.name}
                className="event-card-image"
              />
              <div className="event-card-details">
                <p className="event-card-date-time">
                  {event.date} | {event.time}
                </p>
                <p className="event-card-location">{event.location}</p>
                <p className="event-card-description">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventPage;
