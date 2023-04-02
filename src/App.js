
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import diploma from "./diploma.gif"
import certificate from "./certificate.gif"
import verified from "./verified.gif"
import blueprint from "./blueprint.gif"
import Footer from './components/Footer';

function App() {

  const [SHOW_HOME, SET_SHOW_HOME] = useState(true);
  const [SHOW_EDU, SET_SHOW_EDU] = useState(false);
  const [SHOW_CERT, SET_SHOW_CERT] = useState(false);
  const [SHOW_SKILLS, SET_SHOW_SKILLS] = useState(false);
  const [SHOW_PROJECT, SET_SHOW_PROJECT] = useState(false);

  const [PROJECTS, SET_PROJECTS] = useState(null)

  const RENDER_HOME = () => {
    SET_SHOW_HOME(true)
    SET_SHOW_EDU(false)
    SET_SHOW_CERT(false)
    SET_SHOW_SKILLS(false)
    SET_SHOW_PROJECT(false)
  }

  const RENDER_EDU = () => {
    SET_SHOW_HOME(false)
    SET_SHOW_EDU(true)
    SET_SHOW_CERT(false)
    SET_SHOW_SKILLS(false)
    SET_SHOW_PROJECT(false)
  }

  const RENDER_CERT = () => {
    SET_SHOW_HOME(false)
    SET_SHOW_EDU(false)
    SET_SHOW_CERT(true)
    SET_SHOW_SKILLS(false)
    SET_SHOW_PROJECT(false)
  }

  const RENDER_SKILLS = () => {
    SET_SHOW_HOME(false)
    SET_SHOW_EDU(false)
    SET_SHOW_CERT(false)
    SET_SHOW_SKILLS(true)
    SET_SHOW_PROJECT(false)
  }

  const RENDER_PROJECTS = () => {
    fetch('https://gist.githubusercontent.com/hasindusithmin/ce9d14320e2e891a79b775d55ddc24b7/raw/455a5a5485fde8594d06259017c05f12f6edfaae/projects.json')
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

  const CERTS = [
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
  ]

  const Skills = {
    'Programming languages': ['java.svg', 'javascript.svg', 'nodejs.png', 'python.svg'],
    'Web development': ['html5.svg', 'nextjs.svg', 'react.svg'],
    Frameworks: ['express.svg', 'fastapi.png', 'fiber.png'],
    Databases: ['firebase.png', 'mongodb.png', 'postgresql.png', 'supabase.png'],
    'Operating system': ['fedora.png'],
    'Version control': ['github.png']
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
          <div>
            <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
              <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Hasindu Sithmin.</h1>
              <p className='w3-xxlarge'>A Developer</p>
              <div className='w3-center'>
                <img src="./hasindu.jpg" alt="profile_side" className="w3-image w3-opacity w3-round-large" width="50%" />
              </div>
            </header>
            <div className="w3-content w3-justify w3-text-grey w3-padding-64">
              <h2 className="w3-text-light-grey">ABOUT ME</h2>
              <hr className="w3-opacity" />
              <div className='w3-text-white'>
                <p>
                  Welcome to my portfolio website, If someone were to ask me about my favorite pastime, I would proudly declare that my hobby is computer programming. It's not just a passion or interest, it's an integral part of who I am. Whether it's gardening, shopping, cooking, or playing video games, nothing brings me more joy than writing lines of code from dawn till dusk. The sheer excitement and thrill of creating something new, solving complex problems, and constantly pushing the boundaries of what's possible through technology is what drives me. To me, programming is not just a hobby, it's a way of life.
                </p>
                <p>
                  As a software developer intern, I am passionate about using technology to solve real-world problems and create innovative solutions. I am a student at the Institute of Technology, University of Moratuwa, where I have gained a strong foundation in programming languages such as Javascript (both client-side and Server-side) and Python.
                </p>
                <p>
                  During my internship, I have had the opportunity to work on several projects that have allowed me to apply my knowledge and skills in a practical setting.My sharp attention to detail and passion for teamwork have allowed me to produce exceptional results alongside my colleagues. I am a lifelong learner who is constantly seeking new opportunities to expand my horizons and stay ahead of the curve with cutting-edge technologies and industry trends.
                </p>
              </div>
            </div>
          </div>
        }

        {
          SHOW_EDU &&
          <div className="w3-content w3-justify w3-text-grey w3-padding-64">
            <h2 className="w3-text-light-grey">EDUCATION</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            <div className='w3-center'>
              <img src={diploma} alt="diploma" className='w3-image w3-sepia-max' width="50%" />
            </div>
            <p className='w3-text-white'>
              Welcome to my portfolio website, where I am thrilled to showcase my educational journey and achievements. From my early years at A/St. Joseph's College, where I completed my primary and ordinary level education, to my advanced level studies at Central College under the physical science, and finally, pursuing higher education at the Institute of Technology University of Moratuwa under the Information Technology domain, my education has been a fulfilling and enriching experience.
            </p>
            <p className='w3-text-white'>
              My time at St. Joseph's College instilled in me a strong foundation in fundamental subjects, while my studies at Central College honed my scientific and analytical skills. During my advanced level studies, I was able to explore my interests in the physical sciences and develop a deeper understanding of complex concepts.
            </p>
            <p className='w3-text-white'>
              Continuing my education at the Institute of Technology University of Moratuwa under the Information Technology domain has been an exciting journey. I have had the opportunity to learn from expert faculty members and engage in hands-on projects that have enabled me to apply theoretical knowledge to real-world scenarios. Through my studies, I have gained proficiency in various programming languages, software development, database management, and other critical IT skills.
            </p>
            <p className='w3-text-white'>
              My education has prepared me for a career in the dynamic and ever-evolving field of Information Technology. With my strong foundation in fundamental subjects, scientific and analytical skills, and expertise in IT, I am confident in my ability to make a valuable contribution to any organization.
            </p>
          </div>
        }


        {
          SHOW_CERT &&
          <div className="w3-content w3-justify w3-text-grey w3-padding-64">
            <h2 className="w3-text-light-grey">CERTIFICATES</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            <div className='w3-center'>
              <img src={certificate} alt="certificate" className='w3-image w3-sepia-max' width="50%" />
            </div>
            <div className='w3-text-white'>
              <p>
                I have obtained a number of certifications in various subjects from the University of Moratuwa, Hackerrank, and Kaggle.
              </p>
              <p>
                From the University of Moratuwa, I have received certification in Python programming, web development, frontend web development, backend web development, and professional practice.
              </p>
              <p>
                Through Hackerrank, I have earned certifications in Java, JavaScript, NodeJS, React, and Python.
              </p>
              <p>
                Finally, from Kaggle, I have received certification in Pandas, data visualization, and machine learning. These certifications demonstrate my knowledge and expertise in a variety of fields related to computer science and technology.
              </p>
            </div>
            {
              CERTS &&
              CERTS.map(({ src, desc }) => (
                <p key={Math.random()}>
                  <div className='w3-card w3-round-large w3-white'>
                    <iframe title={desc} src={src} frameBorder="0" width='100%' height={window.navigator.userAgentData.mobile ? '600px' : '850px'} />
                  </div>
                  <p className='w3-padding w3-text-white'>{desc}</p>
                  <hr style={{ width: '300px' }} className="w3-opacity" />
                </p>
              ))
            }
          </div>
        }

        {
          SHOW_SKILLS &&
          <div className="w3-content w3-justify w3-text-grey w3-padding-64">
            <h2 className="w3-text-light-grey">SKILLS</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            <div className='w3-center'>
              <img src={verified} alt="skills" className='w3-image w3-sepia-max' width="50%" />
            </div>
            <p className='w3-text-white'>
              As a highly skilled and well-rounded programmer, I have a diverse skill set that includes proficiency in programming languages such as JavaScript, Node.js, Python, and Java. I am also proficient in HTML and CSS, and have experience with various frameworks including FastAPI, Express, Fiber, Spring Boot, and React. My knowledge of REST API and OOP principles allows me to effectively design and implement software solutions, and my familiarity with both SQL and NoSQL databases such as MySQL, Postgres, MongoDB, Firebase, and Supabase gives me the ability to work with a wide range of data storage options. In addition to my technical skills, I have experience using version control systems such as Github and am proficient in operating systems like Fedora. My strong logical thinking, excellent communication abilities, and ability to quickly learn new technologies make me a valuable asset to any team, and I am committed to producing high-quality work.
            </p>
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
            <h2 className="w3-text-light-grey">PROJECTS</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            <div className='w3-center'>
              <img src={blueprint} alt="blueprint" className='w3-image w3-sepia-max' width="50%" />
            </div>
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
                    <a href={project_url} className='w3-button  w3-round-large' target="_blank" rel="noreferrer">
                      <img src="/devimages/chrome.png" alt='web2' width="35" height="35" />&nbsp;<span className='w3-hide-small'>Project URL</span>
                    </a>
                    &nbsp;
                    {
                      github &&
                      <a href={github} className='w3-button w3-right w3-round-large' target="_blank" rel="noreferrer">
                        <img src="/devimages/new-github.png" alt='github' width="35" height="35" />&nbsp;<span className='w3-hide-small'>Source Code</span>
                      </a>
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
