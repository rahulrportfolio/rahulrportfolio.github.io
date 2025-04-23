import { React, useRef, useState } from "react";
import data from "../assets/projects/netflixdb/data.png";
import er from "../assets/projects/netflixdb/ER.png";
import terminal from "../assets/projects/netflixdb/terminal.png";
import cat from "../assets/projects/cookieMonster/cat.png";
import matrixApp1 from "../assets/projects/matrixCalc/matrixApp1.png";
import matrixApp2 from "../assets/projects/matrixCalc/matrixApp2.png";
import matrixAppDemo from "../assets/projects/matrixCalc/matrixAppDemo.mp4"
import chemImg1 from "../assets/projects/chemicalLearn/chemImg1.png";
import chemImg2 from "../assets/projects/chemicalLearn/chemImg2.png";
import chemImg3 from "../assets/projects/chemicalLearn/chemImg3.png";
import chemImg4 from "../assets/projects/chemicalLearn/chemImg4.png";
import chemImg5 from "../assets/projects/chemicalLearn/chemImg5.png";
import chemImg6 from "../assets/projects/chemicalLearn/chemImg6.png";
import chemImg7 from "../assets/projects/chemicalLearn/chemImg7.png";
import chemImg8 from "../assets/projects/chemicalLearn/chemImg8.png";
import sustainHome from "../assets/projects/sustainTrail/sustainHome.png";
import sustainOnboarding from "../assets/projects/sustainTrail/sustainOnboarding.png";
import sustainProfile from "../assets/projects/sustainTrail/sustainProfile.png";
import susttainEvent from "../assets/projects/sustainTrail/sustainEvent.png";
import sustainSignUp from "../assets/projects/sustainTrail/sustainSignUp.png";

