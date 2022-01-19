import Link from '../../../components/shared/Link'
import Hatch from '../../../components/shared/Hatch'
import Hero from '../../../components/shared/Hero'
import rightArrow from '../../../images/right-arrow.svg';
import './LandingHero.scss';

const LandingHero = () => {
    const listTexts = [
        "Best way to define Myself is building a solution you could interact.",
        "This is all I want you to see about me.",
        "Everything about my Career and Dream job.",
        "All the news about everything I do.",
        "Everything you see here is made by me. This is who I am.",
        "This site is made by me for you. Check out what I have to say.",
        "This is a site telling why I make sites.",
        "No images, just you and my ideas."
    ]
    
    return (
        <Hero
            mainText={listTexts[Math.floor(Math.random() * listTexts.length)]}
        >
            <Link className='main-link' to="/me">
                About me
                <img className='image' src={rightArrow} alt="Arrow" />
            </Link>
            <Link className='main-link' to="/about">
                About <Hatch />
                <img className='image' src={rightArrow} alt="Arrow" />
            </Link>
        </Hero>
    )
}

export default LandingHero;