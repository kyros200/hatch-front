import Hero from '../../components/shared/Hero'
import Section from '../../components/shared/Section'
import Hatch from '../../components/shared/Hatch'
import NajjarDoc from '../../components/shared/NajjarDoc'
import NajjarProjectSection from '../../components/NajjarProjectSection'
import FutureProjects from './components/FutureProjects'
import './NajjarProjects.scss'
import NajjarDocWhite from '../../components/shared/NajjarDoc/NajjarDocWhite.svg'
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
            label:<>About <Hatch /></>,
            endpoint: "/hatch"
        },
        {
            label:<>About <Hatch text="HatchGames." /></>,
            endpoint: "/hatchgames"
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