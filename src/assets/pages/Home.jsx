import React from "react";
import HeroSlider from "../components/HeroSlider";
import Skills from "./Skills";
import { GiStarFormation } from "react-icons/gi";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { SiSearxng } from "react-icons/si";
import { BsCalendar3, BsRocketTakeoff } from "react-icons/bs";
import PopularSkills from "./PopularSkills";

const Home = () => {
  const topProviders = [
    {
      id: 1,
      name: "Sarah Johnson",
      skill: "Web Development",
      rating: 4.9,
      image:
        "https://img.freepik.com/free-photo/portrait-smiling-handsome-man-eyeglasses_171337-4853.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      skill: "Graphic Design",
      rating: 4.8,
      image:
        "https://img.freepik.com/free-photo/portrait-smiling-handsome-man-eyeglasses_171337-4853.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 3,
      name: "Emma Davis",
      skill: "Digital Marketing",
      rating: 4.7,
      image:
        "https://img.freepik.com/free-photo/portrait-smiling-handsome-man-eyeglasses_171337-4853.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

  return (
    <div className="w-11/12 m-auto">
      <HeroSlider></HeroSlider>
      <section className="mt-10">
        <PopularSkills></PopularSkills>
      </section>

      {/* top provider section  */}
      <section className="mt-16">
        <h3 className="font-bold md:text-3xl mb-5 text-center flex items-center justify-center gap-2">
          <GiStarFormation className="text-yellow-500"></GiStarFormation> Top Rated Providers
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {topProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-white shadow-md rounded-2xl p-5 text-center hover:shadow-xl transition"
            >
              <img
                src={provider.image}
                alt={provider.name}
                className="w-24 h-24 rounded-full mx-auto object-cover mb-3"
              />
              <h4 className="text-xl font-semibold">{provider.name}</h4>
              <p className="text-gray-600">{provider.skill}</p>
              <p className="text-yellow-500 font-medium mt-1 flex items-center justify-center gap-2">
                <FaStar className="text-yellow-500"></FaStar> {provider.rating} / 5.0
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* how to work section */}
      <section className="mt-20 bg-gray-50 py-10 rounded-2xl">
        <h3 className="font-bold md:text-3xl mb-8 text-center flex justify-center items-center gap-2">
          <IoSettings className="text-gray-600"></IoSettings> How It Works
        </h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-5 ">
            <div className="text-5xl mb-3 flex justify-center items-center text-cyan-800 "><SiSearxng></SiSearxng></div>
            <h4 className="text-xl font-semibold mb-2">1. Browse Skills</h4>
            <p className="text-gray-600">
              Explore hundreds of skills offered by experienced professionals.
            </p>
          </div>
          <div className="p-5">
            <div className="text-5xl mb-3 flex justify-center items-center "><BsCalendar3 /></div>
            <h4 className="text-xl font-semibold mb-2">2. Book a Session</h4>
            <p className="text-gray-600">
              Pick your desired time and connect with your chosen provider.
            </p>
          </div>
          <div className="p-5">
            <div className="text-5xl mb-3 flex justify-center items-center "><BsRocketTakeoff className="text-red-400"></BsRocketTakeoff></div>
            <h4 className="text-xl font-semibold mb-2">3. Learn & Grow</h4>
            <p className="text-gray-600">
              Start your personalized learning journey and upgrade your skills.
            </p>
          </div>
        </div>
      </section>

      {/* extra section ?” */}
      <section className="mt-20 py-10">
        <h3 className="font-bold md:text-3xl mb-8 text-center flex items-center justify-center gap-2">
          <RiLightbulbFlashFill className="text-yellow-500"></RiLightbulbFlashFill> Why Choose SkillSwap?
        </h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-5 border rounded-xl hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Trusted Experts</h4>
            <p className="text-gray-600">
              Learn directly from verified, highly rated instructors in every
              field.
            </p>
          </div>
          <div className="p-5 border rounded-xl hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Flexible Learning</h4>
            <p className="text-gray-600">
              Book sessions that fit your schedule — online or offline.
            </p>
          </div>
          <div className="p-5 border rounded-xl hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Community Support</h4>
            <p className="text-gray-600">
              Join our learning community and grow alongside passionate peers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
