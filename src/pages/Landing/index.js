import LandingHero from './LandingHero'
import LandingHatch from './LandingHatch'
import LandingHatchGames from './LandingHatchGames'
import LandingNajjarProjects from './LandingNajjarProjects'
// import LandingEntries from './LandingEntries'
import AboutMe from './AboutMe'

import './MainPage.scss';

const MainPage = () => {

    // const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='landing-container'>
            <LandingHero />
            <LandingHatch />
            <LandingHatchGames />
            <LandingNajjarProjects />
            {/* <LandingEntries /> */}
            <AboutMe />
            {/* <LandingGames /> */}
        </div>
    )
}

export default MainPage;