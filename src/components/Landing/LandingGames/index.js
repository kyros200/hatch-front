import Section from '../../shared/Section'
import Card from '../../shared/Card'
import './LandingGames.scss';

const LandingGames = () => {
    return (
        <Section
            headerText={`Currently Playing`}
            to={`/error`}
            footerText={`See all beaten games`}
        >
            <div className='cards-container'>
                <Card>
                    Game
                </Card>
                <Card
                backgroundColor={"purple"}>
                    Game
                </Card>
                <Card
                    backgroundColor={"yellow"}
                    color="black"
                    to="/error"
                >
                    Game
                </Card>
                <Card
                backgroundColor={"brown"}>
                    Game
                </Card>
                <Card
                backgroundColor={"pink"}>
                    Game
                </Card>
            </div>
        </Section>
    )
}

export default LandingGames;