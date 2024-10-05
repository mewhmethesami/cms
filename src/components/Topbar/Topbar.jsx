import React from 'react'
import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className="topleft">
            <span className='logo'>Mohammadreza </span>
        </div>
        <div className="topright">
            <div className='topBarIconContainer'>
                <NotificationsNoneIcon/>
                <span className='topIconBadge'>2</span>
            </div>

            <div className='topBarIconContainer'>
                <LanguageIcon/>
                <span className='topIconBadge'>2</span>
            </div>

            <div className='topBarIconContainer'>
                <SettingsIcon/>
                
            </div>
            <img src="./pics/react.png"  className="topAvatar" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
