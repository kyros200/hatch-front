import Section from '../../../../components/shared/Section'
import Button from '../../../../components/shared/Button'
import './NajjarProjectSection.scss'

const NajjarProjectSection = ({ title="Title", description, buttonLabel, to, backgroundColor, className, ...rest}) => {
    return (
        <Section
            backgroundColor={backgroundColor}
        >
            <div className={`najjarProjectSection ${className}`} {...rest}>
                <div class="left">
                    {title}
                </div>
                <div className="right">
                    <div className='text'>
                        {description}
                    </div>
                    {buttonLabel ?
                    <Button
                        className="button"
                        to={to}
                    >
                        {buttonLabel}
                    </Button>
                    :<></>}
                </div>
            </div>
        </Section>
    )
}

export default NajjarProjectSection;