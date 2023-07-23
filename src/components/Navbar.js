
import { useEffect, useState } from "react"
import { Typewriter } from 'react-simple-typewriter'
import uno from "./image/giphy1.gif"
import due from "./image/giphy2.gif"
import tre from "./image/giphy3.gif"
import quattro from "./image/giphy4.gif"
import cinque from "./image/giphy5.gif"
import devicon from "./javascript/dev"

export default function Navbar({ RENDER_HOME, RENDER_EDU, RENDER_CERT, RENDER_SKILLS, RENDER_PROJECTS, ID }) {

    let iOne = 0, iTwo = 0;
    const slides = [uno, due, tre, quattro, cinque];
    const [image, setImage] = useState(uno);
    const [devIcon, setDevIcon] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (iOne === slides.length - 1) {
                iOne = 0;
                setImage(slides[iOne])
            }
            else {
                iOne++;
                setImage(slides[iOne])
            }
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (iTwo === Object.keys(devicon).length - 1) {
                iTwo = 0;
                setDevIcon(Object.values(devicon)[iTwo])
            }
            else {
                iTwo++;
                setDevIcon(Object.values(devicon)[iTwo])
            }
        }, 500);
        return () => clearInterval(intervalId);
    }, []);



    return (
        <>
            <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-hide-medium w3-center" style={{ backgroundColor: '#80808014' }}>
                <div className="w3-content w3-section" style={{ maxWidth: 500 }}>
                    {
                        image &&
                        <img
                            src={image}
                            alt="profile"
                            className="w3-circle"
                            style={{ width: '100%' }}
                        />
                    }
                </div>
                <span onClick={RENDER_HOME} className="w3-bar-item w3-button w3-padding-large" id="HOME" style={{ backgroundColor: '#80808061' }}>
                    <i className="fa fa-info w3-xxlarge"></i>
                    <p>ABOUT</p>
                </span>
                <span onClick={RENDER_EDU} className="w3-bar-item w3-button w3-padding-large" id="EDUCATION">
                    <i className="fa fa-university w3-xxlarge"></i>
                    <p>EDUCATION</p>
                </span>
                <span onClick={RENDER_CERT} className="w3-bar-item w3-button w3-padding-large" id="CERTIFICATES">
                    <i className="fa fa-certificate w3-xxlarge"></i>
                    <p>CERTIFICATES</p>
                </span>
                <span onClick={RENDER_SKILLS} className="w3-bar-item w3-button w3-padding-large" id="SKILLS">
                    <i className="fa fa-hand-paper-o w3-xxlarge"></i>
                    <p>SKILLS</p>
                </span>
                <span onClick={RENDER_PROJECTS} className="w3-bar-item w3-button w3-padding-large" id="PROJECTS">
                    <i className="fa fa-product-hunt w3-xxlarge"></i>
                    <p>PROJECTS</p>
                </span>
            </nav>

            <div className="w3-top w3-hide-large" style={{ backgroundColor: '#80808038', padding: 5 }}>
                <div className="w3-bar w3-opacity w3-hover-opacity-off w3-center w3-small">
                    <span onClick={RENDER_HOME} className="w3-bar-item" style={{ width: '20%', padding: 0 }}><img src="/about.gif" className="w3-round-large" alt="ABOUT" width={50} height={50} /></span>
                    <span onClick={RENDER_EDU} className="w3-bar-item" style={{ width: '20%', padding: 0 }}><img src="/diploma.gif" className="w3-round-large" alt="EDU" width={50} height={50} /></span>
                    <span onClick={RENDER_CERT} className="w3-bar-item" style={{ width: '20%', padding: 0 }}><img src="/certificate.gif" className="w3-round-large" alt="CERT" width={50} height={50} /></span>
                    <span onClick={RENDER_SKILLS} className="w3-bar-item" style={{ width: '20%', padding: 0 }}><img src="/verified.gif" className="w3-round-large" alt="SKILLS" width={50} height={50} /></span>
                    <span onClick={RENDER_PROJECTS} className="w3-bar-item" style={{ width: '20%', padding: 0 }}><img src="/blueprint.gif" className="w3-round-large" alt="PROJ" width={50} height={50} /></span>
                </div>
            </div>

            <header className="w3-container w3-center" style={{ paddingTop: 64, color: '#444' }}>
                <div className="w3-jumbo w3-hide-small">
                    <Typewriter
                        key={ID}
                        words={["Hasindu Sithmin"]}
                        typeSpeed={50}
                        cursorBlinking={false}
                    />
                </div>
                <div className="w3-xxlarge w3-hide-large w3-hide-medium">
                    <Typewriter
                        key={ID}
                        words={["Hasindu Sithmin"]}
                        typeSpeed={50}
                        cursorBlinking={false}
                    />
                </div>
                <div className='w3-xlarge'>
                    <span style={{ verticalAlign: 'middle' }}>Developer</span> <span style={{ verticalAlign: 'middle' }}>&nbsp;<i class={`devicon-${devIcon}`} style={{ fontSize: 29 }}></i> </span>
                </div>
            </header>

        </>
    )

}