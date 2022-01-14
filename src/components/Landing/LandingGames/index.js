import Section from '../../shared/Section'
import CardGame from '../../shared/CardGame'
import './LandingGames.scss';

const LandingGames = () => {
    return (
        <Section
            headerText={`Currently Playing`}
            to={`/error`}
            footerText={`See all beaten games`}
        >
            <div className='cards-container'>
                <CardGame
                    name={"Tales of Symphonia"}
                    console={"gc"}
                    background='url(https://upload.wikimedia.org/wikipedia/en/6/6d/Tales_of_Symphonia_case_cover.jpg)'
                />
                <CardGame
                    name={"The Legend of Zelda: Twilight Princess"}
                    console={"gc"}
                    background='url(https://m.media-amazon.com/images/I/51-sTAVzeFL._AC_.jpg)'
                />
                <CardGame
                    name={"Tales of Symphonia"}
                    console={"gc"}
                    background='url(https://upload.wikimedia.org/wikipedia/en/6/6d/Tales_of_Symphonia_case_cover.jpg)'
                />
                <CardGame
                    name={"The Legend of Zelda: Twilight Princess"}
                    console={"gc"}
                    background='url(https://m.media-amazon.com/images/I/51-sTAVzeFL._AC_.jpg)'
                />
                <CardGame
                    name={"Tales of Symphonia"}
                    console={"gc"}
                    background='url(https://upload.wikimedia.org/wikipedia/en/6/6d/Tales_of_Symphonia_case_cover.jpg)'
                />
            </div>
        </Section>
    )
}

export default LandingGames;