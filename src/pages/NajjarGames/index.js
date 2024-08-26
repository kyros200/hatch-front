import Hero from '../../components/shared/Hero'
import Section from '../../components/shared/Section'
import Hatch from '../../components/shared/Hatch'
// import NajjarDoc from '../../components/shared/NajjarDoc'
import NajjarProjectSection from '../../components/NajjarProjectSection'
import FutureProjects from './components/FutureProjects'
import './NajjarProjects.scss'
// import NajjarDocWhite from '../../components/shared/NajjarDoc/NajjarDocWhite.svg'
import JLFLogo from './images/logoJLF.png'
import SGLogo from './images/SG_logo.png'
import { useEffect } from 'react'

const NajjarGames = () => {

    // const [najjarDocModal, setNajjarDocModal] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // const najjarDocData = [
    //     {
    //         label:"About",
    //         endpoint: "/najjarDoc"
    //     },
    //     {
    //         label:"Design",
    //         endpoint: "/najjarDoc/design"
    //     },
    //     {
    //         label:"Patch Notes",
    //         endpoint: "/najjarDoc/patchNotes"
    //     },
    // ]

    const listTexts = 
    [
        {
            sequence: [
                'NajjarGames. is games that I design for fun.',
                2000,
                'NajjarGames. is games that I craft with care.',
                2000,
                'NajjarGames. is games that I bring to life.',
                2000,
                'NajjarGames. is games that I create for you.',
                2000,
                'NajjarGames. is games that I play with passion.',
                2000,
                'NajjarGames. is games that I imagine daily.',
                2000,
                'NajjarGames. is games that I build with love.',
                2000,
                'NajjarGames. is games that I share with all.',
                2000,
                'NajjarGames. is games that I develop for joy.',
                2000,
                'NajjarGames. is games that I test endlessly.',
                2000,
                'NajjarGames. is games that I refine constantly.',
                2000,
                'NajjarGames. is games that I innovate tirelessly.',
                2000,
                'NajjarGames. is games that I enjoy with friends.',
                2000,
            ]
        },
    ]

    return (
        <>
            <Hero>
                {listTexts[Math.floor(Math.random() * listTexts.length)]}
            </Hero>
            <Section
            backgroundColor='#eeffee'
            >
                <NajjarProjectSection
                    title={<img src={JLFLogo} alt="JLF" />}
                    description={<span>My Monthly event with friends to play boardgames (in Rio de Janeiro)!</span>}
                    buttonLabel={<span>(pt-br) Check JLF Instagram!</span>}
                    to={'https://www.instagram.com/jlf.boardgame/'}
                    className="jlf"
                    classNameContent="jlfContent"
                />
                <NajjarProjectSection
                    title={<img src={SGLogo} alt="Summa Gemma" />}
                    description={<span>Ad Perfectum. Summa Gemma is a game about refining gems until you make the perfect one.</span>}
                    buttonLabel={<span>Play it now on Tabletopia!</span>}
                    backgroundColor={"#2B912D"}
                    to="https://tabletopia.com/games/summa-gemma-wa69s1/play-now"
                    className="sg"
                    classNameContent="sgContent"
                />
                <NajjarProjectSection
                    title={'3014'}
                    description={<span>My 1-4 Player cooperative boardgame about surviving a galatic trip back to Earth. Avaiable on TableTop Simulator!</span>}
                    buttonLabel={<span>Soon at <Hatch text="HatchGames." /></span>}
                    to="https://hatch.najjar.dev/games"
                />
                <NajjarProjectSection
                    title={'Gaed'}
                    description={<span>My 2-Player Deckbuilding Card Game about defeating the enemy team. My most advanced and beloved boardgame prototype ever, with 80+ unique artworks. Avaiable on TableTop Simulator!</span>}
                    buttonLabel={<span>Soon at <Hatch text="HatchGames." /></span>}
                    backgroundColor={"#2B912D"}
                    to="https://hatch.najjar.dev/games"
                />
                <NajjarProjectSection
                    title={'Regent'}
                    description={<span>My 1-player boardgame about surviving an fragile kingdom over 3 years until the legitimate heir is old enough to reign. </span>}
                    buttonLabel={<span>Soon at <Hatch text="HatchGames." /></span>}
                    backgroundColor={"#2B918A"}
                    to="https://hatch.najjar.dev/games"
                />
            </Section>
            <FutureProjects />
            {/* <NajjarDoc 
                open={najjarDocModal}
                onClose={() => setNajjarDocModal(false)}
                data={najjarDocData}
            /> */}
        </>
    )
}

export default NajjarGames;