const Project = () => {
    const projectRefs = useRef({});

    const handleProjectClick = (title) => {
        if (projectRefs.current[title]) {
            projectRefs.current[title].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="bg bg-gray-300 min-h-screen flex flex-col items-center justify-center">
            <ProjectsCard onProjectClick={handleProjectClick} />

            <ProjectTemplateLeftNImg images={[
                sustainHome,
                sustainSignUp,
                sustainProfile,
                susttainEvent
            ]}
                title="SustainTrail"
                ref={(el) => (projectRefs.current["SustainTrail"] = el)}
                git=<a href="https://gitlab.com/mc-capstone/SustenanceAndroid"><b className=" text-blue-600 hover:text-amber-400">Github</b></a>
                bgColor="bg-emerald-400"
            >
                <div className="space-y-4">
                    <p>
                        SustainTrail will be an application that allows users across the U.S. to perform daily tasks that would reduce their carbon footprint. It will
                        promote a healthier lifestyle through a gamification of sustainable activities. These activities would change the user’s score based on what
                        they did; this score tells the user, and other users, how “sustainable” they are. The goal of SustainTrail is to minimize as much carbon footprint
                        as possible through the means of individual volition.
                    </p>

                    <h4 className="font-semibold underline decoration-double">Technologies Used</h4>

                    <ul className="list-disc list-inside">
                        <li>Kotlin</li>
                        <li>Jetpack Compose</li>
                        <li>Python</li>
                        <li>FastAPI</li>
                        <li>Firebase</li>
                        <li>Bitrise</li>
                        <li>Docker</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
            </ProjectTemplateLeftNImg>

            <ProjectTemplateNImg images={[
                chemImg1,
                chemImg2,
                chemImg3,
                chemImg4,
                chemImg5,
                chemImg6,
                chemImg7,
                chemImg8
            ]}
                title="ChemicalLearn"
                ref={(el) => (projectRefs.current["ChemicalLearn"] = el)}
                bgColor="bg-purple-400"
                git=<a href="https://github.com/CodeWithTejpratab/ChemicaLearn"><b className=" text-blue-600 hover:text-amber-400">Github</b></a>
            >
                <div className="text-white space-y-4">
                    <p>
                        A fun and interactive way to test your chemistry knowledge! This iOS app offers quizzes,
                        trivia, and challenges designed for students, teachers, and enthusiasts.
                    </p>

                    <h4 className="font-semibold underline">Features</h4>

                    <ul className="list-disc list-inside">
                        <li>🧪 Multiple-choice quizzes on various chemistry topics.</li>
                        <li>🎨 Mockups designed in Figma and Canva.</li>
                        <li>🔄 Integration of UIKit & SwiftUI for a seamless user experience.</li>
                        <li>📱 Designed an intuitive and user-friendly interface.</li>
                        <li>🌐 Backend powered by a GraphQL API (currently under development).</li>
                    </ul>

                    <h4 className="font-semibold underline">Technologies Used</h4>

                    <ul className="list-disc list-inside">
                        <li>UIKit: For initial app development.</li>
                        <li>SwiftUI: Added to enhance the interface with modern design patterns..</li>
                        <li>GraphQL: To enable efficient and flexible API queries.</li>
                        <li>Figma & Canva: For creating app mockups and visual designs.</li>
                    </ul>
                </div>

            </ProjectTemplateNImg>

            <ProjectTemplateOneImg
                ref={(el) => (projectRefs.current["Save The Cookie Monster"] = el)} image={cat}
                title="Save The Cookie Monster"
                git=<a href="https://github.com/CodeWithTejpratab/games"><b className=" text-blue-600 hover:text-amber-400">Github</b></a>
            >
                <p>
                    A captivating <strong className="text-3xl font-extrabold">React app</strong> centered around solving word puzzles to rescue our adorable feline friend,
                    the Cookie Monster! Inspired by a real cat. Whiskey is a wanted cat all around Cat City for stealing cookies.
                    Because of that, he has been given the name Cookie Monster. The Meow Corp is hot on his paws.
                    If he is caught, he'll be sentenced for life in Meow Pound. What are you waiting for?
                    Join the exciting journey of wordplay and adventure! This project was created with
                    <strong className="underline"> ReactJS</strong>, <strong className="underline">JavaScript</strong>, and <strong className="underline">HTML/CSS</strong>.
                    Feel free to view this project:
                    <a href="https://codewithtejpratab.github.io/games/">
                        <strong className="text-blue-600 hover:text-amber-400 underline decoration-double">
                            Play
                        </strong>
                    </a>
                </p>
            </ProjectTemplateOneImg>

            <ProjectTemplateNImgWithVideo images={[
                matrixApp1,
                matrixApp2
            ]}
                video={matrixAppDemo}
                title="Matrix Calculator"
                git=<a href="https://github.com/CodeWithTejpratab/MatrixCalculator"><b className=" text-blue-600 hover:text-amber-400">Github</b></a>
                ref={(el) => (projectRefs.current["Matrix Calculator"] = el)} image={cat}
                bgColor="bg-pink-800"
            >
                <div className="space-y-4">
                    <p>
                        Led a group of 4 in a IOS app project. Created a <b className="underline">Gauss</b> and <b className="underline">Gauss Jordan</b> matrix calculator using <b className="underline">Swift</b> and <b className="underline">SwiftUI</b> for the frontend GUI,
                        and <b className="underline">C++</b> for the backend. <b className="underline">Objective C</b> was used to bridge C++ and Swift. This app provides a simple way for users to interact with the Gauss Jordan
                        and Gauss algorithm, allowing user to solve systems of linear equations. The Gauss Jordan method is commonly used in chemistry to equalize chemical reactions.
                    </p>

                    <h4 className="font-semibold underline decoration-double">Design Consideration:</h4>

                    <ul className="list-disc list-inside">
                        <li>What was the purpose of the app.</li>
                        <li>What specific goals and objectives we wanted to achieve with the app.e</li>
                        <li>Create ways to test the app under various conditions to identify and resolve performance issues.</li>
                        <li>Design an intuitive and user-friendly interface</li>
                        <li>Prioritize a seamless user experience to encourage engagement and retention.</li>
                        <a href="https://github.com/CodeWithTejpratab/MatrixCalculator/blob/main/PreDesigns.png"><b className="text-3xl font-extrabold text-blue-600 hover:text-amber-400">Mockups</b></a>
                    </ul>
                </div>

            </ProjectTemplateNImgWithVideo>

            <ProjectTemplateImgRow
                images={[er, terminal, data]}
                title="Netflix Database"
                git={<a href="https://github.com/CodeWithTejpratab/Netflix-Database"> <b className="text-blue-600 hover:text-amber-400 font-bold">Github</b></a>}
                ref={(el) => (projectRefs.current["Netflix Database"] = el)}
                bgColor="bg-teal-600"
            >
                <div className="space-y-2">
                    <p>
                        Led a proficient team of three in the development of a robust Netflix Database system utilizing <b className="underline">MySQL</b>,
                        complemented by crafting an front-end terminal CLI interface using <b className="underline">Python</b>.
                    </p>
                    <h4 className="font-semibold underline decoration-double">Key Features:</h4>
                    <ul className="list-disc list-inside">
                        <li>User login system</li>
                        <li>Subscription plan</li>
                        <li>TV Show/Movie rating system</li>
                    </ul>
                    <a href="https://github.com/CodeWithTejpratab/Netflix-Database/blob/main/ER.png"> <b className="text-3xl font-extrabold text-blue-600 hover:text-amber-400">ER-Diagram</b></a>
                </div>
            </ProjectTemplateImgRow>;
        </div>
    );
}


export default Project;


const ProjectsCard = ({ onProjectClick }) => {
    const projects = [
        {
            title: "SustainTrail",
            image: sustainHome,
            tech: ["Kotlin", "Jetpack Compose", "Pyhton", "FastAPI", "Bitrise", "Firebase", "PostgreSQL", "Docker"],
        },
        {
            title: "ChemicalLearn",
            image: chemImg7,
            tech: ["Swift", "UIKit", "SwiftUI", "JavaScript", "GraphQL", "Firebase"],
        },
        {
            title: "Save The Cookie Monster",
            image: cat,
            tech: ["ReactJS", "JavaScript", "HTML/CSS"],
        },
        {
            title: "Matrix Calculator",
            image: matrixApp1,
            tech: ["Swift", "SwiftUI", "C++", "Objective C"],
        },
        {
            title: "Netflix Database",
            image: er,
            tech: ["Python", "MySQL"],
        }
    ];

    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({
            left: -300,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({
            left: 300,
            behavior: "smooth",
        });
    };

    return (
        <div className="w-full max-w-7xl min-h-screen flex items-center justify-center relative">
            <button
                onClick={scrollLeft}
                className="absolute left-0 text-black p-1 rounded-full hover:bg-purple-200"
            >
                &#8592;
            </button>
            <div
                ref={scrollContainerRef}
                className="w-11/12 overflow-x-auto flex gap-12 p-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        onClick={() => onProjectClick(project.title)}
                        className="
                        w-66
                        md:w-80
                        min-h-[350px] 
                        hover:scale-106 
                        duration-200
                        ease-in-out
                        snap-center 
                        rounded-3xl 
                        bg-gray-50 
                        p-4 shadow-lg 
                        flex flex-col 
                        items-center 
                        text-center 
                        flex-shrink-0 
                        border-red-300 
                        border-4 
                        border-double 
                        outline-2 
                        outline-dashed"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-48 w-full rounded-md object-contain"
                        />
                        <h2 className="mt-2 text-2xl md:text-3xl font-bold underline decoration-3 decoration-wavy decoration-indigo-800 text-black">
                            {project.title}
                        </h2>
                        <p className="mt-1 text-xl md:text-2xl font-semibold text-black">
                            {project.tech.join(", ")}
                        </p>
                    </div>
                ))}
            </div>
            <button
                onClick={scrollRight}
                className="absolute right-0 text-black p-1 rounded-full hover:bg-purple-200"
            >
                &#8594;
            </button>
        </div>
    );
};


