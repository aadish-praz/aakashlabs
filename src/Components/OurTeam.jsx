import React from "react";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";

const OurTeam = () => {
  const teamMembers = [
    {
      img: photo1,
      name: "John Doe",
      designation: "CEO",
    },
    {
      img: photo2,
      name: "Jaden Smith",
      designation: "Lead Developer",
    },
    {
      img: photo3,
      name: "Alice Johnson",
      designation: "UI/UX Designer",
    },

    {
      img: photo4,
      name: "Rama shrestha",
      designation: "Software Engineer",
    },

    {
      img: photo5,
      name: "Sita Pradhan",
      designation: "HR",
    },

    {
      img: photo6,
      name: "May Johnson",
      designation: "Graphics Desginer",
    },

    {
      img: photo7,
      name: "Sam",
      designation: "Finance Manager",
    },

    {
      img: photo8,
      name: "Gary Linker",
      designation: "Marketing Officer",
    },
  ];

  return (
    <div id="team" className="py-6 bg-gray-50">
      <h1 className="text-3xl mb-4 font-bold text-center ">The Team</h1>


      <div className="flex flex-wrap justify-center gap-12 px-20">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <img
              src={member.img}
              alt={member.name}
              className="h-[250px] w-[250px] object-cover rounded-full shadow-md"
            />
            <p className="text-lg font-semibold text-gray-800">{member.name}</p>
            <p className="text-sm text-gray-500">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
