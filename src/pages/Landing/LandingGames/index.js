import Section from '../../../components/shared/Section'
import CardGame from '../../../components/shared/CardGame'
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
                    image='https://upload.wikimedia.org/wikipedia/en/6/6d/Tales_of_Symphonia_case_cover.jpg'
                />
                <CardGame
                    name={"Mischief Makers"}
                    console={"n64"}
                    image='https://upload.wikimedia.org/wikipedia/pt/3/31/Mischief_Makers.jpg'
                />
                <CardGame
                    name={"Tokyo Mirage Session #FE"}
                    console={"wiiu"}
                    image='https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TokyoMirageSessionsFE_image1600w.jpg'
                />
                <CardGame
                    name={"The Last of Us"}
                    console={"ps4"}
                    image='https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/The_Last_of_Us_capa.png/275px-The_Last_of_Us_capa.png'
                />
                <CardGame
                    name={"Oreshika: Tainted Bloodlines"}
                    console={"psv"}
                    image='https://upload.wikimedia.org/wikipedia/en/f/fb/OreShika2_cover.jpg'
                />
                <CardGame
                    name={"Fire Emblem Warriors"}
                    console={"switch"}
                    image='https://upload.wikimedia.org/wikipedia/en/f/fb/OreShika2_cover.jpg'
                />
            </div>
        </Section>
    )
}

export default LandingGames;