const ProjectTemplateOneImg = ({ image, title, children, bgColor = "bg-red-400", ref, git }) => {
    return (
        <div className={`w-full min-h-screen flex items-center justify-center ${bgColor}`}>
            <div ref={ref} className={`${bgColor} max-w-7xl w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 p-6 pb-10`}>
                <img
                    src={image}
                    alt={title}
                    className="object-contain max-w-full h-auto md:max-w-md rounded-2xl"
                />
                <div className="flex flex-col text-white font-bold text-center md:text-left w-full">
                    <h1 className="text-3xl md:text-4xl font-extrabold">
                        <span className="underline decoration-double decoration-3 decoration-black">{title}</span>
                        <span className="ml-4">{git}</span>
                    </h1>
                    <div className="mt-2 text-lg md:text-2xl">{children}</div>
                </div>
            </div>
        </div>
    );
};


const ProjectTemplateNImg = ({ images, title, children, bgColor = "bg-red-400", ref, git }) => {
    return (
        <div className={`w-full min-h-screen flex items-center justify-center ${bgColor} p-6`}>
            <div
                ref={ref}
                className="max-w-7xl w-full min-h-screen flex flex-col md:flex-row items-center justify-between gap-10"
            >
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        <span className="underline decoration-cyan-400 decoration-wavy">{title}</span>
                        <span className="ml-4">{git}</span>
                    </h1>
                    <div className="text-white text-lg md:text-2xl space-y-4 font-bold">{children}</div>
                </div>

                <div className="content-center items-center justify-center w-full md:w-[40%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Image ${index + 1}`}
                            className={`object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${index % 3 === 0 ? "h-40 md:h-56" : "h-32 md:h-48"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


const ProjectTemplateLeftNImg = ({ images, title, children, bgColor = "bg-red-400", ref, git }) => {
    return (
        <div className={`w-full min-h-screen flex items-center justify-center ${bgColor} p-6`}>
            <div
                ref={ref}
                className={`${bgColor} max-w-7xl w-full min-h-screen flex flex-col md:flex-row items-center justify-between gap-10`}
            >
                <div className="content-center items-center justify-center w-full md:w-[40%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Image ${index + 1}`}
                            className={`object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${index % 3 === 0 ? "h-50 md:h-64" : "h-40 md:h-54"
                                }`}
                        />
                    ))}
                </div>

                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-black">
                        <span className="underline decoration-white decoration-dashed">{title}</span>
                        <span className="ml-4">{git}</span>
                    </h1>
                    <div className="text-black text-lg md:text-2xl space-y-4 font-bold">{children}</div>
                </div>
            </div>
        </div>
    );
};


