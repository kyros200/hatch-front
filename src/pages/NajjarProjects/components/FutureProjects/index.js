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
                    If I had time to develop everything I want, it would be a dream. This is a list of Projects of what I want to do next. It can be sites, games, everything. Here is what I think:
                </div>
                <div className="dropDownContainer">
                    <DropDown 
                        title={<Hatch text="NajjarBlog." />}
                        content={
                            <div>
                                <div>
                                    A big project to show my POV when developing. I'm talking about my decisions about everything, from game design to how did I develop something specific technically. With random info for sure.
                                </div>
                                <br/>
                                <div>
                                    I'm planning to develop this project as a expansion to the <Hatch /> project, as a new page (and a new section at the Landing Page). After initial launch of <Hatch text="HatchGames." /> I'll start this project.
                                </div>
                            </div>
                        }
                    />
                    <DropDown 
                        title={"Element Gourmet"}
                        content={
                            <div>
                                <div>
                                    1-4 Board Game about being a Cook Wizard having a Food Truck. Prepare your Menu with the most bizarre and fantastic ingredients and be the most notourious Food Truck at the Fair!
                                </div>
                                <br/>
                                <div>
                                    Someday it'll be at <Hatch text="HatchGames." />, after Regent and Gaed.
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