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
            description: 'Amidst the vibrant atmosphere of NIT Delhi, the Technical Club's CodeON Festive Edition unfolded, showcasing a celebration of talent, dedication, and innovation in the realm of coding. From the initial call for participation, met with an overwhelming response, to the culminating moments of intense competition and camaraderie, the event stood as a testament to the spirit of excellence embodied by the students. Held on April 3rd, 2024, at LT-6, Mini Campus, NIT Delhi, the event attracted an array of first and second-year B.Tech students eager to put their coding skills to the test. With a meticulously crafted series of challenges, participants delved into the intricacies of problem-solving, each submission a testament to their ingenuity and perseverance. Following rigorous evaluation, the winners emerged, their names now etched in the annals of CodeON history. Jesna Vinod and Shivam Patidar claimed top honors in the first-year category, while Jugnu Gupta and Shreyansh Gupta emerged victorious in the second-year category, each bestowed with merit certificates and generous cash prizes. Their triumphs, however, merely symbolize the collective success of all participants, whose unwavering enthusiasm and dedication propelled the event to new heights. As the curtains draw on this exhilarating chapter of CodeON, we extend our heartfelt gratitude to all participants for their invaluable contributions, and we eagerly anticipate the next chapter in our journey of exploration, learning, and innovation.',
            image: CODE_ON
        },
        {
            id: 2,
          
            name: 'Resume',
            date: 'January 2, 2024',
            time: '3:00 PM onwards',
            location: 'Google Meet ',
            description: "UPVISION, the technical club of NIT Delhi, organized an online session titled &quot;Crafting Careers: Mastering the Art of Resume Building.&quot; Led by Ms. Arushi Jain, an esteemed alumni from the graduating batch of 2023, the session aimed to highlight the importance of impactful resumes and provide practical insights into creating them. The session commenced with a detailed overview of the workshop&#39;s agenda, outlining the key areas to be covered. Following this, the participants were introduced to the expert guide for the session, Ms.Arushi Jain. Ms. Jain&#39;s credentials as a distinguished alumna from the 2023 graduating batch of B.Tech in Electrical and Electronics Engineering (EEE), along with her achievement of securing the highest package in her cohort, immediately established her credibility as a mentor in the realm of career development. Currently serving as a Software Development Engineer (SDE) in the Commerce-IT team at Atlassian, Ms. Jain brought a wealth of real-world experience to the table, enriching the session with practical insights. Ms. Jain, drawing from her successful journey, shared valuable lessons on resume building, emphasizing its significance in today&#39;s competitive job market. The workshop focused on key components of a compelling resume, effective formatting tips, and strategies for tailoring resumes to specific opportunities. The objective was to equip students with tools to stand out and empower them on their career paths. Through interactive discussions and practical demonstrations, attendees gained a deeper understanding of resume construction and customization, setting them on the path to professional success. Overall, Ms. Arushi Jain&#39;s expert guidance and practical insights transformed the resume-building workshop into a highly enriching and empowering experience for all participants, paving the way for their success in the competitive job market. The resume building workshop facilitated a crucial exchange of insights and expertise, allowing students to address lingering uncertainties that often hinder their career development. Understanding that a resume transcends a mere chronological list of experiences, but rather serves as a personalized marketing tool, the session endeavored to
imbue each participant&#39;s resume with a distinct narrative and compelling essence. By
elucidating the intricacies of resume construction, the workshop aimed to empower students
to transform their resumes into powerful reflections of their unique professional identities.
Through the guidance of Ms. Arushi Jain, a luminary in her own right and a beacon of
success for many, attendees were equipped with the knowledge and strategies necessary to
craft resumes that truly stand out amidst a sea of applicants. Ms. Jain&#39;s wealth of experience
and insightful perspectives not only demystified the process of resume building but also
inspired attendees to approach their own career trajectories with renewed vigor and purpose.",
            image: resume
        },
        {
            id: 3,
            name: 'Tech Odyssey 2023',
            date: 'November 23, 2023',
            time: '4 PM Onwards',
            location: 'NIT Delhi Auditorium',
            description: "UPVISION, the technical club of NIT Delhi in collaboration with Google Developer Student Club
(GDSC), organized the technical extravaganza Tech Odyssey 2023. The event unfolded with
enthusiasm and innovation, featuring three captivating events: the Interbranch Technical Quiz,
Interbranch Technical Pictionary, and Interbranch Cryptographic Treasure Hunt. The event brought
together tech enthusiasts from various branches, creating an electrifying atmosphere. The aim of Tech
Odyssey 2023 was to foster a spirit of healthy competition and collaboration in the college. There
were a total of 4 teams for each event – CSE, ECE, EEE and ME+CIVIL.
Interbranch Technical Quiz
The day kicked off with the Interbranch Technical Quiz, a battle of wits and knowledge, testing the
understanding of the latest developments in the world of technology. The first round was ‘Clue for a
Flu’. The second round was the ‘KBC Round’. Each team sent their representative who was supposed
to answer the questions. The representative also had two lifelines- ‘Phone-a-friend’ and ‘Audience
Poll’. The third round was ‘Double Trouble Round’. The last round was ‘Rapid Fire Round’ where
the teams were tested of their speed of thinking and answering the questions. CSE team (The Logic
Lords) won this event. The runner up for this event was the EE/EEE team (ElectaBuz). ME+CIVIL
team ranked third &amp; ECE team ranked fourth.
Interbranch Technical Pictionary
The creativity soared to new heights with the Interbranch Technical Pictionary. Teams were
challenged to illustrate complex technical concepts and jargon through drawings and sketches. Each
team had a total of 10 minutes to decipher 5 technical terms and the team which decoded all the words
were declared the winners. One member from each team came forward to draw the terms and the rest
were made to guess. If they got the right answer, the team was awarded by +5 points and -5 on any
type of foul play. The tie-breaker was the time. The team which took the least time to guess the words
were declared as the winner at the end of this event. ECE team (masterpiECE) emerged as the winner.
EE/EEE team (Techno Blasters) was the runner up. CSE team stood third &amp; ME+CIVIL team stood
fourth.
Interbranch Cryptographic Treasure Hunt
The pinnacle of excitement was reached with the Cryptographic Treasure Hunt, a thrilling adventure
that combined cryptography, problem-solving, and teamwork. Participants embarked on a quest to
decrypt clues leading to hidden treasures scattered throughout the site. Each team were sent the
questions on their respective laptops and the team which solved the clues and solved the puzzles in the
least time were declared as the winners. CSE team (Syntax Seeker Squad) emerged as the winners.

Tech Odyssey was not just an event; it was a celebration of technology, innovation, and collaboration.
The three distinct events showcased the multifaceted nature of the tech world, appealing to a diverse
audience with varied interests and skills. In conclusion, the triumphant success of Tech Odyssey 2023
can be attributed to the collaborative efforts of esteemed Dean Student Student Welfare, Dr. Jyoteesh
Malhotra and the faculty coordinators, Dr. Manoj Kumawat &amp; Dr. Gautam Kumar In particular, Mr.
Vaishnv Raju, the indefatigable General Secretary of the Technical Club &amp; Ms. Menika Karki, the
astute GDSC Lead emerged as a driving force, providing unwavering leadership and guidance,
contributing to the success of Odyssey 2023. ",
        },
        {
            id: 4,
            name: 'Techphoria',
            date: 'October 17-18, 2023',
            time: '4PM onwards',
            location: 'NIT Delhi Auditorium',
            description: "TECHPHORIA DAY 1
Date - 17th October 2023

TechPhoria, in collaboration with the Bureau of Indian Standards (BIS), kicked off it’s highly
anticipated event on the 1st day with a series of informative and engaging activities. The
event aimed to educate and inspire students about the importance of adhering to BIS
standards in the technology and manufacturing sectors. The day commenced with a
presentation by officials from the Bureau of Indian Standards. They enlightened the audience,
primarily comprising students, about the crucial role BIS plays in setting and maintaining
quality standards for various products.

TECHPHORIA DAY 2
Date - 18th October 2023

On the second day of the BIS event, the Director of the institution, Dr. Ajay Kumar Sharma
played a crucial role in motivating students and faculty to engage with BIS standards. The
event witnessed several notable highlights. Dr. Ajay Kumar Sharma announced that the
institution, in collaboration with BIS, is set to establish a BIS Club. This club aims to
enhance students understanding of Indian standards and foster awareness about quality and
regulations.
Quiz Competition:
A quiz competition, with 42 students in participation, featured questions related the BIS
standards, building upon the knowledge shared during the first day of the event. Aryan
Manav secured the first position, followed by Sujeet Kumar securing second position and
Shreyja Singh securing the third position. The runner ups of the Quiz competition were
Abhishek Chaurasiya and Jay Kumar Sharma.
Debate Competition:
A lively debate competition followed the quiz, with three students showcasing their
eloquence and winning monetary prizes. Nitya Mittal secured first position, followed by
Vaishnv Raju securing second position and Japnit Singh securing third position. The runner
ups of the Quiz competition were Ankit Singh Patel and Jesha Vinod.
Essay Writing Competition:
The event also featured an essay writing competition, and again, three students distinguished
themselves and received cash prizes along with certification for their outstanding essays. The
topic was Impact of Standard on Economic Development. Mir Asrar securing the first
position, followed by Vaishnv Raju securing second position and Anurag Kumar securing
third position. The runner ups of the Quiz competition were Hani Kumar and Ankit Singh
Patel.
Certificate of participation was awarded to all the participants. The event concluded with a
heartfelt vote of thanks by the General Secretary, Mr. Vaishnv Raju, who expressed gratitude
to all the participants, faculty, and the BIS team for making the event a success. The event
ended with the National Anthem &amp; a group photo. The second day of the BIS event was not
only educational but also inspiring, fostering a deeper understanding of Indian standards and
their importance among the students.",
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
