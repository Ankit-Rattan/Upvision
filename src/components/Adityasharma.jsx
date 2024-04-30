import React from 'react'
import Navbar from './Navbar'
import AnimatedCursor from 'react-animated-cursor'
import AlumProfile from './AlumProfile'

const Adityasharma = () => {
    return (
        <div>
            <Navbar />
            <AnimatedCursor />
            <AlumProfile
                name="Aditya Sharma"
                desig="General Secretary (202-2021)"
                img="https://media.licdn.com/dms/image/D4D03AQErmwCsCtX7Sw/profile-displayphoto-shrink_400_400/0/1695185770687?e=1719446400&v=beta&t=8WgKpN9xjikqjFLgDcC6xxapYemJUBEtDXjez9Ullio"
                linkedin="https://www.linkedin.com/in/aditya-sharma-6b18ba158/"
                email="mailto:rahulsinha@example.com"
                mess="Greetings to all the respected faculties and dear members of the club,

First of all, congratulations for the wonderful news and all the best to the team giving their best to uprise the technical club of this prestigious college. It's really good to see the development of the club and the pace with which it is working to achieve new heights.

I feel blessed to be the part of this group first as executive member during my initial years and then as DGS and GS during my final year. During my time, i enjoyed every activity. Organizing events in technical fest, arranging robotics workshops, redesigning club logo and expanding club reach to social media was few of them. Each activity was filled with lots of learning shaping us to be the best of us. One thing that i learned during my time: Do the best with what you have- was like a life lesson to me pushing to be innovative at each step and i still follow the same till date.

Finally i would like to thank all the faculties for guiding us through our college years and once again congratulations to the team and all the best for all the future activities. Hoping to meet you all soon."
work="Former GS and DGS, Technical Club"
            />
        </div>
    )
}

export default Adityasharma
