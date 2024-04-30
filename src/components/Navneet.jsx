import React from 'react'
import Navbar from './Navbar'
import AlumProfile from './AlumProfile'
import AnimatedCursor from 'react-animated-cursor'


const Navneet = () => {
  return (
    <div >
    <AnimatedCursor/>
      <Navbar />
      <AlumProfile
        name="Navneet Singh"
        desig="General Secretary (2022-2023)"
        img="https://media.licdn.com/dms/image/D4D03AQGbWZbg7-DjVg/profile-displayphoto-shrink_400_400/0/1669055975082?e=1719446400&v=beta&t=HlIhpcl-TBBIo7tXws4FKCnWcH926EZQWebibW3wov4"
        linkedin="https://www.linkedin.com/in/navneetsingh123/"
        email="mailto:navneetsingh@example.com"
        mess="Greetings to all, It's fantastic to see the club thriving and achieving new heights. I appreciate this opportunity to be featured in the Alumni Section of the upcoming website. Overall, being the General Secretary of the Technical Club involved a combination of administrative duties, event planning, communication, leadership, and teamwork, all aimed at promoting technical knowledge and fostering a sense of community among members with shared interests.During my tenure, the biweekly coding competitions were among the most enlivening activities. It provided a competitive yet supportive environment that motivated the participants to push themselves and strive for excellence. This exposure helped students broaden their knowledge base and aided their placement preparations.
Moreover, promoting the club within the college community and beyond to attract new members and increase event participation was also exciting.Finally, thanks for this esteemed honour and best wishes for future endeavours."
        work="AMTS at Salesforce"
      />
    </div>
  )
}
export default Navneet