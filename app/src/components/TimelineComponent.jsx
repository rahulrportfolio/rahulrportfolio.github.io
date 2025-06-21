import React, { useState } from "react";
import { FaBriefcase, FaChevronDown, FaChevronUp, FaPrint } from "react-icons/fa";

const TimelineComponent = ({ experiences }) => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className={"min-h-screen bg-white text-gray-800"}>
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Professional Experience</h1>
                    <div className="flex gap-4">
                        <button
                            onClick={handlePrint}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Print timeline"
                        >
                            <FaPrint />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex flex-col items-center">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="flex w-full items-start mb-8">
                                {/* Timeline marker and line */}
                                <div className="flex flex-col items-center mr-6">
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 shadow-lg">
                                        <FaBriefcase className="text-white" />
                                    </div>
                                    {/* Only show line below if not last item */}
                                    {index !== experiences.length - 1 && (
                                        <div
                                            className="w-0.5 flex-1 bg-gray-300 dark:bg-gray-700"
                                            style={{ minHeight: "90px" }} 
                                        />
                                    )}
                                </div>
                                {/* Timeline card */}
                                <div className="flex-grow">
                                    <div
                                        className={`p-6 rounded-xl shadow-md bg-white border transition-all duration-200 cursor-pointer ${
                                            expandedId === exp.id
                                                ? "ring-2 ring-blue-500 scale-105"
                                                : "hover:shadow-xl hover:scale-[1.02]"
                                        } text-lg`}
                                        onClick={() => toggleExpand(exp.id)}
                                        onKeyPress={(e) => e.key === "Enter" && toggleExpand(exp.id)}
                                        tabIndex={0}
                                        role="button"
                                        aria-expanded={expandedId === exp.id}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-2xl font-bold">{exp.title}</h3>
                                                <p className="text-lg text-gray-800 dark:text-gray-700">{exp.company}</p>
                                                <p className="text-base text-gray-800 dark:text-gray-700">{exp.duration}</p>
                                            </div>
                                            <span className="ml-2 mt-1">
                                                {expandedId === exp.id ? <FaChevronUp /> : <FaChevronDown />}
                                            </span>
                                        </div>
                                        {expandedId === exp.id && (
                                            <div className="mt-4 space-y-4 animate-fadeIn">
                                                <img
                                                    src={exp.image}
                                                    alt={`${exp.company} workplace`}
                                                    className="w-full h-48 object-cover rounded-lg border"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                                                    }}
                                                />
                                                <p className="text-lg text-gray-800 dark:text-gray-700">{exp.description}</p>
                                                <div>
                                                    {Array.isArray(exp.achievements) && exp.achievements.length > 0 && (
                                                        <>
                                                            <h4 className="font-semibold mb-2">Key Achievements:</h4>
                                                            <ul className="list-disc list-inside space-y-1">
                                                                {exp.achievements.map((achievement, i) => (
                                                                    <li key={i} className="text-lg text-gray-800 dark:text-gray-700">
                                                                        {achievement}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimelineComponent;