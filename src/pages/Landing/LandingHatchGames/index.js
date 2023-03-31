import Hatch from '../../../components/shared/Hatch';
import Section from '../../../components/shared/Section'
import './LandingHatchGames.scss';

const LandingHatchGames = () => {

    return (
        <Section
            backgroundColor='#2B912D'
        >
            <div className="landingHatchGamesContent">
                <div class="left">
                    <Hatch text="HatchGames." />
                </div>
                <div className="right">
                    <div className='text'>
                        BoardGame plataform to play in Real Time with friends. Everything developed by me.
                    </div>
                    <button>Go to <Hatch text="HatchGames." /></button>
                </div>
            </div>
        </Section>
    )
}

export default LandingHatchGames;