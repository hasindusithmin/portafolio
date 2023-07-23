import { Typewriter } from "react-simple-typewriter"

export default function Education({ renderEducation }) {
    return (
        <div className="w3-content w3-justify w3-text-gray">
            <h2 className="w3-text-gray w3-animate-left" id='eduHead'>EDUCATION</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            <div className='w3-center w3-animate-zoom w3-display-container'>
                <div className='w3-display-middle'>
                    <a href="https://www.linkedin.com/in/hasindu-sithmin-9a1a12209/details/education/" target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: '#004182' }}>See More</a>
                </div>
                <img src="/diploma.gif" alt="diploma" className='w3-image w3-circle ' width="50%" />
            </div>
            <p className='w3-text-gray'>
                <h5 className='w3-center'>
                    {renderEducation > 1 ? '🎓 My Education Journey 🎓' : <Typewriter words={['🎓 My Education Journey 🎓']} typeSpeed={200} />}
                </h5>
                <hr />
                <div className='w3-display-container'>
                    <div class="w3-padding w3-display-topright" style={{ fontSize: '25px' }}>
                        <a href="https://www.sjc.lk/" target='_blank' rel="noreferrer" ><i className="fa fa-external-link-square"></i></a>
                    </div>
                    <img className='w3-image w3-round-large' src="/education/sjc.png" alt="St.Joseph's College" />
                </div>
                <p>
                    📚 I started my education journey at St. Joseph's College in Anuradhapura, where I successfully completed my Ordinary Level Exam with outstanding results. I achieved Grade A-7, B-1, and C-1, which gave me the confidence to pursue my dreams further.
                </p>
                <div className='w3-display-container'>
                    <div class="w3-padding w3-display-topright" style={{ fontSize: '25px' }}>
                        <a href="https://www.anucentralcollege.lk/" target='_blank' rel="noreferrer" ><i className="fa fa-external-link-square"></i></a>
                    </div>
                    <img className='w3-image w3-round-large' src="/education/acc.jpg" alt="Anuradhapura Central College" />
                </div>
                <p>
                    📈 Moving forward, I continued my academic journey at Central College Anuradhapura, where I completed my Advanced Level Exam with a Grade of C-3 in Combined Mathematics, Physics, and Chemistry. Despite the challenges, I worked hard and remained dedicated to achieving my goals.
                </p>
                <div className='w3-display-container'>
                    <div class="w3-padding w3-display-topright" style={{ fontSize: '25px' }}>
                        <a href="https://itum.mrt.ac.lk/" target='_blank' rel="noreferrer" ><i className="fa fa-external-link-square"></i></a>
                    </div>
                    <img className='w3-image w3-round-large' src="/education/itum.jpg" alt="Institute Of Technology University Of Moratuwa" />
                </div>
                <p>
                    🎯 With a strong academic background and a desire to learn, I enrolled at the Institute of Technology, University of Moratuwa, to pursue a program in Information Technology. I dedicated myself to my studies, and with perseverance and hard work, I successfully completed my educational program.
                </p>
                <hr />
                <p>
                    👨‍🎓👩‍🎓 Education is the foundation for success, and I am grateful for the opportunities I have had to learn and grow. I am excited to share my knowledge and experiences with others and to inspire them to achieve their dreams.
                </p>
            </p>
        </div>
    )
}