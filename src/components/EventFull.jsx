import React, { useState, useEffect } from "react";
import "../Styles/EventPage.css";
import "../Styles/GalleryPage.css";

import techodyssey from '../images/techodyssey.jpg';
import CODE_ON from '../images/CODE_ON.jpg';
import resume from '../images/resume.jpg';
import Techphoria from '../images/Techphoria.jpg';
import AnimatedCursor from 'react-animated-cursor';
import Navbar1 from './Navbar1';

function EventFull() {
  const [events, setEvents] = useState([]);
  const [activeEvent, setActiveEvent] = useState(null);

  const exampleEventsData = [
    {
      id: 1,
      name: "CODE ON",
      date: "April 3, 2024",
      time: "4:00 PM onwards",
      location: "NIT Delhi Auditorium",
      description:
        "Amidst the vibrant atmosphere of NIT Delhi, the Technical Clubs CodeON Festive Edition unfolded, showcasing a celebration of talent, dedication, and innovation in the realm of coding. From the initial call for participation, met with an overwhelming response, to the culminating moments of intense competition and camaraderie, the event stood as a testament to the spirit of excellence embodied by the students. Held on April 3rd, 2024, at LT-6, Mini Campus, NIT Delhi, the event attracted an array of first and second-year B.Tech students eager to put their coding skills to the test. With a meticulously crafted series of challenges, participants delved into the intricacies of problem-solving, each submission a testament to their ingenuity and perseverance. Following rigorous evaluation, the winners emerged, their names now etched in the annals of CodeON history. Jesna Vinod and Shivam Patidar claimed top honors in the first-year category, while Jugnu Gupta and Shreyansh Gupta emerged victorious in the second-year category, each bestowed with merit certificates and generous cash prizes. Their triumphs, however, merely symbolize the collective success of all participants, whose unwavering enthusiasm and dedication propelled the event to new heights. As the curtains draw on this exhilarating chapter of CodeON, we extend our heartfelt gratitude to all participants for their invaluable contributions, and we eagerly anticipate the next chapter in our journey of exploration, learning, and innovation.",
      image: CODE_ON,
    },
    {
      id: 2,
      name: "Resume",
      date: "January 2, 2024",
      time: "3:00 PM onwards",
      location: "Google Meet ",
      description: ".",
      image: resume,
    },
    {
      id: 3,
      name: "Tech Odyssey 2023",
      date: "November 23, 2023",
      time: "4 PM Onwards",
      location: "NIT Delhi Auditorium",
      description: " ",
      image: techodyssey,
    },
    {
      id: 4,
      name: "Techphoria",
      date: "October 17-18, 2023",
      time: "4PM onwards",
      location: "NIT Delhi Auditorium",
      description: "",
      image: Techphoria,
    },
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
  <AnimatedCursor/>
      <div className="event-popup" id='events'>
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
      <Navbar1 />
      <section className="event-page">
        <AnimatedCursor />
        <h2 className="event-page-title">Events</h2>
        <div className="event-grid flex justify-evenly">
          {events.map((event) => (
            <div
              key={event.id}
              className={`event-poster ${activeEvent === event.id ? "active" : ""}`}
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
        {activeEvent && (
          <EventPopup event={events.find((event) => event.id === activeEvent)} />
        )}
      </section>
    </>
  );
}

export default EventFull;
