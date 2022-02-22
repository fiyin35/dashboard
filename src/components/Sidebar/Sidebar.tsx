import React from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import TextsmsIcon from '@mui/icons-material/Textsms';
import GroupsIcon from '@mui/icons-material/Groups';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



import logo from '../../assets/logo.png';
import person from '../../assets/person.png';


const Sidebar = () => {
  return (
    <div className="app__sidebar-container">
        <div className="app__sidebar-logo">
            <img src={logo} alt="logo"/>
        </div>

        <div className="app__sidebar-content">
            <div className="app__sidebar-menu"> <HomeIcon className="app__sidebar-icon"/>  <p className="app__sidebar-menu-item">Dashboard</p> </div>
            <div className="app__sidebar-menu"> <TextsmsIcon className="app__sidebar-icon"/>  <p className="app__sidebar-menu-item">Requests</p></div>
            <div className="app__sidebar-menu"> <FileOpenIcon className="app__sidebar-icon"/>  <p className="app__sidebar-menu-item">KYCs</p></div>
            <div className="app__sidebar-menu"> <TextSnippetIcon className="app__sidebar-icon"/>  <p className="app__sidebar-menu-item">Reports</p></div>
            <div className="app__sidebar-menu"> <StickyNote2Icon className="app__sidebar-icon"/>  <p className="app__sidebar-menu-item">Audit Trail</p> <ArrowDropDownIcon className="sidebar-arrowdown"/></div>
            <div className="app__sidebar-menu"> <GroupsIcon className="app__sidebar-icon"/>  <p className="app__sidebar-menu-item">Users</p></div>
            <div className="app__sidebar-menu"> <SettingsIcon className="app__sidebar-icon"/>  <p className="app__sidebar-menu-item">Settings</p></div>
        </div>

        <div className="app__sidebar-support-manager">
            <div className="app__sidebar-support-manager-avatar"> 
                <Avatar alt="support-manager" src={person} />
            </div>
            
            <div className="app__sidebar-support-manager-name-group">
                <p className="app__sidebar-support-manager-name"> Nafisa Sh.</p>
                <p className="app__side-support-manager-paragraph">Support Manager</p>
            </div> 
        </div>
    </div>
  )
}

export default Sidebar
