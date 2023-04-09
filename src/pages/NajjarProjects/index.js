import Hero from '../../components/shared/Hero'
import Section from '../../components/shared/Section'
import Hatch from '../../components/shared/Hatch'
import NajjarDoc from '../../components/shared/NajjarDoc'
import NajjarProjectSection from './components/NajjarProjectSection'
import './NajjarProjects.scss'
import NajjarDocWhite from '../../components/shared/NajjarDoc/NajjarDocWhite.svg'
import { useEffect, useState } from 'react'

const NajjarProjects = () => {

    const [najjarDocModal, setNajjarDocModal] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const najjarDocData = [
        {
            label:"About",
            endpoint: "/najjarDoc"
        },
        {
            label:"Design",
            endpoint: "/najjarDoc/design"
        },
        {
            label:"Patch Notes",
            endpoint: "/najjarDoc/patchNotes"
        },
    ]

    const listTexts = 
    [
        {
            sequence: [
                'NajjarProjects. is the way that I want to show you my sites.',
                2000,
                'NajjarProjects. is the way that I want to show you my games.',
                2000,
                'NajjarProjects. is the way that I want to show you my events.',
                2000,
                'NajjarProjects. is the way that I want to show you my projects.',
                2000,
                'NajjarProjects. is the way that I want to show you my life.',
                2000,
                'NajjarProjects. is the way that I want to show you my ideas.',
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
                    title={<Hatch text="NajjarPad." />}
                    description={<span>An Online Markdown Notepad. Share your pads, organize yourself.</span>}
                    buttonLabel={<span>Go to <Hatch text="NajjarPad." /></span>}
                    to="https://pad.najjar.dev"
                />
                <NajjarProjectSection
                    title={<Hatch text="NajjarDoc." />}
                    description={<span>based on <Hatch text="NajjarPad." />, a way to do the documentation of all my projects</span>}
                    renderBottom={
                    <img className="najjarDocButton" src={NajjarDocWhite} alt="NajjarDoc." onClick={() => setNajjarDocModal(true)}/>
                    }
                    className="najjarDoc"
                />
                <NajjarProjectSection
                    title={<Hatch text="NajjarMtg." />}
                    description={<span>Site that show Legendary Magic the Gathering© cards that my brother owns. Updated daily.</span>}
                    buttonLabel={<span>Go to <Hatch text="NajjarMtg." /></span>}
                    backgroundColor={"#2B912D"}
                />
                <NajjarProjectSection
                    title={<Hatch text="NajjarPrototype." />}
                    description={<span>Create layouts for cards and tokens for your Boardgame here.</span>}
                    buttonLabel={<span>Go to <Hatch text="NajjarPrototype." /></span>}
                    className="najjarPrototype"
                />
                <NajjarProjectSection
                    title={<Hatch text="NajjarLogin." />}
                    description={<span>Login system for all other <Hatch text="NajjarProjects." /> and eventually <Hatch text="HatchGames." /></span>}
                    backgroundColor={"#2B918A"}
                />
                <NajjarProjectSection
                    title={'JLF'}
                    description={<span>My Monthly event with friends to play boardgames</span>}
                    buttonLabel={<span>Check JLF Instagram!</span>}
                    to={'https://www.instagram.com/jlf.boardgame/'}
                    className="jlf"
                />
                <NajjarProjectSection
                    title={'Gaed'}
                    description={<span>My 2-Player Deckbuilding Card Game about defeating the enemy team. My most advanced and beloved boardgame prototype ever, with 80+ unique artworks.</span>}
                    buttonLabel={<span>Soon at <Hatch text="HatchGames." /></span>}
                    backgroundColor={"#2B912D"}
                />
                <NajjarProjectSection
                    title={'3014'}
                    description={<span>My 1-4 Player cooperative boardgame about surviving a galatic trip back to earth</span>}
                    buttonLabel={<span>Soon at <Hatch text="HatchGames." /></span>}
                />
                <NajjarProjectSection
                    title={'Regent'}
                    description={<span>My 1-player boardgame about surviving an fragile kingdom over 3 years until the legitimate heir is old enough to reign. </span>}
                    buttonLabel={<span>Soon at <Hatch text="HatchGames." /></span>}
                    backgroundColor={"#2B918A"}
                />
            </Section>
            <Section
            backgroundColor='#2B912D'
            >
                Future Ideas - Section
            </Section>
            <NajjarDoc 
                open={najjarDocModal}
                onClose={() => setNajjarDocModal(false)}
                data={najjarDocData}
            />
        </>
    )
}

export default NajjarProjects;