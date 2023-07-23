
import './App.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import Footer from './components/Footer';
import mySkills from './components/javascript/skills';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import APIComponent from './components/APIComponent';
import axios from 'axios';
import Home from './components/Home';
import Education from './components/Education';
import Certification from './components/Certification';
import Skills from './components/Skills';
import Projects from './components/Projects';

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

  useEffect(() => {
    axios.get('https://portafolio-chatbot.onrender.com/')
  }, [])

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
          botAvatar="/about.gif"
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
          <Home renderHome={true} ID={ID} />
        }

        {
          SHOW_EDU &&
          <Education renderEducation={renderEducation} />
        }


        {
          SHOW_CERT &&
          <Certification renderCertification={true} ID={ID} />
        }

        {
          SHOW_SKILLS &&

          <Skills renderSkills={true} mySkills={mySkills} ID={ID} />

        }

        {
          SHOW_PROJECT &&
          <Projects PROJECTS={PROJECTS} />
        }
      </div>

      <Footer />
    </>
  );
}

export default App;
