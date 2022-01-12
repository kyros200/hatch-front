import {useNavigate} from 'react-router-dom'
import './Card.scss'

const Card = ({children, backgroundColor, color, to}) => {
    const navigate = useNavigate()
    return (
    <div className='card' style={{backgroundColor, color}} onClick={() => to && navigate(to)}>
        {children}
    </div>
    )
}

export default Card;