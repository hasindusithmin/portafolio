import { Typewriter } from "react-simple-typewriter"

export default function Home({ renderHome, ID }) {
    return (
        <div className="w3-content w3-justify w3-text-gray">
            <h2 className="w3-text-gray w3-animate-left" id='eduHead'>ABOUT ME</h2>
            <hr style={{ width: '200px' }} className="w3-opacity" />
            <div className='w3-center w3-animate-zoom'>
                <img src="/hasindus.png" alt="Hasindu" className='w3-image w3-circle' width="50%" />
            </div>
            <p className='w3-text-gray'>
                {
                    !renderHome ?
                        <Typewriter
                            key={ID}
                            words={
                                [
                                    `👋 Hi, I'm Hasindu, I am a self driven 🐎, self motivated 💪🏼 and enthusiastic individual 🤙 with a passion for software development 👨🏻‍💻.
                    I have a  fundamental understanding ✅ of various software engineering concepts 💭 and have gained project-based knowledge 🔬 through various hands-on experiences 🏄🏻.
                    I am always looking for new challenges 🧗🏻 and opportunities🚪 to grow 🌱, and I believe that my skills 🤹 and experience 👴 make me an excellent candidate for any project 🚧. 
                    If you're looking for someone who is self-motivated 🎯, a team player ⚽, and a skilled problem solver 🕵🏻‍♀️, then look no further than me ✋.`
                                ]
                            }
                            typeSpeed={25}
                            cursor="|"
                        />
                        :
                        `👋 Hi, I'm Hasindu, I am a self driven 🐎, self motivated 💪🏼 and enthusiastic individual 🤙 with a passion for software development 👨🏻‍💻.
                    I have a  fundamental understanding ✅ of various software engineering concepts 💭 and have gained project-based knowledge 🔬 through various hands-on experiences 🏄🏻.
                    I am always looking for new challenges 🧗🏻 and opportunities🚪 to grow 🌱, and I believe that my skills 🤹 and experience 👴 make me an excellent candidate for any project 🚧. 
                    If you're looking for someone who is self-motivated 🎯, a team player ⚽, and a skilled problem solver 🕵🏻‍♀️, then look no further than me ✋.`
                }
            </p>
        </div>
    )
}