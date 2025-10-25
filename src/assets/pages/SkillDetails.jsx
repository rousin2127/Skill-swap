import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import toast from "react-hot-toast"; 

const SkillDetails = () => {
  const { id } = useParams(); 
  const [skill, setSkill] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  
  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const foundSkill = data.find(
          (item) => item.skillId === parseInt(id)
        );
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

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields!");
      return;
    }

    toast.success("Session booked successfully!");
    setFormData({ name: "", email: "" }); 
  };

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

          <div className="flex justify-between items-center mb-6">
            <span className="text-blue-600 font-semibold text-xl">
              ${skill.price} / session
            </span>
          </div>

          {/*  book session form */}
          <div className="border-t pt-6 mt-6">
            <h3 className="text-2xl font-semibold mb-4">Book Session</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="btn btn-neutral w-full mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
