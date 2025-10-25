import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/skills.json")
            .then((res) => res.json())
            .then((data) => setSkills(data))
            .catch((error) => console.error("Error loading skills:", error));
    }, []);

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10 ">
            {skills.map((skill) => (
                <div
                    key={skill.skillId}
                    className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
                    data-aos="zoom-in"
                >
                    <img
                        src={skill.image}
                        alt={skill.skillName}
                        className="h-52 w-full object-cover"
                    />
                    <div className="p-5 text-center">
                        <h3 className="text-xl font-semibold mb-2">{skill.skillName}</h3>
                        <p className="text-gray-600 mb-2 flex justify-center items-center gap-2"><FaStar className="text-yellow-500"></FaStar> {skill.rating} / 5</p>
                        <p className="text-blue-600 font-semibold mb-4">
                            ${skill.price} per session
                        </p>
                        <button onClick={() => navigate(`/skills/${skill.skillId}`)} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition">
                            View Details
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
