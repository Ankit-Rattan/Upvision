import React from 'react'
import TeamCard from './TeamCard' 
import sumit from '../images/sumit.jpg'
import tanishq from '../images/tanishq.jpg'
import vasu from '../images/vasu.jpg'
import gauri from '../images/gauri.jpg'
import nidhi from '../images/nidhi.jpg'
import omprakash from '../images/omprakash.jpg'
import aditya from '../images/aditya.jpg'
import tushar from '../images/tushar.jpg'
import jesna from '../images/jesna.jpg'
import aryan from '../images/aryan.jpg'
import sadiq from '../images/Sadiq Ahmed.jpg'
import vardhan from '../images/vardhan.jpg'
import amitanshu from '../images/amitanshu.jpg'





const Executive = () => {
    return (
        <div>
            <div className='mt-[5rem]'>
                <div className='flex flex-wrap gap-1'>
                    <TeamCard name="Tushar Sharma" desig="Executive" img={tushar} linkedin="https:www.linkedin.com/in/tushar-kumar-sharma-2473a1348" email="mailto:231210116@nitdelhi.ac.in" />
                    <TeamCard name="Sumit Kumar" desig="Executive" img={sumit} linkedin="https:www.linkedin.com/in/sumit-kumar-069361295" email="mailto:sumit.kumar120664@gmail.com" />
                    <TeamCard name="Omprakash Tiwari" desig="Executive" img={omprakash} linkedin="https://linkedin.com/in/omprakash-tiwari-4493362a7" email="mailto:231210081@nitdelhi.ac.in" />
                    <TeamCard name="Vashu kumar" desig="Executive" img={vasu}  linkedin="#" email="mailto:231210118@nitdelhi.ac.in" />
                    <TeamCard name="Aditya Narayan Tripathi" desig="Executive" img={aditya} linkedin="https://linkedin.com/in/aditya-narayan-tripathi-66534330b" email="mailto:231210004@nitdelhi.ac.in" />
                    <TeamCard name="Tanishq Deendayal" desig="Executive" img={tanishq}  linkedin="https://linkedin.com/in/tanishq-deendyal-b43669284" email="mailto:231230065@nitdelhi.ac.in" />
                    <TeamCard name="Sadiq Ahmed" desig="Executive" img={sadiq} linkedin="https://linkedin.com/in/sadiq-ahmed-a5aa52343" email="mailto:231230049@nitdelhi.ac.in" />
                    <TeamCard name="Nidhi Chauhan" desig="Executive" img={nidhi} linkedin="https://linkedin.com/in/nidhi-chauhan-84b6262ab" email="mailto:231230038@nitdelhi.ac.in " />
                    <TeamCard name="Gauri" desig="Executive" img={gauri} linkedin="https://linkedin.com/in/gauri-agarwal-381798203" email="mailto:231210045@nitdelhi.ac.in" />
                    {/* <TeamCard name="Amitanshu Lal" desig="Executive" img={amitanshu} linkedin="https://www.linkedin.com/in/amitanshu-lal-611248244" email="mailto:231210013@nitdelhi.ac.in" /> */}
                    <TeamCard name="Aryan Shah" desig="Executive" img={aryan} linkedin="#" email="mailto:231320003@nitdelhi.ac.in" />
                    <TeamCard name="Jesna Vinod" desig="Executive" img={jesna} linkedin="https://www.linkedin.com/in/jesna-vinod-b6640128b/" email="mailto:231220030@nitdelhi.ac.in" />
                    <TeamCard name="Vardhan Mittal" desig="Executive" img={vardhan} linkedin="https://www.linkedin.com/in/vardhan-mittal-0a0ab6227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " email="mailto:231220069@nitdelhi.ac.in" />
                    {/* <TeamCard name="Tarang Srivastava" desig="Executive" img={Tarang} linkedin="https://www.linkedin.com/in/tarang-srivastava-72468b253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" email="mailto:221210109@nitdelhi.ac.in" /> */}


            </div>
        </div>
        </div>
    )
}

export default Executive




