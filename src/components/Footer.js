import linkedin from "./image/linkdin.gif"
import medium from "./image/medium.gif"
import github from "./image/github.gif"

export default function Footer() {

    const PLATS = [
        {
            "name": "Linkedin",
            "image": linkedin,
            "url": "https://www.linkedin.com/in/hasindu-sithmin-9a1a12209/"
        },
        {
            "name": "Medium",
            "image":medium,
            "url": "https://medium.com/@hasindusithmin64"
        },
        {
            "name": "Github",
            "image": github,
            "url": "https://github.com/hasindusithmin"
        }
    ]

    return (
        <>
            <div className="w3-padding"></div>
            <footer className="w3-container w3-center w3-bottom">
                <p className="w3-center">
                    {
                        PLATS.map(({ name, image, url }) => (
                            <span className='w3-white w3-padding-large w3-round-large w3-margin-right' key={name} >
                                <a href={url} target="_blank" rel="noreferrer"><img src={image} alt={name} width="35" height="35" /></a>
                            </span>
                        ))
                    }
                </p>
            </footer>
        </>
    )
}