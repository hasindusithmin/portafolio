
import './App.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import me from "./hasindus.png"
import diploma from "./diploma.gif"
import certificate from "./certificate.gif"
import verified from "./verified.gif"
import Footer from './components/Footer';
import mySkills from './components/javascript/skills';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import APIComponent from './components/APIComponent';
import axios from 'axios';

function App() {

  const [SHOW_HOME, SET_SHOW_HOME] = useState(true);
  const [SHOW_EDU, SET_SHOW_EDU] = useState(false);
  const [SHOW_CERT, SET_SHOW_CERT] = useState(false);
  const [SHOW_SKILLS, SET_SHOW_SKILLS] = useState(false);
  const [SHOW_PROJECT, SET_SHOW_PROJECT] = useState(false);
  const [ID, setID] = useState(0)

  const [PROJECTS, SET_PROJECTS] = useState(null);
  const WIDGETS = ['HOME', 'EDUCATION', 'CERTIFICATES', 'SKILLS', 'PROJECTS']

  const colored = (ID) => {
    WIDGETS.forEach(WIDGET => {
      if (WIDGET === ID) {
        document.getElementById(WIDGET).style.backgroundColor = '#80808061';
      }
      else {
        document.getElementById(WIDGET).style.backgroundColor = '';
      }
    })
  }

  useEffect(()=>{
    axios.get('https://portafolio-chatbot.onrender.com/')
  },[])

  const findID = event => {
    setID(prevID => prevID + 1)
    window?.scrollTo({ top: 0, behavior: 'smooth' })
    if (event.target.id) {
      colored(event.target.id)
    }
    else {
      colored(event.target.parentNode.id)
    }
  }

  let [renderHome, setRenderHome] = useState(false);
  let [renderEducation, setRenderEducation] = useState(0);
  let [renderCertification, setRenderCertification] = useState(0);
  let [renderSkills, setRenderSkills] = useState(0);
  let [renderProjects, setRenderProjects] = useState(0);

  const RENDER_HOME = (e) => {
    setRenderHome(true);
    findID(e);
    SET_SHOW_HOME(true)
    SET_SHOW_EDU(false)
    SET_SHOW_CERT(false)
    SET_SHOW_SKILLS(false)
    SET_SHOW_PROJECT(false)
  }

  const RENDER_EDU = (e) => {
    setRenderEducation(renderEducation += 1);
    findID(e);
    SET_SHOW_HOME(false)
    SET_SHOW_EDU(true)
    SET_SHOW_CERT(false)
    SET_SHOW_SKILLS(false)
    SET_SHOW_PROJECT(false)
  }

  const RENDER_CERT = (e) => {
    setRenderCertification(renderCertification += 1);
    findID(e);
    SET_SHOW_HOME(false)
    SET_SHOW_EDU(false)
    SET_SHOW_CERT(true)
    SET_SHOW_SKILLS(false)
    SET_SHOW_PROJECT(false)
  }

  const RENDER_SKILLS = (e) => {
    setRenderSkills(renderSkills += 1);
    findID(e);
    SET_SHOW_HOME(false)
    SET_SHOW_EDU(false)
    SET_SHOW_CERT(false)
    SET_SHOW_SKILLS(true)
    SET_SHOW_PROJECT(false)
  }

  const RENDER_PROJECTS = (e) => {
    findID(e);
    setRenderProjects(renderProjects += 1);
    if (renderProjects <= 1) {
      fetch('https://data.mongodb-api.com/app/born-yahdr/endpoint/portafolio/projects')
        .then(res => res.json())
        .then(data => {
          SET_PROJECTS(data)
        })
    }
    SET_SHOW_HOME(false)
    SET_SHOW_EDU(false)
    SET_SHOW_CERT(false)
    SET_SHOW_SKILLS(false)
    SET_SHOW_PROJECT(true)
  }

  const openNewWindow = (url) => {
    let w = 800;
    let h = 500;
    let left = (window.screen.width / 2) - (w / 2);
    let top = (window.screen.height / 2) - (h / 2);
    window.open(url, '_blank', 'width=' + w + ', height=' + h + ', left=' + left + ', top=' + top);
  }

  const config = {
    floating: true,
  };

  const theme = {
    background: '#C9FF8F',
    headerBgColor: '#607d8b',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
  };

  return (
    <>
      <Navbar
        RENDER_HOME={RENDER_HOME}
        RENDER_EDU={RENDER_EDU}
        RENDER_CERT={RENDER_CERT}
        RENDER_SKILLS={RENDER_SKILLS}
        RENDER_PROJECTS={RENDER_PROJECTS}
        ID={ID}
      />

      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Ask Me"
          botAvatar={me}
          steps={[
            {
              id: 'intro',
              message: "Hello, I'm Hasindu Sithmin.",
              trigger: 'first_question',
            },
            {
              id: 'first_question',
              message: "what do you want to know from me?.",
              trigger: 'input',
            },
            {
              id: 'question',
              message: 'What else do you want to know from me?',
              trigger: 'input',
            },
            {
              id: 'input',
              user: true,
              trigger: 'call',
            },
            {
              id: 'call',
              component: (
                <APIComponent
                  message="Hi {previousValue}, nice to meet you!"
                  trigger="question"
                />
              ),
              waitAction: true,
            }
          ]}
          {...config}

        />
      </ThemeProvider>

      <div className="w3-padding-large">

        {
          SHOW_HOME &&
          <div className="w3-content w3-justify w3-text-gray">
            <h2 className="w3-text-gray w3-animate-left" id='eduHead'>ABOUT ME</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            <div className='w3-center w3-animate-zoom'>
              <img src={me} alt="Hasindu" className='w3-image w3-circle' width="50%" />
            </div>
            <p className='w3-text-gray'>
              {
                !renderHome ?
                  <Typewriter
                    key={ID}
                    words={
                      [
                        `👋 Hi, I'm Hasindu, I am a self driven 🐎, self motivated 💪🏼 and enthusiastic individual 🤙 with a passion for software development 👨🏻‍💻.
                    I have a  fundamental understanding ✅ of various software engineering concepts 💭 and have gained project-based knowledge 🔬 through various hands-on experiences 🏄🏻.
                    I am always looking for new challenges 🧗🏻 and opportunities🚪 to grow 🌱, and I believe that my skills 🤹 and experience 👴 make me an excellent candidate for any project 🚧. 
                    If you're looking for someone who is self-motivated 🎯, a team player ⚽, and a skilled problem solver 🕵🏻‍♀️, then look no further than me ✋.`
                      ]
                    }
                    typeSpeed={25}
                    cursor="|"
                  />
                  :
                  `👋 Hi, I'm Hasindu, I am a self driven 🐎, self motivated 💪🏼 and enthusiastic individual 🤙 with a passion for software development 👨🏻‍💻.
                    I have a  fundamental understanding ✅ of various software engineering concepts 💭 and have gained project-based knowledge 🔬 through various hands-on experiences 🏄🏻.
                    I am always looking for new challenges 🧗🏻 and opportunities🚪 to grow 🌱, and I believe that my skills 🤹 and experience 👴 make me an excellent candidate for any project 🚧. 
                    If you're looking for someone who is self-motivated 🎯, a team player ⚽, and a skilled problem solver 🕵🏻‍♀️, then look no further than me ✋.`
              }
            </p>
          </div>
        }

        {
          SHOW_EDU &&
          <div className="w3-content w3-justify w3-text-gray">
            <h2 className="w3-text-gray w3-animate-left" id='eduHead'>EDUCATION</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            <div className='w3-center w3-animate-zoom w3-display-container'>
              <div className='w3-display-middle'>
                <a href="https://www.linkedin.com/in/hasindu-sithmin-9a1a12209/details/education/" target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: '#004182' }}>See More</a>
              </div>
              <img src={diploma} alt="diploma" className='w3-image w3-circle ' width="50%" />
            </div>
            <p className='w3-text-gray'>
              <h5 className='w3-center'>
                {renderEducation > 1 ? '🎓 My Education Journey 🎓' : <Typewriter words={['🎓 My Education Journey 🎓']} typeSpeed={200} />}
              </h5>
              <hr />
              <div className='w3-display-container'>
                <div class="w3-padding w3-display-topright" style={{ fontSize: '25px' }}>
                  <a href="https://www.sjc.lk/" target='_blank' rel="noreferrer" ><i className="fa fa-external-link-square"></i></a>
                </div>
                <img className='w3-image w3-round-large' src="/education/sjc.png" alt="St.Joseph's College" />
              </div>
              <p>
                📚 I started my education journey at St. Joseph's College in Anuradhapura, where I successfully completed my Ordinary Level Exam with outstanding results. I achieved Grade A-7, B-1, and C-1, which gave me the confidence to pursue my dreams further.
              </p>
              <div className='w3-display-container'>
                <div class="w3-padding w3-display-topright" style={{ fontSize: '25px' }}>
                  <a href="https://www.anucentralcollege.lk/" target='_blank' rel="noreferrer" ><i className="fa fa-external-link-square"></i></a>
                </div>
                <img className='w3-image w3-round-large' src="/education/acc.jpg" alt="Anuradhapura Central College" />
              </div>
              <p>
                📈 Moving forward, I continued my academic journey at Central College Anuradhapura, where I completed my Advanced Level Exam with a Grade of C-3 in Combined Mathematics, Physics, and Chemistry. Despite the challenges, I worked hard and remained dedicated to achieving my goals.
              </p>
              <div className='w3-display-container'>
                <div class="w3-padding w3-display-topright" style={{ fontSize: '25px' }}>
                  <a href="https://itum.mrt.ac.lk/" target='_blank' rel="noreferrer" ><i className="fa fa-external-link-square"></i></a>
                </div>
                <img className='w3-image w3-round-large' src="/education/itum.jpg" alt="Institute Of Technology University Of Moratuwa" />
              </div>
              <p>
                🎯 With a strong academic background and a desire to learn, I enrolled at the Institute of Technology, University of Moratuwa, to pursue a program in Information Technology. I dedicated myself to my studies, and with perseverance and hard work, I successfully completed my educational program.
              </p>
              <hr />
              <p>
                👨‍🎓👩‍🎓 Education is the foundation for success, and I am grateful for the opportunities I have had to learn and grow. I am excited to share my knowledge and experiences with others and to inspire them to achieve their dreams.
              </p>
            </p>
          </div>
        }


        {
          SHOW_CERT &&
          <div className="w3-content w3-justify w3-text-gray">
            <h2 className="w3-text-gray w3-animate-left">CERTIFICATES</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            <div className='w3-center w3-animate-zoom w3-display-container'>
              <div className='w3-display-middle'>
                <a href="https://www.linkedin.com/in/hasindu-sithmin-9a1a12209/details/certifications/" target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: '#004182' }}>See More</a>
              </div>
              <img src={certificate} alt="certificate" className='w3-image w3-circle ' width="50%" />
            </div>
            <div style={{ height: 405, display: 'flex', alignItems: 'center' }}>
              {
                renderCertification > 1 ?
                  <ul className='w3-text-gray w3-ul' style={{ margin: 'auto' }}>
                    <li>
                      🎓🏅 I have obtained a number of certifications in various subjects from prestigious institutions, including the University of Moratuwa, Hackerrank, and Kaggle.
                    </li>
                    <li>
                      From the University of Moratuwa, I have received certifications in a range of subjects, including 🐍 Python programming, 💻 web development, 🎨 frontend web development, 🖥️ backend web development, and 🤝 professional practice.&nbsp;<a href="https://hasindusithmin.github.io/certificates/codl/" target="_blank" rel="noreferrer" className='w3-text-blue'><i className="fa fa-external-link-square"></i></a>
                    </li>
                    <li>
                      Through Hackerrank, I have earned certifications in 🍵 Java, 🟨 JavaScript, 🔵 NodeJS, ⚛️ React, and 🐍 Python, showcasing my proficiency in some of the most widely used programming languages.&nbsp;<a href="https://hasindusithmin.github.io/certificates/hackerrank/" target="_blank" rel="noreferrer" className='w3-text-blue'><i className="fa fa-external-link-square"></i></a>
                    </li>
                    <li>
                      Finally, from Kaggle, I have received certifications in 🐼 Pandas, 📈 data visualization, and 🤖 machine learning. These certifications highlight my knowledge and expertise in areas related to data science and analysis.&nbsp;<a href="https://hasindusithmin.github.io/certificates/kaggle/" target="_blank" rel="noreferrer" className='w3-text-blue'><i className="fa fa-external-link-square"></i></a>
                    </li>
                    <li>
                      🌟 These certifications demonstrate my dedication to continuous learning and development, and my commitment to staying up-to-date with the latest trends and technologies in the field of computer science.
                    </li>
                  </ul>
                  :
                  <ul className='w3-text-gray w3-ul' style={{ margin: 'auto' }}>
                    <li>
                      <Typewriter
                        key={ID}
                        words={["🎓🏅 I have obtained a number of certifications in various subjects from prestigious institutions, including the University of Moratuwa, Hackerrank, and Kaggle."]}
                        typeSpeed={50}
                        cursor="|"
                      />
                    </li>
                    <li>
                      <Typewriter
                        key={ID}
                        words={["👨‍💻 From the University of Moratuwa, I have received certifications in a range of subjects, including 🐍 Python programming, 💻 web development, 🎨 frontend web development, 🖥️ backend web development, and 🤝 professional practice."]}
                        typeSpeed={60}
                        cursor="|"
                      />
                    </li>
                    <li>
                      <Typewriter
                        key={ID}
                        words={["💻 Through Hackerrank, I have earned certifications in 🍵 Java, 🟨 JavaScript, 🔵 NodeJS, ⚛️ React, and 🐍 Python, showcasing my proficiency in some of the most widely used programming languages."]}
                        typeSpeed={70}
                        cursor="|"
                      />
                    </li>
                    <li>
                      <Typewriter
                        key={ID}
                        words={["📊 Finally, from Kaggle, I have received certifications in 🐼 Pandas, 📈 data visualization, and 🤖 machine learning. These certifications highlight my knowledge and expertise in areas related to data science and analysis."]}
                        typeSpeed={80}
                        cursor="|"
                      />
                    </li>
                    <li>
                      <Typewriter
                        key={ID}
                        words={["🌟 These certifications demonstrate my dedication to continuous learning and development, and my commitment to staying up-to-date with the latest trends and technologies in the field of computer science."]}
                        typeSpeed={90}
                        cursor="|"
                      />
                    </li>
                  </ul>
              }
            </div>
            <div className='w3-padding-32'></div>
          </div>
        }

        {
          SHOW_SKILLS &&
          <div className="w3-content w3-justify w3-text-gray" >
            <h2 className="w3-text-gray w3-animate-left">SKILLS</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            <div className='w3-center w3-animate-zoom w3-display-container'>
              <div className='w3-display-middle'>
                <a href="https://www.linkedin.com/in/hasindu-sithmin-9a1a12209/details/skills/" target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: '#004182' }}>See More</a>
              </div>
              <img src={verified} alt="skills" className='w3-image w3-circle ' width="50%" />
            </div>
            <div style={{ height: 405, display: 'flex', alignItems: 'center' }}>
              {
                renderSkills > 1 ?
                  <ul className='w3-text-gray w3-ul' style={{ margin: 'auto' }}>
                      {
                        mySkills.map(skill => <li key={Math.random()}>{skill}</li>)
                      }
                  </ul>
                  :
                  <ul className='w3-text-gray w3-ul' style={{ margin: 'auto' }}>
                    <li>
                      <Typewriter
                        key={ID}
                        words={[mySkills[0]]}
                        typeSpeed={50}
                        cursor="|"
                      />
                    </li>
                    <li>
                      <Typewriter
                        key={ID}
                        words={[mySkills[1]]}
                        typeSpeed={60}
                        cursor="|"
                      />
                    </li>
                    <li>
                      <Typewriter
                        key={ID}
                        words={[mySkills[2]]}
                        typeSpeed={70}
                        cursor="|"
                      />
                    </li>
                    <li>
                      <Typewriter
                        key={ID}
                        words={[mySkills[3]]}
                        typeSpeed={80}
                        cursor="|"
                      />
                    </li>
                    <li>
                      <Typewriter
                        key={ID}
                        words={[mySkills[4]]}
                        typeSpeed={90}
                        cursor="|"
                      />
                    </li>
                  </ul>
              }
            </div>
            <div className='w3-padding-32'></div>
          </div>

        }

        {
          SHOW_PROJECT &&
          <div className="w3-content w3-justify w3-text-gray">
            <h2 className="w3-text-gray w3-animate-left">PROJECTS</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            {
              !PROJECTS && <div className='w3-large'><b>Loading...</b></div>
            }
            {
              PROJECTS &&
              PROJECTS.map(({ _id, name, url, github, description }) => (
                <div className='w3-row w3-padding w3-card w3-round-large w3-white w3-margin-bottom' key={_id}>
                  <h3 className='w3-opacity'><b>{name}</b></h3>
                  <div className='w3-padding'>
                    <iframe
                      src={url}
                      title={name}
                      className='iframe'
                      style={{
                        width: "100%",
                        height: 500,
                        border: "none",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        margin: "0 auto",
                        display: "block"
                      }}
                    />
                  </div>
                  <div className='w3-padding'>
                    <span onClick={() => { openNewWindow(url) }} className='w3-button  w3-round-large' target="_blank" rel="noreferrer">
                      <img src="/devimages/chrome.png" alt='web2' width="35" height="35" />&nbsp;<span className='w3-hide-small'>Project URL</span>
                    </span>
                    &nbsp;
                    {
                      github &&
                      <span onClick={() => { openNewWindow(github) }} className='w3-button w3-right w3-round-large' target="_blank" rel="noreferrer">
                        <img src="/devimages/new-github.png" alt='github' width="35" height="35" />&nbsp;<span className='w3-hide-small'>Source Code</span>
                      </span>
                    }
                  </div>
                  <p className='w3-justify' style={{ overflow: 'hidden' }}>{description}</p>
                </div>
              ))
            }
          </div>
        }

      </div>

      <Footer />
    </>
  );
}

export default App;
