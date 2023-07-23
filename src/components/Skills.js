import { Typewriter } from "react-simple-typewriter"

export default function Skills({ verified, renderSkills, mySkills, ID }) {
    return (
        <div className="w3-content w3-justify w3-text-gray" >
            <h2 className="w3-text-gray w3-animate-left">SKILLS</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            <div className='w3-center w3-animate-zoom w3-display-container'>
                <div className='w3-display-middle'>
                    <a href="https://www.linkedin.com/in/hasindu-sithmin-9a1a12209/details/skills/" target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: '#004182' }}>See More</a>
                </div>
                <img src="/verified.gif" alt="skills" className='w3-image w3-circle ' width="50%" />
            </div>
            <div style={{ height: 405, display: 'flex', alignItems: 'center' }}>
                {
                    renderSkills ?
                        <ul className='w3-text-gray w3-ul' style={{ margin: 'auto' }}>
                            {
                                mySkills.map(skill => <li key={Math.random()}>{skill}</li>)
                            }
                        </ul>
                        :
                        <ul className='w3-text-gray w3-ul' style={{ margin: 'auto' }}>
                            <li>
                                <Typewriter
                                    key={ID}
                                    words={[mySkills[0]]}
                                    typeSpeed={50}
                                    cursor="|"
                                />
                            </li>
                            <li>
                                <Typewriter
                                    key={ID}
                                    words={[mySkills[1]]}
                                    typeSpeed={60}
                                    cursor="|"
                                />
                            </li>
                            <li>
                                <Typewriter
                                    key={ID}
                                    words={[mySkills[2]]}
                                    typeSpeed={70}
                                    cursor="|"
                                />
                            </li>
                            <li>
                                <Typewriter
                                    key={ID}
                                    words={[mySkills[3]]}
                                    typeSpeed={80}
                                    cursor="|"
                                />
                            </li>
                            <li>
                                <Typewriter
                                    key={ID}
                                    words={[mySkills[4]]}
                                    typeSpeed={90}
                                    cursor="|"
                                />
                            </li>
                        </ul>
                }
            </div>
            <div className='w3-padding-64'></div>
        </div>
    )
}