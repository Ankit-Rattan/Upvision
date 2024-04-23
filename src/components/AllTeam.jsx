import React from 'react';
import exec from '../images/test.jpg';
import GS from '../images/GS.jpg';
import TeamCard from './TeamCard';
import DGS from './DGS';
import Executive from './Executive';
import Volunteers from './Volunteers';
import "../Styles/Team.css"
import Navbar from './Navbar';



const AllTeam = () => {
  return (
    <>
      <Navbar/>
      <div className='bg-zinc-800 pb-5 p-[5rem]  max-w-[100%]'>

        <div >
          <p className="text-slate-200 typing">Our Team</p>
          <div className='items-center shadow-md my-5'>
            <div className="team">
              {/* DGS, GS */}
              <div className=''>
                <div className='flex justify-around flex-wrap '>
                  <div>
                    <DGS name="Vaishnv Raju" desig="General Secretary" img={GS} linkedin="https://www.linkedin.com/in/vaishnv-raju-9j/" email="mailto:techclub@nitdelhi.ac.in" />
                  </div>
                  <div>

                    <DGS name="Sudhanshu Shrivastava" desig="Deputy Secretary General" img="https://media.licdn.com/dms/image/D4D03AQHMoy3N2oynsw/profile-displayphoto-shrink_400_400/0/1699277096118?e=1718841600&v=beta&t=oDm4RCTlYin07oYKUP9zo1WVxuFxIODLGHovQQOQDmI" linkedin="https://www.linkedin.com/in/sudhanshu-shrivastava-88853b246/" email="mailto:sudhanshushrivastava004@gmail.com" />
                  </div>
                  <div>

                    <DGS name="Sajal Sahu" desig="Deputy Secretary General" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXkuNt1iZEOYd_mFuikHhiWW1tlrpZvhWkpANzH9NAw&s" linkedin="https://www.linkedin.com/in/sajalsahu8/" email="mailto:211210056@nitdelhi.ac.in" />
                  </div>
                </div>
              </div>
              {/* Exec */}
              <div className='allteam'>

                <Executive />
                <hr className='my-[1rem] w-full' />
                {/* Volunteer */}
                <Volunteers />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTeam;
