import Hero from '../../components/shared/Hero'
import Section from '../../components/shared/Section'
import CardEntry from '../../components/shared/CardEntry'
import Input from '../../components/shared/Input'
import './Entries.scss'
import NumberSearch from '../../components/shared/NumberSearch'

const Entries = () => {
    const tags = [
        {name: "Boardgame", key: "Boardgame"},
        {name: "Regente", key: "Regente"},
        {name: "Playtest", key: "Playtest"},
        {name: "Prototype", key: "Prototype"},
    ];
    return (
        <>
            <Hero mainText="Everything about everything."/>
            <Section
                backgroundColor='white'
                headerText={`Recent Entries`}
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
            <Section
                headerText={`Search Entries`}
            >
                <div className='search-container'>
                    <div className='inputs'>
                        <Input 
                            label="Name"
                            placeholder="Entry Name"
                        />

                        <Input 
                            label="Date"
                            placeholder="From"
                            type="date"
                        />

                        <Input 
                            label=""
                            placeholder="To"
                            type="date"
                        />
                    </div>
                    <div className='info-results'>
                        Found <NumberSearch>13</NumberSearch> entries
                    </div>
                    <div className='results'>
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
                </div>
            </Section>
        </>
    )
}

export default Entries;