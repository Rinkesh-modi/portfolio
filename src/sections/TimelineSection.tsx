"use client";
import { SectionHeader } from "@/components/SectionHeader";
import React, { useEffect, useRef, useState } from "react";

// const timelineData = [
//   {
//     day: "Day 1",
//     title: "Helsinki, Finland",
//     description: [
//       "Your adventure begins with a one-night stay in Helsinki, Finland's capital.",
//     ],
//     comments: "19 Comments",
//     align: "left",
//   },
//   {
//     day: "Day 2",
//     title: "Embarkation Day in Murmansk",
//     description: [
//       "From Helsinki, your charter flight will take you to Murmansk, Russia...",
//     ],
//     comments: "35 Comments",
//     align: "right",
//   },
//   {
//     day: "Day 3-6",
//     title: "Northbound in the Arctic Ocean",
//     description: [
//       "Watching the ship crush through the Arctic ice pack is a sight...",
//       "You can expect days, and hours, to present variable sailing conditions...",
//     ],
//     comments: "72 Comments",
//     align: "left",
//   },
//   {
//     day: "Day 7",
//     title: "90° North",
//     description: [
//       "All of the anticipation of the past few days reaches a climax as you reach the North Pole...",
//     ],
//     comments: "132 Comments",
//     align: "right",
//   },
//   {
//     day: "Day 8",
//     title: "Southbound in the Arctic Ocean",
//     description: [
//       "Now you can sit back and relax, everything from here on out is a bonus...",
//     ],
//     comments: "2 Comments",
//     align: "left",
//   },
//   {
//     day: "Day 9-10",
//     title: "Franz Josef Land",
//     description: [
//       "Now you can sit back and relax, everything from here on out is a bonus...",
//     ],
//     comments: "12 Comments",
//     align: "right",
//   },
// ];
const experienceData = [
  {
    title: "Frontend Engineer",
    company: "Stealth Startup",
    year: "11/2024 - Present",
    location: "Remote",
    results: [
      "Built landing pages and dashboards using React.js, Tailwind CSS, Axios, and Redux.",
      "Integrated with backend APIs for subcontractor and contractor workflows.",
      "Implemented Document AI and Schedule AI tools to automate project planning.",
      "Developed cross-platform features with React Native for mobile consistency.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Carelon Global Solutions",
    year: "07/2023 - 10/2024",
    location: "Bengaluru, KA",
    results: [
      "Built responsive web apps using HTML5, CSS3, Tailwind CSS, JavaScript, and React.js.",
      "Integrated REST APIs using Express.js for seamless frontend-backend communication.",
      "Performed unit testing for usability, functionality, and cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Amwins Group",
    year: "08/2020 - 07/2021",
    location: "Remote – Austin, TX",
    results: [
      "Built 100+ responsive web pages with HTML5, CSS3, JavaScript, and Bootstrap.",
      "Ensured cross-browser compatibility for a seamless user experience.",
    ],
  },
];

const TimelineSection = () => {
  const timelineRef = useRef<HTMLOListElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (timelineRef.current) {
      setLineHeight(timelineRef.current.offsetHeight);
    }
  }, []);
  return (
    // <section className="relative py-12 px-4 mt-24">
    <section className="pb-16 lg:py-24" id="Work">
      <div className="container">
        <SectionHeader
          title="Work Experience"
          eyebrow="Professional Journey"
          description="From internships to industry roles, here's how I contributed to real-world projects and grew as a developer."
        />

        {/* Vertical Line */}
        <div className="relative mt-24">
          {lineHeight > 0 && (
            <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 z-0">
              <svg
                width="8"
                height={lineHeight}
                viewBox={`0 0 8 ${lineHeight}`}
              >
                <line
                  x1="4"
                  y1="0"
                  x2="4"
                  y2={lineHeight}
                  stroke="#fff"
                  strokeWidth="8"
                  strokeMiterlimit="10"
                  fill="none"
                />
              </svg>
            </div>
          )}

          {/* Timeline Content */}
          <ol
            ref={timelineRef}
            className="relative z-10 max-w-6xl mx-auto px-4 md:px-0"
          >
            {experienceData.map((item, index) => (
              <li
                key={index}
                className={`mb-16 md:w-[40%] ${
                  index % 2 === 0
                    ? "md:mr-auto text-left"
                    : "md:ml-auto text-left"
                }`}
              >
                {/* Gradient Label */}
                <div className="flex flex-col bg-gradient-to-r from-emerald-300 to-sky-400 gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{item.company}</span>
                  <span className="text-xs">({item.year})</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                  {item.title}
                </h3>

                {/* Divider */}
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                {/* Bullet List */}
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {item.results.map((text, i) => (
                    <li
                      className="flex gap-2 text-sm md:text-base text-white/50"
                      key={i}
                    >
                      {/* <CheckCircleIcon className="size-5 md:size-6" /> */}
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
