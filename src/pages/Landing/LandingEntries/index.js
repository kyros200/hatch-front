import Section from '../../../components/shared/Section'
import CardEntry from '../../../components/shared/CardEntry'
import './LandingEntries.scss';

const LandingEntries = () => {
    const tags = [
        {name: "Boardgame", key: "Boardgame"},
        {name: "Regente", key: "Regente"},
        {name: "Playtest", key: "Playtest"},
        {name: "Prototype", key: "Prototype"},
    ];

    return (
        <Section
            backgroundColor='white'
            headerText={`Recent Entries`}
            headerLine={false}
            to={`/entries`}
            footerText={`See all entries`}
            footerLine={false}
        >
            <div className='entries-content'>
                <CardEntry
                    name={`An Introduction to examples of this project.`}
                    date={`2022-01-12`}
                    tags={tags}
                    to="/error"
                />
                <CardEntry
                    name={`An Introduction to examples of this project.`}
                    date={`2022-01-12`}
                    tags={tags}
                    to="/error"
                />
                <CardEntry
                />
                <CardEntry
                    name={`An Introduction to examples of this project.`}
                    date={`2022-01-12`}
                    tags={tags}
                    to="/error"
                />
            </div>
        </Section>
    )
}

export default LandingEntries;