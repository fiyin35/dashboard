import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import Notification from '../../assets/notification.png';
import Bell from '../../assets/bell.png';


import person from '../../assets/person.png';
const Navbar = () => {
  return (
        <div className="app__navbar-container">

          <div className="app__navbar-dashboard">
            <h2 className="app__navbar-header"> Dashboard</h2>
          </div>


          <div className="app__navbar-group">
              <div className="app__navbar-search">
                <SearchIcon fontSize="large" className="searchIcon" />
                <input className="input-field" placeholder="Enter Keywords ..." />
            </div>

            <div className="app__navbar-avatars"> 
              <div className="language-wrapper"> <p className="language"> EN </p> <ArrowDropDownIcon className="language-icon"/> </div>
              <img src={Bell} alt="bell" />
              <img src={Notification} alt="notification" />
              <Avatar className="app__navbar-notification" alt="support-manager" src={person} /> 
            </div>  
          </div>
         
        </div>
  )
}

export default Navbar
