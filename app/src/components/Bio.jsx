import React from "react";
import Me from "../assets/Rahul.JPG?url";
import { Contact } from "./Home";

const Bio = () => {
    return (
        <div className="bg-white h-full w-full flex items-center justify-center text-black">
            <div className="max-w-7xl w-full">
                <About />
                <Education />
                <Contact />
            </div>
        </div>
    );
};

export default Bio;

const About = () => {
    return (
        <div>
            <section class="text-1xl sm:text-1xl md:text-2xl h-full mx-auto p-12 bg-white mt-14">
                <h1 class="text-4xl sm:text-4xl md:text-6xl font-bold text-gray-800 underline decoration-wavy decoration-cyan-500 pb-5">About Me</h1>
                <p class="text-gray-600 mb-4">
                    Hey there! I'm a <span class="font-semibold">developer</span> passionate about building things that are
                    <span class="font-semibold"> useful, efficient, and easy to use</span>. I work have with
                    <span class="text-blue-500"> Android (Kotlin, Jetpack Compose, MVVM)</span> and
                    <span class="text-blue-500"> iOS (SwiftUI, UIKit, iOS SDK)</span>. I also have experience with
                    <span class="text-blue-500"> RESTful APIs, FastAPI, Docker, BASH and Linux</span>.
                </p>
                <p class="text-gray-600 mb-4">
                    I recently completed my <span class="text-green-600">computer science degree</span>, Where I built a strong foundation in core
                    computer science concepts like operating systems, computer architecture, and database systems. Throughout my studies, 
                    I worked on various projects that deepened my understanding of mobile development and operating systems. Now, 
                    I'm focused on applying and expanding my skills in the real world, whether in <strong class="text-purple-600">DevOps</strong>, <strong class="text-purple-600">systems engineering</strong>, <strong class="text-purple-600">data science</strong>,
                    or <strong class="text-purple-600">software development</strong>. I am constantly learning and refining my approach to building reliable software system.
                </p>
                <p class="text-gray-600 mb-4">
                    Beyond coding, I'm interested in how <span class="font-semibold">technology can provide personalized solutions
                    in healthcare and finance</span>, whether through <span class="font-semibold">financial education</span> or
                    tailored user experiences. I believe that well-designed applications can make a meaningful impact, and I’m excited
                    to contribute to that space.
                </p>
                <p class="text-gray-600">
                    I love solving problems, staying up to date with new technologies, and continuously improving as a developer. My
                    goal is to keep growing, take on challenging projects, and build solutions that people find truly helpful.
                </p>
                <div className="flex items-center gap-2 pt-10">
                    <img src={Me} className="size-6 rounded-full" />
                    <p>Rahul Ramjeawon</p>
                </div>
            </section>
        </div>
    );
}

const Education = () => {
    return (
        <div className="bg-gray-100 py-10 px-6 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-center text-4xl underline decoration-wavy decoration-indigo-500 font-semibold text-gray-800 mb-12">Education</h2>
                <div className="sm:text-1xl md:2xl grid grid-cols-1 bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-extrabold text-gray-800">Bachelor of Science in Computer Science</h3>
                    <p className="text-gray-600 mt-2 md:text-2xl font-semibold">Manhattan University, 2021 - 2025</p>
                    <p className="text-gray-600 mt-2 md:text-2xl font-semibold">Concentration in Artificial Intelligence and Machine Learning.</p>
                </div>
            </div>
        </div>
    );
};
