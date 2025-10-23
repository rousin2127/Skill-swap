import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const SkillDetails = () => {
    const { id } = useParams();                                     // get skill ID from URL
    const [skill, setSkill] = useState('');

    useEffect(() => {
        fetch("/skills.json")
            .then((res) => res.json())
            .then((data) => {
                const foundSkill = data.find((item) => item.skillId === parseInt(id));
                setSkill(foundSkill);
            });
    }, [id]);

    if (!skill) {
        return (
            <div className="text-center mt-20 text-xl text-gray-600">
                Loading skill details...
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
                <img
                    src={skill.image}
                    alt={skill.skillName}
                    className="w-full h-64 object-cover"
                />
                <div className="p-6">
                    <h2 className="text-3xl font-bold mb-3">{skill.skillName}</h2>
                    <p className="text-gray-600 mb-2">
                        <strong>Provider:</strong> {skill.providerName}
                    </p>
                    <p className="text-gray-600 mb-2">
                        <strong>Email:</strong> {skill.providerEmail}
                    </p>
                    <p className="text-gray-600 mb-2">
                        <strong>Category:</strong> {skill.category}
                    </p>
                    <p className="text-gray-600 mb-2">
                        <strong>Slots Available:</strong> {skill.slotsAvailable}
                    </p>
                    <p className="text-gray-700 mt-4 mb-6">{skill.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-blue-600 font-semibold text-xl">
                            ${skill.price} / session
                        </span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition">
                            Book Session
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillDetails;
