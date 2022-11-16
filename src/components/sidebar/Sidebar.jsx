import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom'
import { DarkModeContext } from "../../context/darkModeContext";
import {useContext} from 'react'

const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext)

    return (
            <div className="sidebar">
                <div className="top">
                    <Link to="/" className="link">
                        <span className="logo">Admin Sys</span>
                    </Link>
                    
                </div>
                <hr />
                <div className="center">
                    <ul>
                        <p className="title">MAIN</p>
                        
                        <Link to="/" className="link">
                            <li>
                                <DashboardIcon  className="icon" />
                                <span>Dashboard</span>
                            </li>
                        </Link>
                        <p className="title">LIST</p>
                        <Link to="/clients" className="link">
                            <li>
                                <PeopleIcon  className="icon" />
                                <span>Clientes</span>
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li>
                                <StoreIcon  className="icon" />
                                <span>Productos</span>
                            </li>
                        </Link>
                        <Link to="/quotations" className="link">
                            <li>
                                <CreditCardIcon  className="icon" />
                                <span>Cotizaciones</span>
                            </li>
                        </Link>
                        <Link to="/projects" className="link">
                            <li>
                                <LocalShippingIcon  className="icon" />
                                <span>Proyectos</span>
                            </li>
                        </Link>
                        <p className="title">USEFULL LINKS</p>
                        <li>
                            <InsertChartIcon  className="icon" />
                            <span>Estadisticas</span>
                        </li>
                        <li>
                            <NotificationsActiveIcon className="icon" />
                            <span>Notificaciones</span>
                        </li>
                        <p className="title">SERVICE</p>
                        <li>
                            < HealthAndSafetyIcon  className="icon" />
                            <span>Sistema</span>
                        </li>
                        <p className="title">USER</p>
                        <li>
                            <SettingsIcon  className="icon" />
                            <span>Configuraciones</span>
                        </li>
                        <li>
                            <AccountCircleIcon  className="icon" />
                            <span>Perfil</span>
                        </li>
                        <li>
                            <LogoutIcon  className="icon" />
                            <span>Cerrar sesion</span>
                        </li>
                        
                    </ul>
                </div>
                <div className="bottom">
                    <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
                    <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
                </div>
                
            </div>
    );
}

export default Sidebar;
