
import profile from "../1663156760981.jpeg"

export default function Navbar() {

    return (
        <>
            <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
                <img src={profile} alt="profile"  className="w3-opacity" style={{width:'100%'}} />
                    <span href="#" className="w3-bar-item w3-button w3-padding-large w3-black">
                        <i className="fa fa-home w3-xxlarge"></i>
                        <p>HOME</p>
                    </span>
                    <span href="#" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                        <i className="fa fa-user w3-xxlarge"></i>
                        <p>ABOUT</p>
                    </span>
                    <span href="#" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                        <i className="fa fa-certificate w3-xxlarge"></i>
                        <p>CERTIFICATES</p>
                    </span>
                    <span href="#" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                        <i className="fa fa-hand-paper-o w3-xxlarge"></i>
                        <p>SKILLS</p>
                    </span>
                    <span href="#" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                        <i className="fa fa-product-hunt w3-xxlarge"></i>
                        <p>PROJECT</p>
                    </span>                  
            </nav>

            <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
                <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                    <span href="#" className="w3-bar-item w3-button" style={{width:'20%'}}>HOME</span>
                    <span href="#about" className="w3-bar-item w3-button" style={{width:'20%'}}>ABOUT</span>
                    <span href="#photos" className="w3-bar-item w3-button" style={{width:'20%'}}>PHOTOS</span>
                    <span href="#contact" className="w3-bar-item w3-button" style={{width:'20%'}}>CONTACT</span>
                </div>
            </div>

        </>
    )

}