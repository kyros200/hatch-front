import LandingHero from './LandingHero'
import LandingHatchDefinition from './LandingHatchDefinition'
import LandingHatchMeaning from './LandingHatchMeaning'
import LandingFeatures from './LandingFeatures'
// import LandingEntries from './LandingEntries'
// import LandingGames from './LandingGames'
import AboutMe from './AboutMe'

import './MainPage.scss';

const MainPage = () => {

    // const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='landing-container'>
            <LandingHero />
            <LandingHatchDefinition />
            <LandingHatchMeaning />
            <LandingFeatures />
            {/* <LandingEntries /> */}
            <AboutMe />
            {/* <LandingGames /> */}
        </div>
    )
}

export default MainPage;