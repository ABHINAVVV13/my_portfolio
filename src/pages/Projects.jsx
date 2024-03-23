import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { arrow } from "../assets/icons";

import { Link, redirect } from "react-router-dom";


import CTA from "../components/CTA";
import { projects } from "../constants";
import { socialLinks } from "../constants";
import snow_clear from "../assets/images/snow_clear.png";

import "react-vertical-timeline-component/style.min.css";

const Projects = () => {
  return (
    <section className='max-container'>
      
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Projects
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I've worked on a variety of projects ranging from web development to game development. I like to explore 
        </p>


      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Projects</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Here is my journey so far. The following timeline gives a brief overview of my work project and education.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {projects.map((project, index) => (
              <VerticalTimelineElement
                key={project.company_name}
                date={project.date}
                iconStyle={{ background: project.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={project.icon}
                      alt={project.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: project.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                <img src={project.imagi} alt='img'style={{ width: 'auto', height: 'auto',borderRadius:'30px',border:'10px',marginBottom: '50px', cursor: 'pointer'}} onClick={() => window.location.href=project.link}  />
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {project.title}
                  </h3>
                  
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {project.company_name}
                  </p>
                </div>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    to={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-blue-600'
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain'
                  />
                </div>
              

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {project.points && project.points.map((point, index) => (
                    <li
                      key={`project-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;