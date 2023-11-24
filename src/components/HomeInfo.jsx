import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

import rogerImage from '../assets/images/roger.png'

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div  className='flex items-center  neo-brutalism-blue'  >
      <div className='flex-col'>
      <img src={rogerImage} alt='roger'style={{ width: '100px', height: 'auto',borderRadius:'25px',border:'0px' }}  />
      <p className='align-text-bottom'>Gold D. Roger</p>
      </div>
      <h1 className='sm:text-xl sm:leading-snug text-center py-4 px-4 text-white mx-5' style={{marginLeft:'0px'}}>
        
        Welcome to GrandLine
        
        
        <br />
        Lets Explore Abhinav's One Piece World
        <br/>
        Fun Fact: &#40;Abhinav&#41; is spelled as &#34;A bee now&#34;<br/>
        &#60;&#45;  Swipe &#45;&#62; 
        
      </h1>
      </div>

      
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        &#40;Abhinav&#41;, is currently a full-time student <br />  at Memorial University of NewFoundland <br/>
          🇨🇦🇮🇳
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        
        <p className='font-medium text-center sm:text-xl'>
        &#40;Abhinav&#41;, is currently a Cs-Major <br /> He loves Working on Various differnt projects
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Got a cool project idea? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;