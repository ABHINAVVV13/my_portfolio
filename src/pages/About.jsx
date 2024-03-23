import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA from "../components/CTA";
import { experiences, skills } from "../constants";
import { Image } from "react";
import abhinavImage from "../assets/images/abhinav.jpeg";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <img src={abhinavImage} alt='roger'style={{ width: '400px', height: 'auto',borderRadius:'100px',border:'10px',marginBottom: '50px'}}  />
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Abhinav
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I am a 3rd year Computer Science Major at Memorial University of Newfoundland 🇨🇦.
          I am a aspiring Full Stack Developer and a Blockchain(Web3) Enthusiast. I love to work on different projects and learn new technologies.
          <br /><br />
          I have keen intrests in AR, 3D modelling, Game Development, Graph Theory , Cryptography and Blockchain.
          <br /><br />
          I am currently working on a project that allows P2P communication between Web3 wallets using text based NFT's. I also like to talk about topics such as AI, Big Data, IOT and I am very excited about the future of technology.

  
          <br /><br />
          <b><i>Problem solving is hunting; it is savage pleasure and we are born to it. <br/> -- Thomas Harris, The Silence of the Lambs</i></b>
        </p>


      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Education and Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Here is my journey so far. The following timeline gives a brief overview of my work experience and education.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
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

export default About;