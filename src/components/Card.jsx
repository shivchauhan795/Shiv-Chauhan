import React, { useState } from 'react'
import android from '../assets/technologies/android.svg'
import java from '../assets/technologies/java.svg'
import vscode from '../assets/technologies/vscode.svg'
import html from '../assets/technologies/html.svg'
import css from '../assets/technologies/css.svg'
import js from '../assets/technologies/js.svg'
import react from '../assets/technologies/react.svg'
import firebase from '../assets/technologies/firebase.svg'
import tailwind from '../assets/technologies/tailwind.svg'
import github from '../assets/social/github.svg'
import redux from '../assets/technologies/redux.svg'
import postman from '../assets/technologies/postman.svg'
import mongo from '../assets/technologies/mongodb.svg'
import nodejs from '../assets/technologies/nodejs.svg'
import aws from '../assets/technologies/aws.svg'
import secondBrain from '../assets/secondBrain.png'
import nextjs from '../assets/technologies/nextjs.svg'
import prisma from '../assets/technologies/prisma.svg'
const Card = () => {
    const [values, setValues] = useState([
        // <img src="" alt="brain">
        {
            img: secondBrain,
            name: "Second Brain",
            description: "One stop solution for your goto links",
            tech: [nextjs, prisma, tailwind, github, aws, nodejs, vscode, postman],
            codeLink: "https://github.com/shivchauhan795/second-brain",
            liveLink: "https://second-brain.shivchauhan.com/",
        },
        {
            img: "https://chat.shivchauhan.com/assets/favicon-BAZAmbJW.svg",
            name: "Chat App",
            description: "100% Secure Chap App with Rooms",
            tech: [html, css, react, vscode, tailwind, github, aws, nodejs, postman],
            codeLink: "https://github.com/shivchauhan795/chat-app/",
            liveLink: "https://chat.shivchauhan.com/",
        },
        {
            img: "https://enlacee.vercel.app/assets/favicon-vmh91X9M.gif",
            name: "Enlacee",
            description: "Your own URL Shortner",
            tech: [html, css, react, vscode, tailwind, github, mongo, nodejs, postman],
            codeLink: "https://github.com/shivchauhan795/Enlacee",
            liveLink: "https://enlacee.vercel.app/",
        },
        {
            img: "https://selectify.netlify.app/assets/favicon-CJHnA_K7.png",
            name: "Selectify",
            description: "A Tool that helps photographers to get photos selected",
            tech: [html, css, react, vscode, tailwind, github, redux, firebase, mongo, nodejs, postman],
            codeLink: "https://github.com/shivchauhan795/Selectify",
            liveLink: "https://selectify.netlify.app/",
        },
        {
            img: "https://eventoz.netlify.app/assets/favicon-D1-h0gBE.png",
            name: "Eventoz",
            description: "Your own Event Handler",
            tech: [html, css, react, vscode, tailwind, github, redux, mongo, nodejs, postman],
            codeLink: "https://github.com/shivchauhan795/Eventoz",
            liveLink: "https://eventoz.netlify.app/",
        },
        {
            img: "https://tracktally.netlify.app/assets/favicon-DEfSYZkE.png",
            name: "TrackTally",
            description: "Your Trusted Money Tracking Website",
            tech: [html, css, react, vscode, tailwind, github, redux, postman],
            codeLink: "https://github.com/shivchauhan795/TrackTally",
            liveLink: "https://tracktally.netlify.app/",
        },
        {
            img: "https://keyshield.netlify.app/assets/logo-BFPI99lc.svg",
            name: "KeyShield",
            description: "Your Trusted Password Manager",
            tech: [html, css, react, vscode, tailwind, github],
            codeLink: "https://github.com/shivchauhan795/KeyShield",
            liveLink: "https://keyshield.netlify.app/",
        },
        // {
        //     img: "https://github.com/shivchauhan795/Chatter-Application/blob/main/src/assets/favicon.png?raw=true",
        //     name: "Chatter Application",
        //     description: "A Chat Application with Custom Room ID. Login with Google Sign In. Real Time Synchronization of chats.",
        //     tech: [html, css, react, firebase, github],
        //     codeLink: "https://github.com/shivchauhan795/Chatter-Application",
        //     liveLink: "https://chatter-application.netlify.app/",
        // },
        {
            img: "https://raw.githubusercontent.com/shivchauhan795/QR-Textify/main/favicon.ico",
            name: "QR Textify",
            description: "A Tool that converts text into a customizable QR Code. It is fully customizable and saved in different formats. ",
            tech: [html, css, js, vscode, github],
            codeLink: "https://github.com/shivchauhan795/QR-Textify",
            liveLink: "https://shivchauhan795.github.io/QR-Textify/",
        },
        {
            img: "https://play-lh.googleusercontent.com/WF4qXzM7bWiqMj3UhC6uIT0r1no86K5fNRVIAAhebknV4gMyxTPdPCH4gr0VIX58fV6Q=w240-h480-rw",
            name: "CSE Notes",
            description: "Notes Application for CSE students to find quality notes. It has more than 10,000+ Downloads on Play Store.",
            tech: [android, java, github],
            codeLink: "https://github.com/shivchauhan795/CSE-Notes",
            liveLink: "https://play.google.com/store/apps/details?id=com.shivchauhan.csenotes&hl=en_IN&gl=US",
        },
    ]);

    const handleClick = (link) => {
        window.open(link, '_blank');
    }

    return (
        <div className="flex flex-wrap gap-10 justify-center">

            {values.map((value, index) => (

                <div key={index} className='h-100 w-56 p-2 rounded-3xl border background_color card_border hover:scale-110 transition-all'>

                    <img src={value.img} alt={value.name} className='size-fit border-b rounded-t-3xl h-32 w-56 background_color card_border pb-2' />

                    <h2 className='text-center uppercase p-2 background_color'>{value.name}</h2>

                    <p className='text-xs px-1 background_color'>{value.description}</p>

                    <h2 className='text-center uppercase text-sm p-2 mt-3 background_color'>Technologies Used</h2>

                    <div className='flex flex-wrap gap-2 justify-center background_color'>

                        {value.tech.map((tech, techIndex) => (
                            <img key={techIndex} src={tech} alt={`tech-${techIndex}`} className='size-8 background_color hover:scale-110 transition-all' />
                        ))}

                    </div>

                    <div className='flex background_color justify-evenly mt-5 mb-2 gap-3'>

                        <button onClick={() => handleClick(value.codeLink)} className='view_all border px-2 text-lg rounded hover:scale-110 transition-all'>View Code</button>
                        <button onClick={() => handleClick(value.liveLink)} className='background_color border px-2 text-lg rounded card_border hover:scale-110 transition-all'>Live Link</button>

                    </div>

                </div>

            ))}

        </div>
    );
}

export default Card;
