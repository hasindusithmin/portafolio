

export default function Projects({ PROJECTS }) {

    const openNewWindow = (url) => {
        let w = 800;
        let h = 500;
        let left = (window.screen.width / 2) - (w / 2);
        let top = (window.screen.height / 2) - (h / 2);
        window.open(url, '_blank', 'width=' + w + ', height=' + h + ', left=' + left + ', top=' + top);
    }

    return (
        <div className="w3-content w3-justify w3-text-gray">
            <h2 className="w3-text-gray w3-animate-left">PROJECTS</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            {
                !PROJECTS && <div className='w3-large'><b>Loading...</b></div>
            }
            {
                PROJECTS &&
                PROJECTS.map(({ _id, name, url, github, description }) => (
                    <div className='w3-row w3-padding w3-card w3-round-large w3-white w3-margin-bottom' key={_id}>
                        <h3 className='w3-opacity'><b>{name}</b></h3>
                        <div className='w3-padding'>
                            <iframe
                                src={url}
                                title={name}
                                className='iframe'
                                style={{
                                    width: "100%",
                                    height: 500,
                                    border: "none",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                    margin: "0 auto",
                                    display: "block"
                                }}
                            />
                        </div>
                        <div className='w3-padding'>
                            <span onClick={() => { openNewWindow(url) }} className='w3-button  w3-round-large' target="_blank" rel="noreferrer">
                                <img src="/devimages/chrome.png" alt='web2' width="35" height="35" />&nbsp;<span className='w3-hide-small'>Project URL</span>
                            </span>
                            &nbsp;
                            {
                                github &&
                                <span onClick={() => { openNewWindow(github) }} className='w3-button w3-round-large' target="_blank" rel="noreferrer">
                                    <img src="/devimages/new-github.png" alt='github' width="35" height="35" />&nbsp;<span className='w3-hide-small'>Source Code</span>
                                </span>
                            }
                        </div>
                        <p className='w3-justify' style={{ overflow: 'hidden' }}>{description}</p>
                    </div>
                ))
            }
        </div>
    )
}