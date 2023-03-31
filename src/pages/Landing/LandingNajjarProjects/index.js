import Hatch from '../../../components/shared/Hatch';
import Section from '../../../components/shared/Section';
import Button from '../../../components/shared/Button';
import './LandingNajjarProjects.scss';

const LandingNajjarProjects = () => {

    return (
        <Section
            backgroundColor='white'
        >
            <div className="landingNajjarProjectsContent">
                <div class="right onlyMobile">
                    <Hatch text="NajjarProjects." />
                </div>
                <div className="left">
                    <div className='text'>
                        Public projects with all kind of ideas. Sites, games, events and more.
                    </div>
                    <Button
                        to="/NajjarProjects"
                    >
                        Check out <Hatch text="NajjarProjects." /> page
                    </Button>
                </div>
                <div class="right onlyDesktop">
                    <Hatch text="NajjarProjects." />
                </div>
            </div>
        </Section>
    )
}

export default LandingNajjarProjects;