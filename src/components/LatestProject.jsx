'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const LatestProject = () => {
  const projects = [
    {
      id: 1,
      image: "/images/flower4.jpg",
      client: "John Doe",
      category: "Web Development",
    },
    {
      id: 2,
      image: "/images/flower2.jpg",
      client: "John Doe",
      category: "Web Development",
    },
    {
      id: 3,
      image: "/images/flower3.jpg",
      client: "John Doe",
      category: "Web Development",
    },
    {
      id: 4,
      image: "/images/flower4.jpg",
      client: "John Doe",
      category: "Web Development",
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const aosCSS = document.createElement('link');
    aosCSS.rel = 'stylesheet';
    aosCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
    document.head.appendChild(aosCSS);

    const aosScript = document.createElement('script');
    aosScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
    aosScript.async = true;
    aosScript.onload = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: false,
        });
      }
    };
    document.body.appendChild(aosScript);

    return () => {
      document.head.removeChild(aosCSS);
      document.body.removeChild(aosScript);
    };
  }, []);

  return (
    <div className="bg-[#0F2A20] min-h-screen w-full px-4 py-12 md:px-12 lg:px-24 relative">
      <div className="absolute top-10 right-10 md:right-16 lg:right-24 z-10"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="0"
        data-aos-duration="1000">
        <img
          src="https://bestwpware.com/themes-wp/kulan/wp-content/uploads/2024/01/dots.png"
          alt="Decorative dots"
          className="w-16 md:w-24 h-auto"
        />
      </div>

      <div className="absolute bottom-0 left-0 z-0"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-offset="0"
        data-aos-duration="1000">
        <img
          src="https://bestwpware.com/themes-wp/kulan/wp-content/uploads/2024/01/fram1-1.png"
          alt="Half circle decoration"
          className="w-24 md:w-32 h-auto transform rotate-180"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <span className="inline-block bg-[#1E2E2B] text-[#F7D270] px-6 py-2 rounded-md text-lg font-bold tracking-wide">
            View Our Latest ProjecT
          </span>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
            Our Latest Case Studies For
          </h2>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
            Our Marketing Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-lg transition-all duration-300 h-80 md:h-96"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={project.image}
                  alt={`Project by ${project.client}  `}
                  fill
                  className="object-cover"
                />
                {hoveredId === project.id && (
                  <div className="absolute inset-0 bg-[#0F2A20]/40 transition-opacity duration-300"></div>
                )}
              </div>

              <div
                className={`absolute bottom-6 left-6  w-[45%] z-10 transition-all duration-300 rounded-lg ${hoveredId === project.id ? "bg-[#F7D270]/10" : ""}`}
              >
                <div className="bg-[#0F2A20] text-white p-4 rounded">
                  <div className="text-xs text-gray-300 mb-1">Client</div>
                  <div className="text-sm font-medium mb-1">{project.client}</div>
                  <div className="text-xs text-gray-300 mb-1">Category</div>
                  <div className="text-sm font-medium">{project.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProject;