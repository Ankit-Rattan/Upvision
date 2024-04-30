import React from 'react'
import linkedin from "../images/linkedin.png";
import email from "../images/email.png";
import { Link } from "react-router-dom";

const AlumProfile = (prop) => {
    return (
        <>

            <div className="flex justify-around  mb-[4rem] bg-zinc-800 hover:translate-y-2 text-gray-300 w-full p-[1rem] shadow-md shadow-emerald-400 rounded-md mb-[1rem ] hover:shadow-md duration-500">
                <div className='flex my-auto'>

                    {/* Pic */}
                    <div className="">
                        <img
                            className=" rounded-lg h-[18em] w-[17.5em] mx-[1rem]"
                            src={prop.img}
                            alt="Profile Image"
                        />
                        {/* Name */}
                        <div>
                            <p className="mt-[.5rem] namefont text-center text-2xl">
                                {prop.name}
                            </p>
                        </div>

                        {/* Desig */}
                        <div>
                            <p className="text-center desigfont">{prop.desig}</p>
                        </div>
                    </div>
                    {/* Social */}
                    <div className="mt-[1rem] justify-center gap-10">
                        <div>
                            <a
                                className="hover:shadow-md hover:opacity-80 duration-500"
                                href={prop.linkedin}
                            >
                                {" "}
                                <img className="h-[2rem]" src={linkedin} alt="linkedin" />
                            </a>
                        </div>
                        <div>
                            <a
                                className="cursor-pointer hover:shadow-md hover:opacity-80 duration-500"
                                href={prop.email}
                            >
                                <img className="h-[2rem]" src={email} alt="email" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>

                    <div className='flex justify-evenly'>


                        {/* Message */}
                        <div className="text-black text-justify p-[1rem] w-[50rem] text-xl  bg-zinc-400     shadow-white shadow-md">
                            <p>
                                {prop.mess}
                                <br />
                                <br />

                                Thanks and Regards
                                <br />
                                <br />

                                <b>
                                    {prop.name}
                                </b>
                                <br />
                                <b>
                                    {prop.work}
                                </b>

                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AlumProfile
