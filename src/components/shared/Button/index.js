import {useNavigate} from 'react-router-dom'
import './Button.scss'

const Button = ({children, className="", target="_blank", onClick, to, ...rest}) => {
    const navigate = useNavigate()
    return (
    <button 
        className={`buttonNajjar ${className}`}
        onClick={ onClick ? onClick : () => to.includes("https://") ? window.open(to, target).focus() : navigate(to)}
        {...rest}
    >
        {children}
    </button>
    )
}

export default Button;