import Link from '../../../../components/shared/Link'
import Button from '../../../../components/shared/Button'
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
                    <Button onClick={ callback }>Disconnect</Button>
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