import Link from '../Link'
import './Section.scss';

const Section = ({ children, headerText, headerLine = true, to, footerText, footerLine = true, backgroundColor = "#eeffee"}) => {
    return (
        <div className='section-container' style={{backgroundColor}}>
            <div className='content'>
                <div className='header'>
                    {headerText}
                    {headerLine ?
                    <div className='line' />
                    : <></>
                    }
                </div>
                {children}
                {to && footerText ? 
                    <div className='footer'>
                        <Link className="bold" to={to}>
                            {footerText}
                        </Link> 
                        {footerLine ?
                        <div className='line' />
                        : <></>
                        }   
                    </div>
                : <></>}
            </div>
        </div>
    )
}

export default Section;