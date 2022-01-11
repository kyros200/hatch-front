import {Link as L} from 'react-router-dom'
import './Link.scss';

const Link = (props) => {
    return (
        <L className={`link ${props.className}`} to={props.to}>
            {props.children}
        </L>
    )
}

export default Link;