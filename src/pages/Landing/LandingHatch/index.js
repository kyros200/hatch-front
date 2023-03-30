import Section from '../../../components/shared/Section'
import Hatch from '../../../components/shared/Hatch'
import SoundImage from './images/sound.svg';
import './LandingHatch.scss';

const LandingHatch = () => {

    const play = () => {
        const audio = document?.getElementById("hatchAudio");
        audio?.play();
    }

    return (
        <Section
            backgroundColor='#eeffee'
        >
            <div className="landingHatchContent">
                <div class="left">
                    <div className='line firstLine'>
                        <h2>Hatch.</h2>
                        <p>/hætʃ/</p>
                        <div onClick={play}>
                            <img src={SoundImage} alt="play recording" />
                            <audio id="hatchAudio" src="https://dictionary.cambridge.org/us/media/english/us_pron/h/hat/hatch/hatch.mp3" />
                        </div> 
                    </div>
                    <div className='line verbLine'>
                        verb
                    </div>
                </div>
                <div className="right">
                    <div className='line definitionLine'>
                        "to (cause an egg to) break in order to allow a young animal to come out"
                    </div>
                    <div className='line cambridgeLine'>
                        <div />
                        Cambridge English Dictionary
                    </div>
                </div>
            </div>
            <div className='line hatchLine'>
                <Hatch className="hatch" /> is the Hub of everything mine, to let them flourish as it should be.
            </div>
        </Section>
    )
}

export default LandingHatch;