import Link from '../../../../components/shared/Link'
import './Header.scss'

const HeaderHatchGames = ({client, isConnected, clientInfo}) => {

    const tryDisconnect = () => {
        client.disconnect();
    }

    return (
        <div className='headerGamesContainer'>
            <div className='content'>
                <Link className='title' to="/">
                    Hatch.
                </Link>
                <div className='userInfo'>
                    {isConnected ? 
                    <button onClick={ tryDisconnect }>Disconnect</button>
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