import Hero from '../../../components/shared/Hero'
import './LandingHero.scss';

const LandingHero = () => {
    // const listTexts = [
    //     "Best way to define Myself is building a solution you could interact.",
    //     "This is all I want you to see about me.",
    //     "Everything about my Career and Dream job.",
    //     "All the news about everything I do.",
    //     "Everything you see here is made by me. This is who I am.",
    //     "This site is made by me for you. Check out what I have to say.",
    //     "This is a site telling why I make sites.",
    //     "No images, just you and my ideas."
    // ]

    const listTexts = 
    [
        {
            sequence: [
                'Best way to define Myself is building a solution you could read.',
                2000,
                'Best way to define Myself is building a solution you could play.',
                2000,
                'Best way to define Myself is building a solution you could interact with.',
                2000,
            ],
            repeat: 0
        },
        {
            sequence: [
                "Everything you see here is made by me. This is who I am.",
                2000,
                "Everything you see here is made by me. This is what I do.",
                2000,
                "Everything you see here is made by me. This is where I thrive.",
                2000,
            ],
            repeat: 0
        },
        {
            sequence: [
                'This is a site telling why I make games.',
                2000,
                'This is a site telling why I make sites.',
                2000,
                'This is a site telling why I make ideas come true.',
                2000,
            ],
            repeat: 0
        },
    ]

    
    return (
        <Hero>
            {listTexts[Math.floor(Math.random() * listTexts.length)]}
        </Hero>
    )
}

export default LandingHero;