import React from 'react'
import AlumProfile from './AlumProfile'
import AnimatedCursor from 'react-animated-cursor'
import Navbar from './Navbar'

const SumanAbhishek = () => {
    return (
        <div>
        <AnimatedCursor/>
        <Navbar/>
            <AlumProfile
                name="Abhishek Kumar Suman"
                desig="Deputy Secretary General (2021-2022)"
                img="https://media.licdn.com/dms/image/D4D03AQHMprxBOHeMRg/profile-displayphoto-shrink_400_400/0/1686179263863?e=1719446400&v=beta&t=q50YpIagDWvW8Mlo2ncvCj3Ju6ETXxOeBQ10RwgZDiA"
                linkedin="https://www.linkedin.com/in/aksuman055/"
                email="mailto:aksuman@example.com"
                mess = "My time in the club, first as a member and later as Deputy General Secretary, fills me with nostalgia and pride. The club was integral to my college experience, offering not just technical opportunities but also fostering personal growth and camaraderieParticipating in various events, including tech fests and tackling challenges like the COVID-19 pandemic situations, taught me invaluable lessons. Working alongside dedicated peers, we strived for innovation despite obstacles, maintaining our commitment to fostering technical excellence among students.Reflecting further on my journey, one of the most exhilarating aspects was our Alumni Sessions. These sessions provided a unique opportunity for us to connect with alumni working across diverse sectors. Their insights and guidance not only enriched our understanding of industry practices but also bridged the gap between academia and real-world applications. Witnessing how our college learnings translated into tangible skills valued by professionals in various fields was truly inspiring.Additionally, having been part of the Training and Placement (TnP) committee since my first semester, I gained insights into the interview process. This firsthand experience allowed me to understand the expectations from students during interviews. Leveraging this knowledge, we organized mock interview sessions facilitated by final year seniors. These sessions proved invaluable for students, providing them with a realistic understanding of the interview process and helping them identify areas for improvement.Additionally, being a member of the Technical Club opened doors to a multitude of opportunities, especially in web development. We had the chance to work on numerous projects, including designing websites for cultural and tech fests, as well as the current Training and Placement (TnP) website. One of our notable projects was creating a discussion platform like Stack Overflow which never went live but it worked really well for me to showcase that on my resume. These initiatives not only honed our technical skills but also instilled in us the importance of collaboration and teamwork. It was a testament to the power of open-source projects, where every student could contribute and learn from each other, fostering a culture of innovation and shared growth"
                work="SDE at Swiggy"
            />
        </div>
    )
}

export default SumanAbhishek
