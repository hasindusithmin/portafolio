

export default function Footer() {

    const PLATS = [
        {
            "name":"Linkedin",
            "image":"linkedin1.png",
            "url":"https://www.linkedin.com/in/hasindu-sithmin-9a1a12209/"
        },
        {
            "name":"Medium",
            "image":"medium.png",
            "url":"https://medium.com/@hasindusithmin64"
        },
        {
            "name":"Github",
            "image":"github.png",
            "url":"https://github.com/hasindusithmin"
        }
    ]

    return (
        <footer className="w3-container w3-padding-32 w3-center w3-black">
            <p className="w3-center">
                {
                    PLATS.map(({name,image,url})=>(
                        <span className='w3-white w3-padding-large w3-round-large w3-margin-right'  key={name} >
                            <a href={url} target="_blank" rel="noreferrer"><img src={`/devimages/${image}`} alt={name} width="35" height="35" /></a>
                        </span>
                    ))
                }
            </p>
        </footer>
    )
}