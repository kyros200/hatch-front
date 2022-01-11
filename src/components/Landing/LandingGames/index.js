import Section from '../../shared/Section'
import './LandingGames.scss';

const LandingGames = () => {
    return (
        <Section
            headerText={`Currently Playing`}
            to={`/error`}
            footerText={`See all beaten games`}
        >
            <div className='cards-container'>
                <div className='card'>
                    Game
                </div>
                <div className='card'>
                    Game
                </div>
                <div className='card'>
                    Game
                </div>
                <div className='card'>
                    Game
                </div>
                <div className='card'>
                    Game
                </div>
            </div>
        </Section>
    )
}

export default LandingGames;