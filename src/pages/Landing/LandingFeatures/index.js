import Hatch from '../../../components/shared/Hatch';
import Section from '../../../components/shared/Section'
import Button from '../../../components/shared/Button'
import './LandingFeatures.scss';

const LandingFeatures = () => {

    return (
        <Section
            backgroundColor='#eeffee'
            className="landingFeaturesContainer"
        >
            <div className="landingFeaturesContent">
                <div class="left">
                    <Hatch text="HatchGames." />
                </div>
                <div className="right">
                    <div className='text'>
                        BoardGame plataform to play in Real Time with friends. Everything developed by me.
                    </div>
                    <Button
                        to="/games"
                    >
                        Go to <Hatch text="HatchGames." />
                    </Button>
                </div>
            </div>
            
            <div className="landingFeaturesContent">
                <div class="left">
                    <Hatch text="NajjarProjects." />
                </div>
                <div className="right">
                    <div className='text'>
                        Public projects with all kind of ideas. Sites, games, events and more.
                    </div>
                    <Button
                        to="/NajjarProjects"
                    >
                        Check out <Hatch text="NajjarProjects." /> page
                    </Button>
                </div>
            </div>
        </Section>
    )
}

export default LandingFeatures;