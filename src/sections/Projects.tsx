// import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import uvr from "@/assets/images/uvr.jpg";
import hirehub from "@/assets/images/hirehub.jpg";
import gemini from "@/assets/images/gemini.jpg";
import Image from "next/image";
import CheckCircleICon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "HireHub",
    year: "2025",
    title: "Recruitment platform for job seekers and employers",
    results: [
      {
        title:
          "Scalable UI with React, Redux Toolkit, and Tailwind for job management.",
      },
      { title: "Built REST APIs with Node.js; added file uploads via Multer." },
      {
        title:
          "Implemented admin tools for job posting, filtering, and tracking.",
      },
    ],

    link: "https://hire-hub-strd.onrender.com/",
    image: hirehub,
  },
  {
    company: "UVR Film Agency",
    year: "2025",
    title: "Platform for creators offering YouTube and music services",
    results: [
      {
        title:
          "Increased engagement with animated cards and interactive sections.",
      },
      {
        title: "Enhanced accessibility via mobile-first, cross-browser design.",
      },
      { title: "Streamlined booking with intuitive, frictionless flow." },
    ],

    link: "https://6699169325623dc6d8e46421--gleaming-belekoy-d4552b.netlify.app/",
    image: uvr,
  },
  {
    company: "Gemini AI Clone",
    year: "2025",
    title: "A conversational AI interface inspired by Google's Gemini",
    results: [
      {
        title:
          "Formatted Gemini API responses for clear, real-time conversations.",
      },
      {
        title: "Delivered fast, responsive UI for consistent user experience.",
      },
      {
        title: "Ensured mobile-friendly interactions across all device sizes.",
      },
    ],
    link: "https://geminitalks.netlify.app/",
    image: gemini,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="project">
      <div className="container">
        <SectionHeader
          title=" Featured Projects"
          eyebrow="Real-world Results"
          description="See how I transfored concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <div className="">&bull;</div>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={project.title}
                      >
                        <CheckCircleICon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-7 rounded-xl font-semibold inline-flex items-center justify-center mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-tl-xl"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
