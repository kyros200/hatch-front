import Hero from '../../components/shared/Hero'
import Section from '../../components/shared/Section'
import Hatch from '../../components/shared/Hatch'
import NajjarDoc from '../../components/shared/NajjarDoc'
import NajjarProjectSection from './components/NajjarProjectSection'
import FutureProjects from './components/FutureProjects'
import './NajjarProjects.scss'
import NajjarDocWhite from '../../components/shared/NajjarDoc/NajjarDocWhite.svg'
import JLFLogo from './images/logoJLF.png'
import { useEffect, useState } from 'react'

const NajjarProjects = () => {

    const [najjarDocModal, setNajjarDocModal] = useState(false)
    const [najjarLoginModal, setNajjarLoginModal] = useState(false)
    const [najjarHatchModal, setNajjarHatchModal] = useState(false)

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

    const najjarLoginData = [
        {
            label:"About",
            endpoint: "/najjarLogin"
        },
        {
            label:"Design",
            endpoint: "/najjarLogin/design"
        },
        {
            label:"Patch Notes",
            endpoint: "/najjarLogin/patchNotes"
        },
    ]

    const najjarHatchData = [
        {
            label:"About",
            endpoint: "/hatch"
        },
        {
            label:"Design",
            endpoint: "/hatch/design"
        },
        {
            label:"Patch Notes",
            endpoint: "/hatch/patchNotes"
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
                    title={<Hatch />}
                    description={<span>The project you are right now to know me more. <Hatch text="HatchGames." /> is also here.</span>}
                    renderBottom={
                    <img className="najjarDocButton" src={NajjarDocWhite} alt="NajjarDoc." onClick={() => setNajjarHatchModal(true)}/>
                    }
                    className="najjarDoc"
                />
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
                    to="https://mtg.najjar.dev"
                />
                <NajjarProjectSection
                    title={<Hatch text="NajjarPrototype." />}
                    description={<span>Create layouts for cards and tokens for your Boardgame here.</span>}
                    buttonLabel={<span>Go to <Hatch text="NajjarPrototype." /></span>}
                    className="najjarPrototype"
                    to="https://card-generator.najjar.dev"
                />
                <NajjarProjectSection
                    title={<Hatch text="NajjarLogin." />}
                    description={<span>Login system for all other <Hatch text="NajjarProjects." /> and eventually <Hatch text="HatchGames." /></span>}
                    backgroundColor={"#2B918A"}
                    renderBottom={
                        <img className="najjarDocButton" src={NajjarDocWhite} alt="NajjarDoc." onClick={() => setNajjarLoginModal(true)}/>
                    }
                    className="najjarDoc"
                />
                <NajjarProjectSection
                    title={<img src={JLFLogo} alt="JLF" />}
                    description={<span>My Monthly event with friends to play boardgames!</span>}
                    buttonLabel={<span>(pt-br) Check JLF Instagram!</span>}
                    to={'https://www.instagram.com/jlf.boardgame/'}
                    className="jlf"
                    classNameContent="jlfContent"
                />
                <NajjarProjectSection
                    title={'Gaed'}
                    description={<span>My 2-Player Deckbuilding Card Game about defeating the enemy team. My most advanced and beloved boardgame prototype ever, with 80+ unique artworks.</span>}
                    buttonLabel={<span>Soon at <Hatch text="HatchGames." /></span>}
                    backgroundColor={"#2B912D"}
                    to="https://hatch.najjar.dev/games"
                />
                <NajjarProjectSection
                    title={'3014'}
                    description={<span>My 1-4 Player cooperative boardgame about surviving a galatic trip back to earth</span>}
                    buttonLabel={<span>Soon at <Hatch text="HatchGames." /></span>}
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
            <NajjarDoc 
                open={najjarHatchModal}
                onClose={() => setNajjarHatchModal(false)}
                data={najjarHatchData}
            />
            <NajjarDoc 
                open={najjarDocModal}
                onClose={() => setNajjarDocModal(false)}
                data={najjarDocData}
            />
            <NajjarDoc 
                open={najjarLoginModal}
                onClose={() => setNajjarLoginModal(false)}
                data={najjarLoginData}
            />
        </>
    )
}

export default NajjarProjects;