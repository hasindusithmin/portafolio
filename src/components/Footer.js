

export default function Footer() {

    const PLATS = [
        {
            "name": "Linkedin",
            "icon": "fa fa-linkedin",
            "color": "#0a66c2",
            "url": "https://www.linkedin.com/in/hasindu-sithmin-9a1a12209/"
        },
        {
            "name": "Blog",
            "icon": "fa fa-bold",
            "color": "#f57d00",
            "url": "https://dev-cup.vercel.app"
        },
        {
            "name": "Github",
            "icon": "fa fa-github",
            "color": "#333",
            "url": "https://github.com/hasindusithmin"
        },
        {
            "name": "Medium",
            "icon": "fa fa-medium",
            "color": "#00ab6c",
            "url": "https://medium.com/@hasindusithmin64"
        },
        {
            "name": "Gmail",
            "icon": "fa fa-envelope",
            "color": "#8a90c7",
            "url": "mailto:hasindusithmin64@gmail.com"
        }
    ]

    return (
        <>
            <div className="w3-padding w3-text-white">...</div>
            <footer className="w3-container w3-center w3-bottom">
                <p className="w3-center w3-hide-large w3-hide-medium">
                    {
                        PLATS.map(({ name, icon, url, color }) => (
                            <span className='w3-padding-large w3-round-large' key={name} >
                                <a href={url} target="_blank" rel="noreferrer" title={name}><i className={icon} style={{fontSize:'16px',color:`${color}`}}></i></a>
                            </span>
                        ))
                    }
                </p>
                <p className="w3-center w3-hide-small">
                    {
                        PLATS.map(({ name, icon, url, color }) => (
                            <span className='w3-padding-large w3-round-large w3-margin' key={name} >
                                <a href={url} target="_blank" rel="noreferrer" title={name}><i className={icon} style={{fontSize:'24px',color:`${color}`}}></i></a>
                            </span>
                        ))
                    }
                </p>
            </footer>
        </>
    )
}