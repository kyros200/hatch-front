import Section from '../../shared/Section'
import './LandingEntries.scss';

const LandingEntries = () => {
    return (
        <Section
            headerText={`Recent Entries`}
            to={`/error`}
            footerText={`See all entries`}
        >
            <div className='entries-container'>
                <div className='entry'>
                    Entry
                </div>
                <div className='entry'>
                    Entry
                </div>
                <div className='entry'>
                    Entry
                </div>
            </div>
        </Section>
    )
}

export default LandingEntries;