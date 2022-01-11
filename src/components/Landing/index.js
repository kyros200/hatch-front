// import { useState } from 'react';
// import ReactLoading from 'react-loading';
import LandingHero from './LandingHero'
// import Modal from '../Modal';
import './MainPage.scss';

const MainPage = () => {

    // const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='landing-container'>
            <LandingHero />
            {/* <Modal open={isLoading}>
                <ReactLoading type={"spin"} color="#2B912D" />
            </Modal> */}
        </div>
    )
}

export default MainPage;