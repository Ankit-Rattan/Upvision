import React from 'react'
import AlumProfile from './AlumProfile'
import Navbar from './Navbar'
import AnimatedCursor from 'react-animated-cursor'

const RahulSinha = () => {
    return (
        <div>
        <Navbar/>
        <AnimatedCursor/>
            <AlumProfile
                name="Rahul Sinha"
                desig="General Secretary (2021-2022)"
                img="https://media.licdn.com/dms/image/D4D03AQFM5Hf0qzvOMw/profile-displayphoto-shrink_400_400/0/1694754193166?e=1719446400&v=beta&t=kLVZmuIisoArINBdPdgmA5EUpMwl0rkKIHAbIY3A1Q4"
                linkedin="https://www.linkedin.com/in/rahulsinha19/"
                email="mailto:rahulsinha@example.com"
                mess="Greetings to all the faculty members and members of Upvision,

It's wonderful to learn about the developments underway to enrich and nurture the growth of students via the technical club.

The technical club has been instrumental in shaping my personal and professional journey. Collaborating with like-minded peers in hands-on projects has not only strengthened my technical skills but also fostered a sense of camaraderie. I've learned to adapt and innovate under pressure through competitions and hackathons, cultivating resilience and perseverance. The mentorship and networking opportunities within the club have been invaluable for my career development, guiding me toward fulfilling opportunities and connections within the industry.

Continue your commendable efforts and strive to elevate the club to greater heights each year."
work="Former DGS, Technical Club"

            />
        </div>
    )
}

export default RahulSinha
