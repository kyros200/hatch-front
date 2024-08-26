import Section from '../../../../components/shared/Section'
import Hatch from '../../../../components/shared/Hatch'
import DropDown from '../../../../components/shared/DropDown'
import './FutureProjects.scss'

const FutureProjects = ({ title="Title", description, renderBottom, buttonLabel, to, backgroundColor, className, classNameContent, ...rest}) => {
    return (
        <Section
        backgroundColor='#2B912D'
        >
            <div className="futureProjectsContent">
                <div className="title">
                    Future Ideas
                </div>
                <div className="subTitle">
                    If I had time to develop everything I want, it would be a dream. This is a list of Projects of what I want to do next. Here is what I think:
                </div>
                <div className="dropDownContainer">
                    <DropDown 
                        title={"Element Gourmet"}
                        content={
                            <div>
                                <div>
                                    1-4 Board Game about being a Cook Wizard having a Food Truck. Prepare your Menu with the most bizarre and fantastic ingredients and be the most notourious Food Truck at the Fair!
                                </div>
                                <br/>
                                <div>
                                    Someday it'll be at <Hatch text="HatchGames." />, after Regent, Gaed and 3014.
                                </div>
                            </div>
                        }
                    />
                    <DropDown 
                        title={"Gaed: Black Market"}
                        content={
                            <div>
                                <div>
                                    Party Game with chaos about trading cards in 3 minutes.
                                </div>
                                <br/>
                                <div>
                                    Far far away, but I want to visit this project someday
                                </div>
                            </div>
                        }
                    />
                    <DropDown 
                        title={"Waiting for Them"}
                        content={
                            <div>
                                <div>
                                    Cooperative (?) game about surviving until the civilization reaches the destination. The players control an AI system, each part is a player but they cannot talk directly.
                                </div>
                                <br/>
                                <div>
                                    Just a concept. Nothing is done for this game. Heavily inspired by the game "Dome Keeper"
                                </div>
                            </div>
                        }
                    />
                    <DropDown 
                        title={"Washing Competition"}
                        content={
                            <div>
                                <div>
                                    Game about competitive washing machines
                                </div>
                                <br/>
                                <div>
                                    Tetris with some wild mechanics. I hope I'll make this one, seems fun.
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </Section>
    )
}

export default FutureProjects;