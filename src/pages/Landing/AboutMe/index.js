import Section from '../../../components/shared/Section'
import Hatch from '../../../components/shared/Hatch'

import Linkedin from './images/linkedin.svg'
import Github from './images/github.svg'
import Gmail from './images/gmail.svg'
import Patreon from './images/patreon.svg'
import Twitch from './images/twitch.svg'

import './AboutMe.scss';

const AboutMe = () => {

    return (
        <Section backgroundColor='#eeffee' >
            <div className='aboutMeContent'>
                <div className="left">
                    <div className="image">
                        <img src="https://github.com/kyros200.png" alt="Rafael Najjar Github profile"/>
                    </div>
                </div>
                <div className="right">
                    <div className="aboutMeTitle">
                        About Me
                    </div>
                    <p>
                        I'm <b>Rafael Najjar</b> and nowadays I am a FullStack Developer, but I love to study and practice with new projects.
                    </p>
                    <p>
                        I try to be a creator whenever I can. I like new challenges for whatever subject it comes, and how to solve problems with the power of creation. Thats why as a developer I do not only create sites, but solutions.
                    </p>
                    <p>
                        I hope you like <Hatch /> as much as I do, because I'm pouring a lot of my life on it, to finally be able to share everything I create for you. Here you can see my Personal projects and products that I envision. Sites, games, a blog ... Everything you see here is entirely made by me.
                    </p>
                    <p>
                        Feel free to reach me out on the following channels:
                    </p>
                    <div className="channels">
                        <a href="https://www.linkedin.com/in/rafaelnajjar/" target="_blank" rel="noreferrer" >
                            <img src={Linkedin} alt="Linkedin" />
                        </a>
                        <a href="https://github.com/kyros200" target="_blank" rel="noreferrer" >
                            <img src={Github} alt="Github" />
                        </a>
                        <a href="https://www.twitch.tv/casualnajjar" target="_blank" rel="noreferrer" >
                            <img src={Twitch} alt="Twitch" />
                        </a>
                        <a href="mailto:rafaelnajjar@gmail.com" target="_blank" rel="noreferrer" >
                            <img src={Gmail} alt="Gmail" />
                        </a>
                        <a href="https://patreon.com/Hatch666" target="_blank" rel="noreferrer" >
                            <img src={Patreon} alt="Patreon" />
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default AboutMe;