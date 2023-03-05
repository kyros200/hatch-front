import Link from '../../../../components/shared/Link'
import './Header.scss'

const HeaderHatchGames = ({isConnected, clientInfo}) => {
    return (
        <div className='header-container'>
            <div className='content'>
                <Link className='title' to="/">
                    Hatch.
                </Link>
                <div className='userInfo'>
                    {`${isConnected ? `Logged as ${clientInfo?.user}` : "Not Logged"}`}
                </div>
            </div>
        </div>
    )
}

export default HeaderHatchGames;