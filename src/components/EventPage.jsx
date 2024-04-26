import React, { useState, useEffect } from "react";
import "../Styles/EventPage.css";
import techodyssey from "../images/techodyssey.jpg";
import CODE_ON from "../images/CODE_ON.jpg";
import resume from "../images/resume.jpg";
import Techphoria from "../images/Techphoria.jpg";
import AnimatedCursor from "react-animated-cursor";
import { Link } from "react-router-dom";

function EventPage() {
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
                "Amidst the vibrant atmosphere of NIT Delhi, the Technical Club's CodeON Festive Edition unfolded, showcasing a celebration of talent, dedication, and innovation in the realm of coding. From the initial call for participation, met with an overwhelming response, to the culminating moments of intense competition and camaraderie, the event stood as a testament to the spirit of excellence embodied by the students. Held on April 3rd, 2024, at LT-6, Mini Campus, NIT Delhi, the event attracted an array of first and second-year B.Tech students eager to put their coding skills to the test. With a meticulously crafted series of challenges, participants delved into the intricacies of problem-solving, each submission a testament to their ingenuity and perseverance. Following rigorous evaluation, the winners emerged, their names now etched in the annals of CodeON history. Jesna Vinod and Shivam Patidar claimed top honors in the first-year category, while Jugnu Gupta and Shreyansh Gupta emerged victorious in the second-year category, each bestowed with merit certificates and generous cash prizes. Their triumphs, however, merely symbolize the collective success of all participants, whose unwavering enthusiasm and dedication propelled the event to new heights. As the curtains draw on this exhilarating chapter of CodeON, we extend our heartfelt gratitude to all participants for their invaluable contributions, and we eagerly anticipate the next chapter in our journey of exploration, learning, and innovation",
            image: CODE_ON,
        },
        {
            id: 2,

            name: "Resume",
            date: "April 10, 2024",
            time: "9:00 AM - 9:00 PM",
            location: "NIT Delhi Campus",
            description:
                "UPVISION, the technical club of NIT Delhi, organized an online session titled \"Crafting Careers: Mastering the Art of Resume Building.\" Led by Ms. Arushi Jain, an esteemed alumni from the graduating batch of 2023, the session aimed to highlight the importance of impactful resumes and provide practical insights into creating them. The session commenced with a detailed overview of the workshop's agenda, outlining the key areas to be covered. Following this, the participants were introduced to the expert guide for the session, Ms. Arushi Jain. Ms. Jain's credentials as a distinguished alumna from the 2023 graduating batch of B.Tech in Electrical and Electronics Engineering (EEE), along with her achievement of securing the highest package in her cohort, immediately established her credibility as a mentor in the realm of career development. Currently serving as a Software Development Engineer (SDE) in the Commerce-IT team at Atlassian, Ms. Jain brought a wealth of real-world experience to the table, enriching the session with practical insights. Ms. Jain, drawing from her successful journey, shared valuable lessons on resume building, emphasizing its significance in today's competitive job market. The workshop focused on key components of a compelling resume, effective formatting tips, and strategies for tailoring resumes to specific opportunities. The objective was to equip students with tools to stand out and empower them on their career paths. Through interactive discussions and practical demonstrations, attendees gained a deeper understanding of resume construction and customization, setting them on the path to professional success. Overall, Ms. Arushi Jain's expert guidance and practical insights transformed the resume-building workshop into a highly enriching and empowering experience for all participants, paving the way for their success in the competitive job market. The resume building workshop facilitated a crucial exchange of insights and expertise, allowing students to address lingering uncertainties that often hinder their career development. Understanding that a resume transcends a mere chronological list of experiences, but rather serves as a personalized marketing tool, the session endeavored to imbue each participant's resume with a distinct narrative and compelling essence. By elucidating the intricacies of resume construction, the workshop aimed to empower students to transform their resumes into powerful reflections of their unique professional identities. Through the guidance of Ms. Arushi Jain, a luminary in her own right and a beacon of success for many, attendees were equipped with the knowledge and strategies necessary to craft resumes that truly stand out amidst a sea of applicants. Ms. Jain's wealth of experience and insightful perspectives not only demystified the process of resume building but also inspired attendees to approach their own career trajectories with renewed vigor and purpose.",
            image: resume,
        },
        // {
        //     id: 3,
        //     name: 'Tech Odyssey 2023',
        //     date: 'November 23, 2023',
        //     time: '4 PM Onwards',
        //     location: 'NIT Delhi Auditorium',
        //     description: " ",
        //     image: techodyssey
        // },
        {
            id: 4,
            name: 'Techphoria',
            date: 'October 17-18, 2023',
            time: '4PM onwards',
            location: 'NIT Delhi Auditorium',
            description: "",
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
                <div className="event-popup" >
                    <AnimatedCursor />
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
            <section className="event-page" id='events'>
                <AnimatedCursor />
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
                <div className='text-center'>

                    <button className='view-all-button'> 
                    <Link to="/eventfull">

                        All Events
                    </Link>
                    </button>
                </div>

                {activeEvent && <EventPopup event={events.find((event) => event.id === activeEvent)} />}

            </section>
        </>
    );
}

export default EventPage;
