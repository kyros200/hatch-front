import Button from '../../../../components/shared/Button'
import './NajjarProjectSection.scss'

const NajjarProjectSection = ({ title="Title", description, renderBottom, buttonLabel, to, backgroundColor, className, ...rest}) => {
    return (
        <div className={`najjarProjectSection ${className}`} {...rest}>
            <div class="left">
                {title}
            </div>
            <div className="right">
                <div className='text'>
                    {description}
                </div>
                {renderBottom ? renderBottom : <></>}
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
    )
}

export default NajjarProjectSection;