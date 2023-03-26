import Link from '../../../../components/shared/Link'
import './Header.scss'

const HeaderHatchGames = ({isConnected, callback}) => {
    return (
        <div className='headerGamesContainer'>
            <div className='content'>
                <Link className='title' to="/games">
                    HatchGames.
                </Link>
                <div className='userInfo'>
                    {isConnected ? 
                    <button onClick={ callback }>Disconnect</button>
                    : 
                    <>
                        Not Logged
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default HeaderHatchGames;