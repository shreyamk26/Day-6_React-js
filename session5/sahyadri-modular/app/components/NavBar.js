import React from "react";

export default function NavigationBar(props) {
  return (
    <nav className="flex flex-col md:flex-row justify-between text-sm md:text-lg font-bold p-4 bg-gray-100">
      <img
        src="https://www.sahyadri.edu.in/images/logo.svg"
        alt="Sahyadri Logo"
        width={200}
      />
      <div className="flex flex-row space-x-5">
        <a href="#about">About</a>
        <a href="#academics">Academics</a>
        <a href="#admissions">Admissions</a>
        <a href="#life-at-sahyadri">Life at Sahyadri</a>
        <a href="#placement">Placement</a>
        <a href="#recruitment">Recruitment</a>
      </div>
    </nav>
  );
}