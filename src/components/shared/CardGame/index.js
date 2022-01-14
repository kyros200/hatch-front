import Card from '../Card'
import logoGC from '../../../images/logo_GC_w.svg'
import './CardGame.scss'

const logoConsoles = {
    // ds:,
    // "3ds":,
    // psp:,
    // psvita:,

    // n64:,
    gc: logoGC,
    // wiiu:,
    // switch:,

    // ps3:,
    // ps4:,
}

const CardGame = ({name, console, ...rest}) => {
    return (
    <Card {...rest} className='card-game'>
        <div className='logo_console'>
            <img src={logoConsoles[console]} alt={`Logo ${console}`}/>
        </div>
        <div className='text'>
            {name}
        </div>
    </Card>
    )
}

export default CardGame;