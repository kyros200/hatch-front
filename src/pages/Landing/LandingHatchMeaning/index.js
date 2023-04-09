import Section from '../../../components/shared/Section'
import Hatch from '../../../components/shared/Hatch'
import './LandingHatchMeaning.scss';

const LandingHatch = () => {
    return (
        <Section
            backgroundColor='#2B912D'
        >
            <div className='landingHatchMeaningContent'>
                <Hatch className="hatch" /> is the Hub of everything mine, to let them flourish as it should be.
            </div>
        </Section>
    )
}

export default LandingHatch;