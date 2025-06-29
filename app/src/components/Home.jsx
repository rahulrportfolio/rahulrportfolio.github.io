import { useState, React } from "react";
import { motion } from "framer-motion";
import Me from "../assets/Rahul.JPG?url";
import swift from "../assets/skills/swift.png";
import java from "../assets/skills/java.png";
import python from "../assets/skills/python.png";
import docker from "../assets/skills/docker.png";
import cpp from "../assets/skills/c-.png";
import api from "../assets/skills/api.png";
import social from "../assets/skills/social.png";
import kotlin from "../assets/skills/kotlin.png";
import graphql from "../assets/skills/graphql.png";
import figma from "../assets/skills/figma.png";
import react from "../assets/skills/react.png";
import javascript from "../assets/skills/javascript.png";
import node from "../assets/skills/node.png";
import htmlcss from "../assets/skills/htmlcss.png";
import firebase from "../assets/skills/firebase.png";
import mysql from "../assets/skills/mysql.png";
import github from "../assets/contact/github.png";
import gmail from "../assets/contact/gmail.png";
import linkedin from "../assets/contact/linkedin.png";
import cSharp from "../assets/skills/c-sharp.png";
import checken from "../assets/checken.png";
import bash from "../assets/skills/bash.png";
import linux from "../assets/skills/linux.png";

const Home = () => {
    return (
        <div className="justify-center h-full w-full">
            <Intro />
            <Skills />
            <Contact />
        </div>
    );
}
export default Home;

const Intro = () => {
    const [showChicken, setShowChicken] = useState(true);
    return (
        <div className={`bg-gray-700 w-full min-h-screen flex items-center justify-center`}>
            <div className="max-w-7xl h-screen flex flex-col md:flex-row md:gap-8 gap-8 p-10 justify-center items-center">
                <img className="size-50 sm:size-50 md:size-75 lg:size-100 shadow-xl rounded-full" alt="image" src={Me} />
                <div className="text-4xl text-white font-bold text-center">
                    <h1 className="text-4xl sm:text-4xl md:text-6xl font-black text-center">Hello, I'm Rahul</h1>
                    <p className="text-2xl sm:text-2xl md:text-4xl">
                        Just a guy who wanted to know how his computers worked 
                    </p>
                    <p className="text-2xl sm:text-2xl md:text-4xl">
                    and ended up building native apps for both iOS and Android. 
                    Somewhere along the way (college), I picked up an interest in operating systems (turns out lazy allocation isn't so lazy after all 😉).
                    </p>
                </div>
                {showChicken && (
                    <motion.img 
                        src={checken}
                        alt="Chicken on a rocker"
                        className="absolute top-30 left-[-150px] w-40"
                        animate={{ x: "100vw" }}
                        transition={{ duration: 10, ease: "linear" }}
                        onAnimationComplete={() => setShowChicken(false)}
                    />
                )}
            </div>
        </div>
    );
}

const Skills = () => {
    return (
        <div className="bg-white w-full text-black text-center p-10">
            <h1 className="text-6xl font-bold underline decoration-wavy decoration-red-500 mb-10">Skills</h1>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
                <SkillItem image={linux} text="Linux" />
                <SkillItem image={bash} text="BASH" />
                <SkillItem image={kotlin} text="Kotlin" />
                <SkillItem image={swift} text="Swift" />
                <SkillItem image={python} text="Python" />
                <SkillItem image={cpp} text="C++" />
                <SkillItem image={java} text="Java" />
                <SkillItem image={mysql} text="MySQL" />
                <SkillItem image={docker} text="Docker" />
                <SkillItem image={api} text="REST API" />
                <SkillItem image={graphql} text="GraphQL" />
                <SkillItem image={firebase} text="Firebase" />
                <SkillItem image={social} text="Git" />
                <SkillItem image={figma} text="Figma" />
                {/* <SkillItem image={javascript} text="JavaScript" /> */}
                {/* <SkillItem image={react} text="ReactJS" /> */}
                {/* <SkillItem image={node} text="NodeJS" /> */}
                {/* <SkillItem image={htmlcss} text="HTML/CSS" /> */}
                {/* <SkillItem image={cSharp} text="C#" /> */}
            </div>
        </div>
    );
};

const SkillItem = ({ image, text }) => {
    return (
        <div className="flex flex-col items-center gap-6">
            <img className="hover:scale-120 transition ease-in-out size-10 sm:size-10 md:size-15 lg:size-20 shadow-xl rounded-full" alt={text} src={image} />
            <p className="text-2xl">
                {text}
            </p>
        </div>
    );
}

const Contact = () => { 
    return (
        <div className="bg-white w-full text-black flex-col p-10">
            <hr className="border-gray-300 rounded-md border-t-4 p-6"></hr>
            <h className="text-4xl font-extrabold underline decoration-wavy decoration-pink-500">Contact Me</h>
            <p className="text-2xl">Feel free to reach out to me via email or social media!</p>
            <div className="flex gap-4 mt-4">
                <a href="mailto:tejinquiries@gmail.com"><img src={gmail} alt="gmail" width="30" height="30" /></a>
                <a href="https://www.linkedin.com/in/rahulramjeawon/" target="_blank"><img src={linkedin} alt="linkedin" width="30" height="30" /></a>
                <a href="https://github.com/CodeWithTejpratab" target="_blank"><img src={github} alt="github" width="30" height="30" /></a>
            </div>
        </div>
    );
}

export { Contact };