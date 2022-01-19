// import { useState } from 'react';
// import ReactLoading from 'react-loading';
import LandingHero from './LandingHero'
import LandingGames from './LandingGames'
import LandingEntries from './LandingEntries'
// import Modal from '../Modal';
import './MainPage.scss';

const MainPage = () => {

    // const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='landing-container'>
            <LandingHero />
            <LandingEntries />
            <LandingGames />
            {/* <Modal open={isLoading}>
                <ReactLoading type={"spin"} color="#2B912D" />
            </Modal> */}
        </div>
    )
}

export default MainPage;