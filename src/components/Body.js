import React from "react";
import team22 from "../assets/team22.jpeg";
import team23 from "../assets/team23.jpeg";
import GDGclass from "../assets/GDGclass.jpeg";
import gdgLogo from "../assets/gdgLogo.png";

const timelineData = [
    {
        year: "2024 - 2025",
        title: "Team 2024",
        description: "Our latest team, driving innovation and growth.",
        logoImage: `${gdgLogo}`,
        image: `${GDGclass}`, 
        link: "https://gdg.community.dev/u/mz6b4f/",
    },
    {
        year: "2023 - 2024",
        title: "Team 2023",
        description: "A year of challenges overcome and milestones achieved.",
        logoImage: `${gdgLogo}`,
        image: `${team23}`, 
        link: "https://gdg.community.dev/gdg-on-campus-maulana-abul-kalam-azad-university-of-technology-kalyani-india/",
    },
    {
        year: "2022 - 2023",
        title: "Team 2022",
        description: "Where our journey began, setting the foundation for success.",
        logoImage: `${gdgLogo}`,
        image: `${team22}`,
        link: "https://www.linkedin.com/company/dscmakaut/posts/?feedView=all",
    },
];

const Body = () => {
    return (
        <div className="bg-black text-white px-6 py-12 relative">
            <h2 className="text-5xl font-bold text-center mb-16">GDSC Timeline</h2>
            
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-screen"></div>

            <div className="relative space-y-16">
                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className={`relative flex items-center ${
                            index % 2 === 0
                                ? "justify-start text-right"
                                : "justify-end text-right"
                        }`}
                    >
                        {/* Timeline Circle */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 rounded-full flex items-center justify-center z-10">
                            <img
                                src={item.logoImage}
                                className="w-14 h-14 object-cover rounded-full"
                            />
                        </div>

                        {/* Timeline Card */}
                        <div
                            className={`flex relative max-w-lg p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg 
                                ${index % 2 === 0 ? "ml-12" : "mr-12"} 
                                hover:shadow-blue-500/50 transition-shadow duration-300`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <div className="">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-gray-400 mb-2">{item.year}</p>
                                <p className="text-gray-300 mb-4">{item.description}</p>
                                <a
                                href={item.link}
                                className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                                    >
                                View Team
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;