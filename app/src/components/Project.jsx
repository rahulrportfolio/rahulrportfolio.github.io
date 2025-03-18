import React from "react";
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
    return (
        <div className="bg-gray-300 h-full items-center justify-center content-center">
            <ProjectsCard />
            <ProjectTemplateOneImg image={cat} title="Save The Cookie Monster">
                <p>
                    A captivating React app centered around solving word puzzles
                    to rescue our adorable feline friend, the Cookie Monster!
                    Inspired by a real cat. Whiskey is a wanted cat all around
                    Cat City for stealing cookies. Because of that he has been
                    given the name Cookie Monster. The meow corp is hot on his paws.
                    If he is caught he'll be sentenced for life in Meow Pound.
                    What are you waiting for? Join the exciting journey of wordplay
                    and adventure! This project was created with React, JavaScript, and HTML/CSS.
                    Feel free the view this project: Play.
                </p>
            </ProjectTemplateOneImg>
        </div>
    );
}
export default Project;

const ProjectsCard = ({ }) => {
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
            title: "Matrix Calcultor",
            image: matrixApp1,
            tech: ["Swift", "SwiftUI", "C++"],
        },
        {
            title: "Netflix DataBase",
            image: er,
            tech: ["Python", "Mysql"],
        }
    ];

    return (
        <div className="w-full max-w-7xl h-screen flex items-center justify-center">
            <div className="w-11/12 overflow-x-auto flex gap-12 p-4 snap-x snap-mandatory scrollbar-hide scroll-smooth">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="
                        w-66
                        md:w-80
                        min-h-[350px] 
                        hover:scale-110 
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
                        <p className="mt-1 text-1xl md:text-2xl font-semibold text-black">
                            {project.tech.join(", ")}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const ProjectTemplateOneImg = ({ image, title, children, bgColor = "bg-red-400" }) => {
    return (
        <div className={`w-full h-full ${bgColor}`}>
            <div className={`max-w-7xl md:h-screen p-6 pb-12 flex gap-6 flex-col md:flex-row items-center justify-center gap-4 ${bgColor}`}>
                <img
                    src={image}
                    alt={title}
                    className="object-contain max-w-full h-auto md:max-w-md rounded-2xl"
                />
                <div className={`flex flex-col text-white font-bold text-center md:text-left ${bgColor}`}>
                    <h1 className="text-4xl md:text-5xl font-extrabold underline decoration-double decoration-3 decoration-black">{title}</h1>
                    <div className="mt-2 text-2xl md:4xl">{children}</div>
                </div>
            </div>
        </div>
    );
};
