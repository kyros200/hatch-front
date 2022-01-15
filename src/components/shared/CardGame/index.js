import Card from '../Card'
import logoGC from '../../../images/logo_GC_w.svg'
import logoN64 from '../../../images/logo_n64_w.svg'
import logoWiiU from '../../../images/logo_wiiu_w.svg'
import logoSwitch from '../../../images/logo_ns.svg'
import logoPs4 from '../../../images/logo_ps4_b.svg'
import logoPsv from '../../../images/logo_psv_b.svg'
import './CardGame.scss'

const logoConsoles = {
    // ds:,
    // "3ds":,
    // psp:,
    psv: logoPsv,

    n64:logoN64,
    gc: logoGC,
    wiiu: logoWiiU,
    switch: logoSwitch,

    // ps3:,
    ps4: logoPs4,
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