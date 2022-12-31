
import profile from "../1663156760981.jpeg"

export default function Navbar({RENDER_HOME,RENDER_EDU,RENDER_CERT,RENDER_SKILLS,RENDER_PROJECTS}) {

    return (
        <>
            <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
                <img src={profile} alt="profile"  className="w3-sepia" style={{width:'100%'}} />
                    <span onClick={RENDER_HOME} className="w3-bar-item w3-button w3-padding-large w3-black">
                        <i className="fa fa-home w3-xxlarge"></i>
                        <p>HOME</p>
                    </span>
                    <span onClick={RENDER_EDU}  className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                        <i className="fa fa-university w3-xxlarge"></i>
                        <p>EDUCATION</p>
                    </span>
                    <span onClick={RENDER_CERT} className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                        <i className="fa fa-certificate w3-xxlarge"></i>
                        <p>CERTIFICATES</p>
                    </span>
                    <span onClick={RENDER_SKILLS} className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                        <i className="fa fa-hand-paper-o w3-xxlarge"></i>
                        <p>SKILLS</p>
                    </span>
                    <span onClick={RENDER_PROJECTS} className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                        <i className="fa fa-product-hunt w3-xxlarge"></i>
                        <p>PROJECTS</p>
                    </span>                  
            </nav>

            <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
                <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                    <span onClick={RENDER_HOME}  className="w3-bar-item w3-button" style={{width:'20%'}}>HOME</span>
                    <span onClick={RENDER_EDU} className="w3-bar-item w3-button" style={{width:'20%'}}>EDU</span>
                    <span onClick={RENDER_CERT} className="w3-bar-item w3-button" style={{width:'20%'}}>CERT</span>
                    <span onClick={RENDER_SKILLS} className="w3-bar-item w3-button" style={{width:'20%'}}>SKILLS</span>
                    <span onClick={RENDER_PROJECTS} className="w3-bar-item w3-button" style={{width:'20%'}}>PROJS</span>
                </div>
            </div>

        </>
    )

}