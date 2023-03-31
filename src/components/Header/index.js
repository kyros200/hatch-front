import Link from '../shared/Link'
import Hatch from '../shared/Hatch'
import './Header.scss'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='content'>
                <Link className='title' to="/">
                    Hatch.
                </Link>
                <div className='buttons'>
                    <Link to="/games">Go to <Hatch text="HatchGames." /></Link> 
                </div>
            </div>
        </div>
    )
}

export default Header;