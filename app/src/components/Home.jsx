import React from "react";
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
    return (
        <div className="bg-gray-700 w-full h-screen flex flex-col md:flex-row md:gap-8 gap-8 p-10 justify-center items-center">
            <img className="size-50 sm:size-50 md:size-75 lg:size-100 shadow-xl rounded-full" alt="image" src={Me} />
            <div className="text-4xl font-bold text-center">
                <h1 className="text-4xl sm:text-4xl md:text-6xl font-black text-center">Hello, I'm Rahul</h1>
                <p className="text-2xl sm:text-2xl md:text-4xl">
                    A Software Engineer
                </p>
                <p className="text-2xl sm:text-2xl md:text-4xl">
                    with experience in both native iOS and Android development.
                    And yeah I do like to dabble in web development too ;).
                </p>
            </div>
        </div>
    );
}

const Skills = () => {
    return (
        <div className="bg-white w-full text-black text-center p-10">
            <h1 className="text-6xl font-bold underline mb-10">Skills</h1>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
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
                <SkillItem image={javascript} text="JavaScript" />
                <SkillItem image={react} text="ReactJS" />
                <SkillItem image={node} text="NodeJS" />
                <SkillItem image={htmlcss} text="HTML/CSS" />
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
            <h className="text-4xl font-extrabold underline">Contact Me</h>
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