import { Typewriter } from "react-simple-typewriter"

export default function Certification({ renderCertification, ID }) {
    return (
        <div className="w3-content w3-justify w3-text-gray">
            <h2 className="w3-text-gray w3-animate-left">CERTIFICATES</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            <div className='w3-center w3-animate-zoom w3-display-container'>
                <div className='w3-display-middle'>
                    <a href="https://www.linkedin.com/in/hasindu-sithmin-9a1a12209/details/certifications/" target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: '#004182' }}>See More</a>
                </div>
                <img src="/certificate.gif" alt="certificate" className='w3-image w3-circle ' width="50%" />
            </div>
            <div style={{ height: 405, display: 'flex', alignItems: 'center' }}>
                {
                    renderCertification  ?
                        <ul className='w3-text-gray w3-ul' style={{ margin: 'auto' }}>
                            <li>
                                🎓🏅 I have obtained a number of certifications in various subjects from prestigious institutions, including the University of Moratuwa, Hackerrank, and Kaggle.
                            </li>
                            <li>
                                From the University of Moratuwa, I have received certifications in a range of subjects, including 🐍 Python programming, 💻 web development, 🎨 frontend web development, 🖥️ backend web development, and 🤝 professional practice.&nbsp;<a href="https://hasindusithmin.github.io/certificates/codl/" target="_blank" rel="noreferrer" className='w3-text-blue'><i className="fa fa-external-link-square"></i></a>
                            </li>
                            <li>
                                Through Hackerrank, I have earned certifications in 🍵 Java, 🟨 JavaScript, 🔵 NodeJS, ⚛️ React, and 🐍 Python, showcasing my proficiency in some of the most widely used programming languages.&nbsp;<a href="https://hasindusithmin.github.io/certificates/hackerrank/" target="_blank" rel="noreferrer" className='w3-text-blue'><i className="fa fa-external-link-square"></i></a>
                            </li>
                            <li>
                                Finally, from Kaggle, I have received certifications in 🐼 Pandas, 📈 data visualization, and 🤖 machine learning. These certifications highlight my knowledge and expertise in areas related to data science and analysis.&nbsp;<a href="https://hasindusithmin.github.io/certificates/kaggle/" target="_blank" rel="noreferrer" className='w3-text-blue'><i className="fa fa-external-link-square"></i></a>
                            </li>
                            <li>
                                🌟 These certifications demonstrate my dedication to continuous learning and development, and my commitment to staying up-to-date with the latest trends and technologies in the field of computer science.
                            </li>
                        </ul>
                        :
                        <ul className='w3-text-gray w3-ul' style={{ margin: 'auto' }}>
                            <li>
                                <Typewriter
                                    key={ID}
                                    words={["🎓🏅 I have obtained a number of certifications in various subjects from prestigious institutions, including the University of Moratuwa, Hackerrank, and Kaggle."]}
                                    typeSpeed={50}
                                    cursor="|"
                                />
                            </li>
                            <li>
                                <Typewriter
                                    key={ID}
                                    words={["👨‍💻 From the University of Moratuwa, I have received certifications in a range of subjects, including 🐍 Python programming, 💻 web development, 🎨 frontend web development, 🖥️ backend web development, and 🤝 professional practice."]}
                                    typeSpeed={60}
                                    cursor="|"
                                />
                            </li>
                            <li>
                                <Typewriter
                                    key={ID}
                                    words={["💻 Through Hackerrank, I have earned certifications in 🍵 Java, 🟨 JavaScript, 🔵 NodeJS, ⚛️ React, and 🐍 Python, showcasing my proficiency in some of the most widely used programming languages."]}
                                    typeSpeed={70}
                                    cursor="|"
                                />
                            </li>
                            <li>
                                <Typewriter
                                    key={ID}
                                    words={["📊 Finally, from Kaggle, I have received certifications in 🐼 Pandas, 📈 data visualization, and 🤖 machine learning. These certifications highlight my knowledge and expertise in areas related to data science and analysis."]}
                                    typeSpeed={80}
                                    cursor="|"
                                />
                            </li>
                            <li>
                                <Typewriter
                                    key={ID}
                                    words={["🌟 These certifications demonstrate my dedication to continuous learning and development, and my commitment to staying up-to-date with the latest trends and technologies in the field of computer science."]}
                                    typeSpeed={90}
                                    cursor="|"
                                />
                            </li>
                        </ul>
                }
            </div>
            <div className='w3-padding-32'></div>
        </div>
    )
}