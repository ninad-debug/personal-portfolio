import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Thanks for taking the time to visit my profile. I am a highly
          motivated and results-driven software engineer. My passion for web
          technologies and my commitment to making the web a better and more
          accessible place drive me to create innovative and user-friendly web
          applications.
        </p>

        <br />

        <p className="text-xl">
          With expertise in modern web technologies such as HTML5, CSS3,
          JavaScript, ES6, React, and Tailwind, I have a strong foundation in
          creating engaging and visually appealing applications. I am passionate
          about staying up-to-date with the latest web development trends and
          best practices.
        </p>
      </div>
    </div>
  );
};

export default About;
