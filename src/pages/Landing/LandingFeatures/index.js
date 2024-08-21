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
                <div className="left">
                    <Hatch text="NajjarGames." />
                </div>
                <div className="right">
                    <div className='text'>
                        My Boardgames. I try to develop from scratch a server named <Hatch text="HatchGames." /> to play them!
                    </div>
                    <Button
                        to="/NajjarGames"
                    >
                        Check out <Hatch text="NajjarGames." />
                    </Button>
                    <Button
                        to="/games"
                    >
                        Go to <Hatch text="HatchGames." />
                    </Button>
                </div>
            </div>

            <div className="landingFeaturesContent">
                <div className="left">
                    <Hatch text="NajjarProjects." />
                </div>
                <div className="right">
                    <div className='text'>
                        Public projects with all kind of ideas.
                    </div>
                    <Button
                        to="/NajjarProjects"
                    >
                        Check out <Hatch text="NajjarProjects." />
                    </Button>
                </div>
            </div>
        </Section>
    )
}

export default LandingFeatures;