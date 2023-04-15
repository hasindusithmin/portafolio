
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import me from "./hasindu.jpg"
import diploma from "./diploma.gif"
import certificate from "./certificate.gif"
import verified from "./verified.gif"
import blueprint from "./blueprint.gif"
import Footer from './components/Footer';
import content from './content';
import Certificates from './components/Certificates';
function App() {

  const [SHOW_HOME, SET_SHOW_HOME] = useState(true);
  const [SHOW_EDU, SET_SHOW_EDU] = useState(false);
  const [SHOW_CERT, SET_SHOW_CERT] = useState(false);
  const [SHOW_SKILLS, SET_SHOW_SKILLS] = useState(false);
  const [SHOW_PROJECT, SET_SHOW_PROJECT] = useState(false);

  const [PROJECTS, SET_PROJECTS] = useState(null);
  const WIDGETS = ['HOME', 'EDUCATION', 'CERTIFICATES', 'SKILLS', 'PROJECTS']

  const colored = (ID) => {
    WIDGETS.forEach(WIDGET => {
      if (WIDGET === ID) {
        document.getElementById(WIDGET).style.backgroundColor = 'black';
      }
      else {
        document.getElementById(WIDGET).style.backgroundColor = '';
      }
    })
  }

  const findID = event => {
    if (event.target.id) {
      colored(event.target.id)
    }
    else {
      colored(event.target.parentNode.id)
    }
  }

  const RENDER_HOME = (e) => {
    findID(e);
    SET_SHOW_HOME(true)
    SET_SHOW_EDU(false)
    SET_SHOW_CERT(false)
    SET_SHOW_SKILLS(false)
    SET_SHOW_PROJECT(false)
  }

  const RENDER_EDU = (e) => {
    findID(e);
    SET_SHOW_HOME(false)
    SET_SHOW_EDU(true)
    SET_SHOW_CERT(false)
    SET_SHOW_SKILLS(false)
    SET_SHOW_PROJECT(false)
  }

  const RENDER_CERT = (e) => {
    findID(e);
    SET_SHOW_HOME(false)
    SET_SHOW_EDU(false)
    SET_SHOW_CERT(true)
    SET_SHOW_SKILLS(false)
    SET_SHOW_PROJECT(false)
  }

  const RENDER_SKILLS = (e) => {
    findID(e);
    SET_SHOW_HOME(false)
    SET_SHOW_EDU(false)
    SET_SHOW_CERT(false)
    SET_SHOW_SKILLS(true)
    SET_SHOW_PROJECT(false)
  }

  const RENDER_PROJECTS = (e) => {
    findID(e);
    fetch('https://gist.githubusercontent.com/hasindusithmin/ce9d14320e2e891a79b775d55ddc24b7/raw/d9642b02ea049d689c99994bd060354dd9902e82/projects.json')
      .then(res => res.json())
      .then(data => {
        SET_PROJECTS(data)
      })
    SET_SHOW_HOME(false)
    SET_SHOW_EDU(false)
    SET_SHOW_CERT(false)
    SET_SHOW_SKILLS(false)
    SET_SHOW_PROJECT(true)
  }
  const [CERTS, setCERTS] = useState([
    {
      src: "https://hasindusithmin.github.io/certificates/codl/",
      desc: "Certificate program on full stack development .Courses are developed by the Departments of Computer Science and Engineering and Information Technology of the University of Moratuwa in collaboration with industry professionals."
    },
    {
      src: "https://hasindusithmin.github.io/certificates/kaggle/",
      desc: "I followed Kaggle to gain the skills I needed to do independent data science projects."
    },
    {
      src: "https://hasindusithmin.github.io/certificates/hackerrank/",
      desc: "I followed HackerRank to get certified in technical skills by taking the HackerRank Skills Certification Test."
    }
  ]);

  const Skills = {
    'Programming languages': ['java.svg', 'javascript.svg', 'nodejs.png', 'python.svg'],
    'Web development': ['html5.svg', 'nextjs.svg', 'react.svg'],
    Frameworks: ['express.svg', 'fastapi.png', 'fiber.png'],
    Databases: ['firebase.png', 'mongodb.png', 'postgresql.png', 'supabase.png'],
    'Operating system': ['fedora.png'],
    'Version control': ['github.png']
  }

  const openNewWindow = (url) => {
    let w = 800;
    let h = 500;
    let left = (window.screen.width / 2) - (w / 2);
    let top = (window.screen.height / 2) - (h / 2);
    window.open(url, '_blank', 'width=' + w + ', height=' + h + ', left=' + left + ', top=' + top);
  }

  const displayTXT = (ID, text) => {
    const textEl = document.getElementById(ID);

    let i = 0;

    function writeText() {
      if (text[i] === '\n') {
        const br = document.createElement('br');
        textEl.appendChild(br)
      }
      textEl.innerHTML += text[i];
      i++;

      if (i > text.length - 1) {
        clearInterval(intervalId);
      }
    }
    const intervalId = setInterval(writeText, 25)
  }


  return (
    <>
      <Navbar
        RENDER_HOME={RENDER_HOME}
        RENDER_EDU={RENDER_EDU}
        RENDER_CERT={RENDER_CERT}
        RENDER_SKILLS={RENDER_SKILLS}
        RENDER_PROJECTS={RENDER_PROJECTS}
      />

      <div className="w3-padding-large">


        {
          SHOW_HOME &&
          <>
            <header className="w3-container w3-padding w3-center w3-black" id="home">
              <h1 className="w3-jumbo w3-animate-top">Hasindu Sithmin</h1>
              <p className='w3-xxlarge'>
                I am a developer 💻👨‍💻
              </p>
            </header>
            <div className="w3-content w3-justify w3-text-grey" onLoad={() => { displayTXT('homeTxt', content['home']) }}>
              <h2 className="w3-text-light-grey w3-animate-left" id='eduHead'>ABOUT ME</h2>
              <hr style={{ width: '200px' }} className="w3-opacity" />
              <div className='w3-center w3-animate-zoom'>
                <img src={me} alt="diploma" className='w3-image w3-round' width="50%" />
              </div>
              <p className='w3-text-white' id='homeTxt'></p>
            </div>
          </>
        }

        {
          SHOW_EDU &&
          <div className="w3-content w3-justify w3-text-grey w3-padding-64" onLoad={() => { displayTXT('eduTxt', content['education']) }}>
            <h2 className="w3-text-light-grey w3-animate-left" id='eduHead'>EDUCATION</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            <div className='w3-center w3-animate-zoom'>
              <img src={diploma} alt="diploma" className='w3-image w3-sepia-max' width="50%" />
            </div>
            <p className='w3-text-white' id='eduTxt'></p>
          </div>
        }


        {
          SHOW_CERT &&
          <div className="w3-content w3-justify w3-text-grey w3-padding-64">
            <h2 className="w3-text-light-grey w3-animate-left">CERTIFICATES</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            <div className='w3-center w3-animate-zoom'>
              <img src={certificate} alt="certificate" className='w3-image w3-sepia-max' width="50%" />
            </div>
            <ul className='w3-text-white'>
              <li>🎓🏅 I have obtained a number of certifications in various subjects from prestigious institutions, including the University of Moratuwa, Hackerrank, and Kaggle.</li>
              <li>👨‍💻 From the University of Moratuwa, I have received certifications in a range of subjects, including 🐍 Python programming, 💻 web development, 🎨 frontend web development, 🖥️ backend web development, and 🤝 professional practice.</li>
              <li>💻 Through Hackerrank, I have earned certifications in 🍵 Java, 🟨 JavaScript, 🔵 NodeJS, ⚛️ React, and 🐍 Python, showcasing my proficiency in some of the most widely used programming languages.</li>
              <li>📊 Finally, from Kaggle, I have received certifications in 🐼 Pandas, 📈 data visualization, and 🤖 machine learning. These certifications highlight my knowledge and expertise in areas related to data science and analysis.</li>
              <li>🌟 These certifications demonstrate my dedication to continuous learning and development, and my commitment to staying up-to-date with the latest trends and technologies in the field of computer science.</li>
            </ul>
            {
              CERTS &&
              CERTS.map(({ src, desc }) => (
                <Certificates key={Math.random()} src={src} desc={desc} />
              ))
            }
          </div>
        }

        {
          SHOW_SKILLS &&
          <div className="w3-content w3-justify w3-text-grey w3-padding-64" >
            <h2 className="w3-text-light-grey w3-animate-left">SKILLS</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            <div className='w3-center w3-animate-zoom'>
              <img src={verified} alt="skills" className='w3-image w3-sepia-max' width="50%" />
            </div>
            <ul className='w3-text-white'>
              <li>💻👨‍💻 As a highly skilled and well-rounded programmer, I have a diverse skill set that includes proficiency in programming languages such as JavaScript, Node.js, Python, and Java.</li>
              <li>🧑‍💻 I am also proficient in HTML and CSS, and have experience with various frameworks including FastAPI, Express, Fiber, Spring Boot, and React.</li>
              <li>🔍 My knowledge of REST API and OOP principles allows me to effectively design and implement software solutions, and my familiarity with both SQL and NoSQL databases such as MySQL, Postgres, MongoDB, Firebase, and Supabase gives me the ability to work with a wide range of data storage options.</li>
              <li>🚀 In addition to my technical skills, I have experience using version control systems such as Github and am proficient in operating systems like Fedora.</li>
              <li>🧠 My strong logical thinking, excellent communication abilities, and ability to quickly learn new technologies make me a valuable asset to any team, and I am committed to producing high-quality work.</li>
            </ul>
            {Object.entries(Skills).map(([key, value]) => (
              <p className='w3-text-white' key={Math.random()}>
                <h3>{key}</h3>
                {
                  value.map(skill => (<span className='w3-white w3-padding w3-light-grey w3-round-large w3-margin-right' title={skill} ><img src={`/devimages/${skill}`} alt={skill} width="30" height="30" /></span>))
                }
              </p>
            ))}

          </div>

        }

        {
          SHOW_PROJECT &&
          <div className="w3-content w3-justify w3-text-grey w3-padding-64">
            <h2 className="w3-text-light-grey w3-animate-left">PROJECTS</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            {/* <div className='w3-center w3-animate-zoom'>
              <img src={blueprint} alt="blueprint" className='w3-image w3-sepia-max' width="50%" />
            </div> */}
            {
              PROJECTS &&
              PROJECTS.map(({ project_name, associated_with, project_url, github, languages, frameworks, packages, details }) => (
                <div className='w3-row w3-padding w3-card w3-round-large w3-white w3-margin' key={project_name}>
                  <h3 className='w3-opacity'><b>{project_name}</b></h3>
                  <div className='w3-padding'><span className='w3-tag w3-round-large'>{associated_with}</span></div>

                  <div className='w3-padding'>
                    {
                      languages.length > 0 &&
                      <p>
                        <h4>Languages</h4>
                        {
                          languages.map(language => <span key={language} ><span className="w3-tag w3-round w3-blue">{language}</span>&nbsp;</span>)
                        }
                      </p>
                    }

                    {
                      frameworks.length > 0 &&
                      <p>
                        <h4>Frameworks</h4>
                        {
                          frameworks.map(framework => <span key={framework} ><span className="w3-tag w3-round w3-green">{framework}</span>&nbsp;</span>)
                        }
                      </p>
                    }

                    {
                      packages.length > 0 &&
                      <p>
                        <h4>Packages</h4>
                        {
                          packages.map(pack => <span key={pack} ><span className="w3-tag w3-round w3-teal w3-margin-bottom">{pack}</span>&nbsp;</span>)
                        }
                      </p>
                    }
                  </div>
                  <div className='w3-padding'>
                    <span onClick={() => { openNewWindow(project_url) }} className='w3-button  w3-round-large' target="_blank" rel="noreferrer">
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
                  <p className='w3-justify'>{details}</p>
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
