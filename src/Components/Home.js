import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './homes.css'
import Swal from 'sweetalert2';
import { Form } from 'react-bootstrap';
import { Link } from 'react-scroll';
import myself from '../images/my-self.jpg'
import about from '../images/about.svg'
import experience from '../images/experience.svg'
import aws from '../images/aws.svg'
import html from '../images/html.svg'
import css from '../images/css.svg'
import bootstrap from '../images/bootstrap.svg'
import js from '../images/js.svg'
import react from '../images/react.svg'
import pr1 from '../images/p-1.jpg'
import pr2 from '../images/p-2.png'
import pr3 from '../images/p-3.png'
import pr4 from '../images/p-4.png'
import pr5 from '../images/p-5.png'
import pr21 from '../images/p2-1.png'
import pr22 from '../images/p2-3.png'
import pr23 from '../images/p2-3.png'
import pr24 from '../images/p2-4.png'
import pr31 from '../images/p3-1.png'
import pr32 from '../images/p3-2.jpg'
import pr33 from '../images/p3-3.png'
import pr34 from '../images/p3-4.png'
import resume from '../images/Dina.pdf'


function Home() {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('skills');
  
    // Handler to switch tabs
    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };
  
    const AnimationComponent = () => {
      const [animate, setAnimate] = useState(false);
  
      const handleRefresh = () => {
        setAnimate(false); // Reset animation
        setTimeout(() => {
          setAnimate(true); // Trigger animation
        }, 100); // Short delay to ensure reset
      };
    }
    let sucess = () => {
      Swal.fire({
        title: "Successfully Submited",
        text: "thank you for vist our page ",
        icon: "success"
      });
    }
  return (
    <div>
      <nav className='x' >
        <div className="container">
          <p className="logo"><Link to="home" smooth={true} duration={500}>Portfolio</Link></p>
          <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <ul>
              <li><Link to="home" smooth={true} offset={(-250)} duration={100}>Home</Link></li>
              <li><Link to="about" smooth={true} offset={(-58)} duration={100}>About</Link></li>
              <li><Link to="experience" smooth={true} offset={(-60)} duration={100}>Experience</Link></li>
              <li><Link to="projects" smooth={true} offset={(-60)} duration={100}>Projects</Link></li>
              <li><Link to="contact" smooth={true} offset={(-60)} duration={100}>Contact</Link></li>

            </ul>
          </div>
        </div>
      </nav>
{/* home page */}
      <div id="home" className='z'>       
        
        <div className="intro-content">
          <p className='para'>Hi There,</p>
          <p className='para1'>I'm <span className='span1'> DINAKARAN.S</span></p>
          <p className='para2'>Full stack Web Developer</p>
          <p className='para3'>
            As an aspiring entry-level developer excited to begin my journey in the field,I’m actively
             seeking job opportunities where I can apply my skills and grow as a developer. 
             This portfolio is a reflection of my dedication to build visually appealing and 
             user-friendly web applications.
          </p>
          <a href={resume} download>  <button className='button1'><span class="button1-content">Download CV</span></button></a>
        </div>
      
    <div>
        <img className='img1' src={myself} alt="Profile" />
        </div>
  </div>
  {/* education and skill */}
  <div id="about" className='y'>
        
        <br/>
      
        <p className='about'>About Me</p>
        <p className='para4'>
          Hello! I'm, DINAKARAN.S from COIMBATORE. My fascination with web development started with
          a curiosity about how websites are built and operated behind the scenes.
          This initial curiosity quickly grew into a passion,
          leading me to pursue web development professionally. During my internship,
          I worked on various projects, from creating responsive layouts to implementing
          interactive features. This hands-on experience has significantly enhanced
          my ability to develop effective and engaging web solutions.
        </p>

        <div className='tab-titles'>
          <p
            className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
            onClick={() => handleTabClick('skills')}
          >
            Skills
          </p>
          <p
            className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`}
            onClick={() => handleTabClick('Education')}
          >
            Education
          </p>
        </div>
        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
          <ul>
            <li><span>HTML/CSS</span><br />Structure and Style Web Pages</li>
            <li><span>BOOTSTRAP</span><br />Responsive Design Framework</li>
            <li><span>JAVASCRIPT</span><br />Dynamic Web Functionality</li>
            <li><span>REACT JS</span><br />Component-Based Library</li>
            <li><span>Mongodb</span><br />Data Base</li>
            <li><span>Nodejs</span><br />back End environment</li>

          </ul>
        </div>
        <div className={`tab-contents ${activeTab === 'Education' ? 'active-tab' : ''}`} id="Education">
          <ul>
            <li><span>B.TECH (Information Technology) - (2025)</span><br />Adithya Institute of Technology</li>
            <li><span>HSC - (2021)</span><br />Shri Ramana Vikass Higher Secondary School</li>  
            <li><span>SSLC - (2019)</span><br />Shri Ramana Vikass Higher Secondary School</li>
          </ul>
        </div>   
        <br/>
        <img className='img2' src={about} alt="About Me" />
  </div>

  {/* experience */}
  <div id="experience" className='w'>
        
          
        <p className='exper'>Experience</p>
        <p className='para5'>Internship at Glacier Technology</p>
        <p className='para6'>Responsibilities</p>
        <div className='para7'>
          <ul>
            <li> Developed and maintained the Library Management System and E-commerce Website Design <br></br>using MERN Stack</li>
            <li> Built a Weather App integrating APIs for real-time weather updates.</li>
            <li> Designed and optimized frontend components using React.js and Bootstrap.</li>
            <li> Implemented authentication and authorization features for secure user access.</li>
            <li> Worked with MongoDB, Express.js, React.js, and Node.js (MERN) for full-stack development.</li>
            <li> Created mini-projects: portfolio, e-commerce-design, calculators, to-do list.</li>
          </ul>
        </div>          
     
        <img className='img3' src={experience} />
      
      <p className='para8'>Technologies Used</p>
      <div className="carousel-container">
      

        <div className="carousel2" style={{
          '--width': '110px',
          '--height': '50px',
          '--quantity': '10',
          '--duration': '15s'
        }}>
          <div className="carousel__list">
            <img className="carousel__item " src={aws} style={{ '--position': '1' }}></img>
            <img className="carousel__item " src={html} style={{ '--position': '2' }}></img>
            <img className="carousel__item" src={css} style={{ '--position': '3' }}></img>
            <img className="carousel__item " src={bootstrap} style={{ '--position': '4' }}></img>
            <img className="carousel__item " src={js} style={{ '--position': '5' }}></img>
            <img className="carousel__item " src={react} style={{ '--position': '6' }}></img>
            <img className="carousel__item " src={aws} style={{ '--position': '7' }}></img>
            <img className="carousel__item " src={html} style={{ '--position': '8' }}></img>
            <img className="carousel__item" src={css} style={{ '--position': '9' }}></img>
            <img className="carousel__item " src={bootstrap} style={{ '--position': '10' }}></img>
       
          </div> 
        </div>
      </div>
  </div>
    {/* Project */}

    <div id="projects" className='projects' >
      <div>
        <p className='project'>Project</p>
        <p className='para9'>E-Commerce in Online Grocery</p>
        <a href='https://next-e-commerce-blush.vercel.app/' className='link'>WebCart Website</a>
        <p className='para10'>The Online Grocery Website is a responsive e-commerce
           platform designed <br></br> using HTML, CSS, and React-Bootstrap for purchasing fresh
            vegetables and fruits. <br></br> It features a modern UI, product listing, shopping cart, 
          and a seamless <br></br>user experience for easy online grocery shopping</p>
        <div className='slider'>
          <div className='slide-track'>
            <div className='slide'>
              <img src={pr1} className='pr' />
            </div>
            <div className='slide'>
              <img src={pr2} className='pr' />
            </div>
            <div className='slide'>
              <img src={pr3} className='pr' />
            </div>
            <div className='slide'>
              <img src={pr4} className='pr' />
            </div>
            <div className='slide'>
              <img src={pr5} className='pr' />
            </div>
            <div className='slide'>
              <img src={pr1} className='pr'/>
            </div>
            <div className='slide'>
              <img src={pr2} className='pr'/>
            </div>
            <div className='slide'>
              <img src={pr3} className='pr'/>
            </div>
            <div className='slide'>
              <img src={pr4} className='pr'/>
            </div>
            <div className='slide'>
              <img src={pr5} className='pr'/>
            </div>
          </div>
          </div>
        </div>
        <div className='secondpr'>
        <p className='para9'>Library Management System</p>
        <a href='https://libra-track-site.vercel.app/' className='link'>Libra Track Website</a>
        <p className='para10'>A web-based system built using MERN stack to manage books, users, and
          <br></br> borrowing activities efficiently. It includes user authentication, <br></br> book management,
           borrow/return tracking, and a search feature with a responsive UI using React-Bootstrap.</p>
        <div className='slider'>
          <div className='slide-track'>
            <div className='slide'>
              <img src={pr31} className='pr' />
            </div>
            <div className='slide'>
              <img src={pr32} className='pr' />
            </div>
            <div className='slide'>
              <img src={pr33} className='pr' />
            </div>
            <div className='slide'>
              <img src={pr34} className='pr' />
            </div>
            <div className='slide'>
              <img src={pr31} className='pr'/>
            </div>
            <div className='slide'>
              <img src={pr32} className='pr'/>
            </div>
            <div className='slide'>
              <img src={pr33} className='pr'/>
            </div>
            <div className='slide'>
              <img src={pr34} className='pr'/>
            </div>
            </div>
          </div>
        </div>
        <div className='secondpr'>
        <p className='para9'>Weather ForeCasting Website</p>
        <a href='https://storm-watch.vercel.app/' className='link'>StromWatch Website</a>
        <p className='para10'>The Weather App is a responsive web application built using HTML, CSS, 
          and React-Bootstrap <br></br>that provides real-time weather updates. 
          It integrates with a weather API to display <br></br>temperature, 
          humidity, and conditions based on user location or search input.</p>
        <div className='slider'>
          <div className='slide-track'>
            <div className='slide'>
              <img src={pr21} className='pr' />
            </div>
            <div className='slide'>
              <img src={pr22} className='pr' />
            </div>
            <div className='slide'>
              <img src={pr23} className='pr' />
            </div>
            <div className='slide'>
              <img src={pr24} className='pr' />
            </div>
            <div className='slide'>
              <img src={pr21} className='pr'/>
            </div>
            <div className='slide'>
              <img src={pr22} className='pr'/>
            </div>
            <div className='slide'>
              <img src={pr23} className='pr'/>
            </div>
            <div className='slide'>
              <img src={pr24} className='pr'/>
            </div>
           
          </div>
        </div>
      </div>
      </div>

{/* contact */}
<div className='bgcontact'>
       
       <p className='contact' >Contact Me</p>
      <div className='form'>
         <Form.Control type="text" placeholder="Full Name" /><br />
         <Form.Control type="email" placeholder="Email" /><br />
         <Form.Control type="number" placeholder="Mobile Number" /><br />
         <Form.Control type="text" placeholder="Subject" /><br />
         <Form.Control as="textarea" placeholder="Your Message" rows={8} /><br />
         </div>
         <button className='button2' onClick={sucess}><span class="button2-content">Submit</span></button>
     <br/>
 </div>

 <div className='end' >       
       <div className='font'>
       <a><i class="bi bi-envelope-at-fill"></i></a>
       <a href='https://www.instagram.com/_.dina._x_/'>  <i class="bi bi-instagram"></i></a>
       {/* <a>  <i class="bi bi-facebook"></i></a> */}
       <a href='https://www.linkedin.com/in/dinakaran-s-4089a5228/'>  <i class="bi bi-linkedin"></i></a>
       <a href='https://github.com/dinakaranak'>  <i class="bi bi-github"></i></a>
         <a href='tel:+919940935315'> <i class="bi bi-telephone-fill"></i></a>
       </div>
       <div className='footer'>
         <ul className='ul1'>
           <li className='li1' >FAQ</li>
           <li className='li1'>Project</li>
           <li className='li1'>About</li>
           <li className='li1'>Contact</li>
           <li className='li1'>Privacy Policy</li>
         </ul>
         <p className='copyrights'>Website Created @dinakaran</p>
       </div>         
 </div>
    </div>
  )
}

export default Home