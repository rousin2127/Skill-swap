import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [filteredSkills, setFilteredSkills] = useState([]);
    const [sortType, setSortType] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        fetch("/skills.json")
            .then((res) => res.json())
            .then((data) => {
                setSkills(data);
                setFilteredSkills(data);
            })
            .catch((error) => console.error("Error loading skills:", error));
    }, []);

    // ------- FILTERING ----------
    useEffect(() => {
        let data = [...skills];

        if (categoryFilter) {
            data = data.filter((item) => item.category === categoryFilter);
        }

        // Apply sorting after filtering
        if (sortType === "price-asc") {
            data.sort((a, b) => a.price - b.price);
        } else if (sortType === "price-desc") {
            data.sort((a, b) => b.price - a.price);
        } else if (sortType === "rating-asc") {
            data.sort((a, b) => a.rating - b.rating);
        } else if (sortType === "rating-desc") {
            data.sort((a, b) => b.rating - a.rating);
        }

        setFilteredSkills(data);
    }, [sortType, categoryFilter, skills]);


    // Extract unique categories dynamically
    const categories = [...new Set(skills.map((skill) => skill.category))];

    return (
        <div className="w-11/12 m-auto my-10">

            {/* ------------ Sorting & Filtering Controls -------------- */}
            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">

                {/* Category Filter */}
                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="border border-gray-400 px-3 py-2 rounded"
                >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>

                {/* Sorting Dropdown */}
                <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                    className="border border-gray-400 px-3 py-2 rounded"
                >
                    <option value="">Sort By</option>
                    <option value="price-asc">Price: Low → High</option>
                    <option value="price-desc">Price: High → Low</option>
                    <option value="rating-asc">Rating: Low → High</option>
                    <option value="rating-desc">Rating: High → Low</option>
                </select>
            </div>

            {/* --------- Skills Grid ------------- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredSkills.map((skill) => (
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
                            <h3 className="text-xl font-semibold mb-2">
                                {skill.skillName}
                            </h3>
                            <p className="text-gray-600 mb-2 flex justify-center items-center gap-2">
                                <FaStar className="text-yellow-500" /> {skill.rating} / 5
                            </p>
                            <p className="text-blue-600 font-semibold mb-4">
                                ${skill.price} per session
                            </p>
                            <button
                                onClick={() => navigate(`/skills/${skill.skillId}`)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Skills;
