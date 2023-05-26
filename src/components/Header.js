import SearchIcon from '@mui/icons-material/Search';
import '../components/Header.css';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logOut } from '../features/counter/userSlice';
import { signOut } from 'firebase/auth';
const Header = () =>{

    const dispatch = useDispatch();
    const logoutHandler = () =>{
        console.log("17");
        dispatch(logOut());
        signOut(auth).then((res)=>{
            console.log(res);
        }).catch(error=>{
            console.log(error);
        })
    }
    return <>
        <div className="header">
            <div className="header_left">
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                alt="LinkedIn"/>

                <div className="image_search">
                {/* Search Icon */}
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption onClick={logoutHandler} avatar="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg" title="me"/>
            </div>
        </div>
    </>
}

export default Header;