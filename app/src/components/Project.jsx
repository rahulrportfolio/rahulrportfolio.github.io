import { React, useRef } from "react";
import data from "../assets/projects/netflixdb/data.png";
import er from "../assets/projects/netflixdb/ER.png";
import terminal from "../assets/projects/netflixdb/terminal.png";
import cat from "../assets/projects/cookieMonster/cat.png";
import matrixApp1 from "../assets/projects/matrixCalc/matrixApp1.png";
import matrixApp2 from "../assets/projects/matrixCalc/matrixApp2.png";
import chemImg1 from "../assets/projects/chemicalLearn/chemImg1.png";
import chemImg2 from "../assets/projects/chemicalLearn/chemImg2.png";
import chemImg3 from "../assets/projects/chemicalLearn/chemImg3.png";
import chemImg4 from "../assets/projects/chemicalLearn/chemImg4.png";
import chemImg5 from "../assets/projects/chemicalLearn/chemImg5.png";
import chemImg6 from "../assets/projects/chemicalLearn/chemImg6.png";
import chemImg7 from "../assets/projects/chemicalLearn/chemImg7.png";
import chemImg8 from "../assets/projects/chemicalLearn/chemImg8.png";

const Project = () => {
    const projectRefs = useRef({});

    const handleProjectClick = (title) => {
        if (projectRefs.current[title]) {
            projectRefs.current[title].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (

        <div className="bg-gray-300 min-h-screen flex flex-col items-center justify-center">
            <ProjectsCard onProjectClick={handleProjectClick} />

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
        </div>
    );
}
export default Project;

const ProjectsCard = ({ onProjectClick }) => {
    const projects = [
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
            tech: ["Swift", "SwiftUI", "C++"],
        },
        {
            title: "Netflix Database",
            image: er,
            tech: ["Python", "MySQL"],
        }
    ];

    return (
        <div className="w-full max-w-7xl min-h-screen flex items-center justify-center">
            <div className="w-11/12 overflow-x-auto flex gap-12 p-4 snap-x snap-mandatory scrollbar-hide scroll-smooth">
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
        </div>
    );
}

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
                    <div className="text-white text-lg md:text-xl space-y-4">{children}</div>
                </div>

                <div className="w-full md:w-[40%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Image ${index + 1}`}
                            className={`object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${index % 3 === 0 ? "h-40 md:h-56" : "h-32 md:h-48"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

