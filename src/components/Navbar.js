
import { useEffect,useState } from "react"
import uno from "./giphy1.gif"
import due from "./giphy2.gif"
import tre from "./giphy3.gif"
import qua from "./giphy4.gif"
import cin from "./giphy5.gif"

export default function Navbar({ RENDER_HOME, RENDER_EDU, RENDER_CERT, RENDER_SKILLS, RENDER_PROJECTS }) {

    const [slideIndex, setSlideIndex] = useState(0);


    useEffect(() => {
        const slideshow = setInterval(() => {
            setSlideIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(slideshow);
    }, []);

    const slides = [uno, due, tre, qua, cin];


    return (
        <>
            <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-hide-medium w3-center">
                <div className="w3-content w3-section" style={{ maxWidth: 500 }}>
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            alt="profile"
                            className={`w3-circle ${slideIndex === index ? 'active' : ''}`}
                            style={{ width: '100%', display: slideIndex === index ? 'block' : 'none' }}
                        />
                    ))}
                </div>
                <span onClick={RENDER_HOME} className="w3-bar-item w3-button w3-padding-large w3-hover-black" style={{ backgroundColor: 'black' }} id="HOME">
                    <i className="fa fa-home w3-xxlarge"></i>
                    <p>HOME</p>
                </span>
                <span onClick={RENDER_EDU} className="w3-bar-item w3-button w3-padding-large w3-hover-black" id="EDUCATION">
                    <i className="fa fa-university w3-xxlarge"></i>
                    <p>EDUCATION</p>
                </span>
                <span onClick={RENDER_CERT} className="w3-bar-item w3-button w3-padding-large w3-hover-black" id="CERTIFICATES">
                    <i className="fa fa-certificate w3-xxlarge"></i>
                    <p>CERTIFICATES</p>
                </span>
                <span onClick={RENDER_SKILLS} className="w3-bar-item w3-button w3-padding-large w3-hover-black" id="SKILLS">
                    <i className="fa fa-hand-paper-o w3-xxlarge"></i>
                    <p>SKILLS</p>
                </span>
                <span onClick={RENDER_PROJECTS} className="w3-bar-item w3-button w3-padding-large w3-hover-black" id="PROJECTS">
                    <i className="fa fa-product-hunt w3-xxlarge"></i>
                    <p>PROJECTS</p>
                </span>
            </nav>

            <div className="w3-top w3-hide-large" id="myNavbar">
                <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                    <span onClick={RENDER_HOME} className="w3-bar-item w3-button" style={{ width: '20%' }}>HOME</span>
                    <span onClick={RENDER_EDU} className="w3-bar-item w3-button" style={{ width: '20%' }}>EDU</span>
                    <span onClick={RENDER_CERT} className="w3-bar-item w3-button" style={{ width: '20%' }}>CERT</span>
                    <span onClick={RENDER_SKILLS} className="w3-bar-item w3-button" style={{ width: '20%' }}>SKILLS</span>
                    <span onClick={RENDER_PROJECTS} className="w3-bar-item w3-button" style={{ width: '20%' }}>PROJE</span>
                </div>
            </div>

        </>
    )

}