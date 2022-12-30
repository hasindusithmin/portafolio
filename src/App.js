
import './App.css';
import Navbar from './components/Navbar';
import profile from "./1663156760981.jpeg"
import { useState } from 'react';
import diploma from "./diploma.gif"
import certificate from "./certificate.gif"
function App() {

  const [SHOW_HOME, SET_SHOW_HOME] = useState(true);
  const [SHOW_EDU, SET_SHOW_EDU] = useState(false);
  const [SHOW_CERT, SET_SHOW_CERT] = useState(false);


  const RENDER_HOME = () => {
    SET_SHOW_HOME(true)
    SET_SHOW_EDU(false)
    SET_SHOW_CERT(false)
  }

  const RENDER_EDU = () => {
    SET_SHOW_HOME(false)
    SET_SHOW_EDU(true)
    SET_SHOW_CERT(false)
  }

  const RENDER_CERT = () => {
    SET_SHOW_HOME(false)
    SET_SHOW_EDU(false)
    SET_SHOW_CERT(true)
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

  return (
    <>
      <Navbar
        RENDER_HOME={RENDER_HOME}
        RENDER_EDU={RENDER_EDU}
        RENDER_CERT={RENDER_CERT}
      />

      <div className="w3-padding-large">


        {
          SHOW_HOME &&
          <div>
            <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
              <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Hasindu Sithmin.</h1>
              <p className='w3-xxlarge'>Developer.</p>
              <div className='w3-center'>
                <img src={profile} alt="boy" className="w3-image w3-sepia-max" width="50%" />
              </div>
            </header>
            <div className="w3-content w3-justify w3-text-grey w3-padding-64">
              <h2 className="w3-text-light-grey">Hasindu Sithmin</h2>
              <hr style={{ width: '200px' }} className="w3-opacity" />
              <div className='w3-text-white'>
                <p>
                  Hi, I'm Hasindu Sithmin, a driven and self-motivated Information Technology student at the University of Moratuwa's Institute of Technology. From a young age, I've been fascinated by technology and have always been drawn to problem-solving. I started learning to code as a teenager, and after achieving success in my Advanced Level exams, I knew that software engineering was the right career path for me.
                </p>
                <p>
                  Since then, I've gained experience through a variety of projects and involvement with notable startups, continuously improving my skills in React.js, Node.js, and Python. In addition to these programming languages, I'm familiar with frameworks such as FastAPI, Express.js, Spring Boot, React.js, and Next.js.
                </p>
                <p>
                  I'm always looking for new challenges and opportunities to grow, and I'm excited to connect and collaborate with like-minded individuals. You can check out my work on GitHub at https://github.com/hasindusithmin. Thank you for visiting my website!
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
              I received my primary and secondary education at St. Joseph's College in Anuradhapura, where I studied from grade 1 through 11. Upon completion, I took my advanced level exams at Central College in Anuradhapura and achieved a successful result. As a result, I was accepted into the Institute of Technology at the University of Moratuwa, where I am currently pursuing a diploma in information technology.
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
                    <iframe src={src} frameBorder="0" width='100%' height={window.navigator.userAgentData.mobile ? '600px' : '850px'} />
                  </div>
                  <p className='w3-padding w3-text-white'>{desc}</p>
                  <hr style={{ width: '300px' }} className="w3-opacity" />
                </p>
              ))
            }
          </div>
        }

      </div>
    </>
  );
}

export default App;
