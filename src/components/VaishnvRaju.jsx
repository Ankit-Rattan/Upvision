import React from 'react'
import AlumProfile from './AlumProfile'
import Navbar from './Navbar'
import AnimatedCursor from 'react-animated-cursor'
import GS from "../images/GS.jpg";

const VaishnvRaju = () => {
    return (
        <div>
        <Navbar/>
        <AnimatedCursor/>
            <AlumProfile
                name="Vaishnv Raju"
                desig="General Secretary (2023-2024)"
                img={GS}
                linkedin="https://www.linkedin.com/in/vaishnv-raju-v20015r?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                email="mailto:vaishnv.raju@gmail.com"
                mess="As I conclude my tenure as the General Secretary of the Technical Club, I reflect with profound humility on the panoply of experiences and achievements we've shared. From the nascent days of September 2023 to the culmination of May 2024, our journey has woven a rich tapestry of intellectual exploration and collective endeavor. Together, we've traversed the frontiers of innovation, igniting curiosity and fostering a pioneering spirit among our peers.

                TechPhoria served as a luminary, illuminating the importance of adhering to BIS standards in our technological pursuits. Our collaboration with the Bureau of Indian Standards not only elucidated quality standards but also galvanized us to uphold and contribute to these benchmarks in our academic and professional pursuits.
                
                Following TechPhoria, Tech Odyssey 2023 showcased our commitment to excellence in technology. This captivating event, featuring Interbranch Technical Quiz, Pictionary, and Cryptographic Treasure Hunt, engendered an electric atmosphere of healthy competition and collaboration among tech aficionados from diverse branches.
                
                In our quest for career development, the Resume Building Workshop spearheaded by esteemed alumna Ms. Arushi Jain provided invaluable insights into crafting impactful resumes. Through interactive discourse and practical demonstrations, participants gleaned a deeper understanding of resume construction, empowering them to navigate the cutthroat job market with aplomb and finesse.
                
                Lastly, the CodeON Festive Edition epitomized our coding prowess, celebrating innovation and excellence. Held in April 2024, this flagship event convened coding enthusiasts in a vibrant showcase of technical brilliance and creativity.
                
                As I transition to the next phase of my journey, I extend my heartfelt appreciation to all who have supported and participated in these endeavors. Together, we've crafted enduring memories and forged bonds that will transcend my tenure as General Secretary. Let us persist in nurturing innovation and upholding the spirit of relentless pursuit of knowledge, for therein lies the essence of true progress and enlightenment."
work="Former GS, Technical Club"

            />
        </div>
    )
}

export default VaishnvRaju