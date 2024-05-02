import React, { useState, useEffect } from "react";
import "../Styles/EventPage.css";
import techodyssey from "../images/techodyssey.jpg";
import CODE_ON from "../images/CODE_ON.jpg";
import resume from "../images/resume.jpg";
import Techphoria from "../images/Techphoria.jpg";
import AnimatedCursor from "react-animated-cursor";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";


function EventPage() {
    
    useEffect(() => {
        ScrollReveal({
          reset: true,
          distance: "10px",
          duration: 500,
          delay: 600,
        });
        ScrollReveal().reveal(".event-main", {
          delay: 600,
          origin: "left",
        });
        ScrollReveal().reveal(".event-title", {
          delay: 700,
          origin: "left",
        });
        ScrollReveal().reveal(".pop-up", {
          delay: 700,
          origin: "bottom",
        });
      }, []);

    const [events, setEvents] = useState([]);
    const [activeEvent, setActiveEvent] = useState(null);
    const [popupVisible, setPopupVisible] = useState(false); // New state to control popup visibility
 
    const EventsData = [

    {
      id: 1,

            name: "CODE ON",
            date: "April 3, 2024",
            time: "4:00 PM onwards",
            location: "NIT Delhi Auditorium",
            description:
            "The CodeON Festive Edition at NIT Delhi showcased a vibrant celebration of coding talent, with overwhelming participation from first and second-year B.Tech students. Held amidst intense competition, participants tackled meticulously crafted challenges, showcasing their ingenuity and dedication. *Jesna Vinod and Shivam Patidar claimed top honors in the first-year category, while Jugnu Gupta and Shreyansh Gupta emerged victorious in the second-year category*, each bestowed with merit certificates and generous cash prizes. Their success reflects the collective spirit of all participants. The event concluded with gratitude towards contributors, eagerly anticipating future exploration and learning opportunities.",
            image: CODE_ON,
        },
        {
            id: 2,

            name: "Resume",
            date: "April 10, 2024",
            time: "3:00 PM - 6:00 PM",
            location: "NIT Delhi Campus",
            description:
            "UPVISION at NIT Delhi hosted an online session on -Crafting Careers: Mastering the Art of Resume Building, led by distinguished alumna Ms. Arushi Jain. Ms. Jain, a Software Development Engineer at Atlassian, shared practical insights and strategies for creating impactful resumes. The session aimed to empower students to tailor their resumes to stand out in the competitive job market. Through interactive discussions, attendees gained valuable tips for constructing compelling resumes, setting them on the path to professional success. Ms. Jain's guidance inspired attendees to approach their career paths with renewed confidence and purpose.",
            image: resume,
        },
        {
            id: 3,
            name: 'Tech Odyssey 2023',
            date: 'November 23, 2023',
            time: '4 PM Onwards',
            location: 'NIT Delhi Auditorium',
            description: "UPVISION, the technical club of NIT Delhi in collaboration with Google Developer Student Club   (GDSC), organized the technical extravaganza Tech Odyssey 2023. The event unfolded with enthusiasm and innovation, featuring three captivating events: the Interbranch Technical Quiz, Interbranch Technical Pictionary, and Interbranch Cryptographic Treasure Hunt. The event brought together tech enthusiasts from various branches, creating an electrifying atmosphere. The aim of TechOdyssey 2023 was to foster a spirit of healthy competition and collaboration in the college. There were a total of 4 teams for each event– CSE, ECE, EEE and ME+CIVIL.",
            image: techodyssey
        },
        {
            id: 4,
            name: 'Techphoria',
            date: 'October 17-18, 2023',
            time: '4PM onwards',
            location: 'NIT Delhi Auditorium',
            description: "TechPhoria, in collaboration with the Bureau of Indian Standards (BIS), kicked off it’s highly anticipated event on the 1st day with a series of informative and engaging activities. The event aimed to educate and inspire students about the importance of adhering to BIS standards in the technology and manufacturing sectors. The day commenced with a presentation by officials from the Bureau of Indian Standards. They enlightened the audience, primarily comprising students, about the crucial role BIS plays in setting and maintaining quality standards for various products.",
            image: Techphoria
        }
    ];

    useEffect(() => {
        setEvents(EventsData);
    }, []);

    const toggleEventDetails = (eventId) => {
        setActiveEvent(activeEvent === eventId ? null : eventId);

        setTimeout(() => {
            setActiveEvent(activeEvent === eventId ? null : eventId);
            setPopupVisible(!popupVisible);
        }, 500);
    };



  const EventPopup = ({ event }) => {
    return (
      <>
        <div className="event-popup">
          <AnimatedCursor />

          <div className="event-popup-content">
            <button
              className="close-button"
              onClick={() => toggleEventDetails(event.id)}
            >
              &times;
            </button>
            <h3 className="event-popup-title">{event.name}</h3>
            <p className="event-popup-date-time">
              {event.date} | {event.time}
            </p>
            <p className="event-popup-location">{event.location}</p>
            <p className="event-popup-description">{event.description}</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <section className="event-page" id="events">
        <AnimatedCursor />

        <h2 className="event-page-title">
          <span>EVENTS</span>
        </h2>
        <div className="event-main event-grid flex  justify-evenly">
          {events.map((event) => (
            <div
              key={event.id}
              className={`event-poster ${
                activeEvent === event.id ? "active" : ""
              }`}
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
        <div className="text-center">
          <button className="view-all-button">
            <Link to="/eventfull">All Events</Link>
          </button>
        </div>

        {activeEvent && (
          <EventPopup
            event={events.find((event) => event.id === activeEvent)}
          />
        )}
      </section>
    </>
  );
}

export default EventPage;
