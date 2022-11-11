import  "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search'; 
import LanguageIcon from '@mui/icons-material/Language';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'; 
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ViewListIcon from '@mui/icons-material/ViewList';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from 'react'




const Navbar = () => {
    const {dispatch} = useContext(DarkModeContext)
    return (
            <div className="navbar">
                <div className="wrapper">
                    <div className="search">
                        <input type="text" placeholder="Search..." />
                        <SearchIcon />
                    </div>
                    <div className="items">
                        <div className="item">
                            <LanguageIcon className="icon"/> 
                            Spanish
                        </div>
                        <div className="item">
                            <ModeNightIcon className="icon" onClick={()=> dispatch({type:"TOGGLE"})}/> 
                        </div>
                        <div className="item">
                            <FullscreenExitIcon className="icon"/> 
                        </div>
                        <div className="item">
                            <NotificationsNoneIcon className="icon"/> 
                            <div className="counter">1</div>
                        </div>
                        <div className="item">
                            <ChatBubbleOutlineIcon className="icon"/> 
                            <div className="counter">2</div>
                        </div>
                        <div className="item">
                            <ViewListIcon className="icon"/> 
                        </div>
                        <div className="item">
                           <img src="https://pyxis.nymag.com/v1/imgs/1f8/919/67900d8315e6e59beca19eea0e2804f0f1-12-henry-cavill.rsquare.w700.jpg" 
                           alt="" 
                           className="avatar" />
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Navbar;
