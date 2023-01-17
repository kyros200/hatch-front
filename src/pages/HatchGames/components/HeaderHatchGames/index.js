import Link from '../../../../components/shared/Link'
import './Header.scss'

const Header = ({connected, clientId}) => {
    return (
        <div className='header-container'>
            <div className='content'>
                <Link className='title' to="/">
                    Hatch.
                </Link>
                <div className='userInfo'>
                    {`Connected? ${connected}${connected ? ` (${clientId})` : ""}`}
                </div>
            </div>
        </div>
    )
}

export default Header;