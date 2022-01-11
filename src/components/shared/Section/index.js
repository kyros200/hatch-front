import Link from '../Link'
import './Section.scss';

const Section = (props) => {
    return (
        <div className='section-container'>
            <div className='content'>
                <div className='header'>
                    {props.headerText}
                    <div className='line' />
                </div>
                {props.children}
                {props.to && props.footerText ? 
                    <div className='footer'>
                        <Link className="bold" to ={props.to}>
                            {props.footerText}
                        </Link> 
                        <div className='line' />
                    </div>
                : <></>}
            </div>
        </div>
    )
}

export default Section;