const ProjectTemplateNImgWithVideo = ({ images, video, title, children, bgColor = "bg-red-400", ref, git }) => {
    return (
        <div className={`w-full min-h-screen flex items-center justify-center ${bgColor} p-6`}>
            <div
                ref={ref}
                className={`${bgColor} max-w-7xl w-full min-h-screen flex flex-col md:flex-row items-center justify-between gap-10`}
            >
                <div className="w-full md:w-[40%] flex flex-col items-center justify-center">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Image ${index + 1}`}
                                className="object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 h-40 md:h-56"
                            />
                        ))}
                    </div>

                    {video && (
                        <div className="w-full flex justify-center mt-6">
                            <video
                                src={video}
                                autoPlay
                                loop
                                muted
                                controlsList="nodownload nofullscreen noremoteplayback"
                                className="w-full max-w-md rounded-lg shadow-lg"
                            />
                        </div>
                    )}
                </div>

                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-cyan-200 text-center md:text-left">
                        <span className="underline decoration-cyan-700 decoration-dotted decoration-8">{title}</span>
                        <span className="ml-4">{git}</span>
                    </h1>
                    <div className="text-white text-lg md:text-2xl space-y-4 font-bold text-center md:text-left">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};


const ProjectTemplateImgRow = ({ images, title, children, bgColor = "bg-red-400", ref, git }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className={`w-full md:h-screen flex items-center justify-center ${bgColor}`}>
            <div
                ref={ref}
                className={`max-w-7xl w-full md:h-screen flex flex-col md:flex-col items-center justify-center gap-8 p-6`}
            >
                <div className="w-full flex flex-wrap justify-center gap-4">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Image ${index + 1}`}
                            className="object-cover rounded-lg shadow-lg transition-transform duration-300 w-40 md:w-66 hover:scale-105 cursor-pointer"
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </div>

                <div className="w-full md:w-1/2  flex flex-col items-center content-center justify-center gap-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-black">
                        <span className="underline decoration-amber-500 decoration-dotted decoration-9">{title}</span>
                        <span className="ml-4">{git}</span>
                    </h1>
                    <div className="text-black text-lg md:text-2xl space-y-4 font-bold">{children}</div>
                </div>
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
                    <div className="relative p-4 rounded-lg shadow-lg max-w-3xl w-full bg-white">
                        <button className="absolute top-2 right-2 text-xl font-bold text-rose-800" onClick={() => setSelectedImage(null)}>×</button>
                        <img src={selectedImage} alt="Selected" className="w-full h-auto rounded-lg" />
                    </div>
                </div>
            )}
        </div>
    );
};
