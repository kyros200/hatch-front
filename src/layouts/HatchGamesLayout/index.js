import {Outlet} from 'react-router-dom'
import HeaderHatchGames from '../../components/HeaderHatchGames'

const HatchGamesLayout = () => {
    return (
        <>
            <HeaderHatchGames />
            <Outlet />
        </>
    )
}

export default HatchGamesLayout;