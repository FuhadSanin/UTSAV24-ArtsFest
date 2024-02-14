import './Footer.css';
import Logo from '../../images/Logo.png'
import CECLogo from '../../images/CEC White.png'

export default function Footer(){
    return(<>
    <footer id='Footer'>
        <img src={Logo} alt="" className='Footer-Logo'/>
        <div className='Footer-center'>
            <p className='Footer-name-heading'>Utsav'24</p>
            <p className='Footer-copyright'>Copyright © 2024 - All right reserved</p>
        </div>
        <img src={CECLogo} alt="" className='Footer-CECLogo'/>
    </footer>
    </>)
}

