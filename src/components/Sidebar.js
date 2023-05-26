import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import './Sidebar.css';
import { selectUser } from '../features/counter/userSlice';

function Sidebar() {

  const user = useSelector(selectUser);
  
  console.log(user);
  const recentItem = (topic) =>{
    return <div className="sidebar_recentItem">
        <span className="recentItem_hash">
            #
        </span>
        <p className="recentItem_text">{topic}</p>

    </div>
  }
  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://images.unsplash.com/photo-1684151941972-2d456c0e2b3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt=""/>
            <Avatar className='sidebar_avatar'/>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who Viewed you</p>
                <p className='sidebar_statNumber'>2312</p>
            </div>
            <div className="sidebar_stat">
            <p>Views on post</p>
            <p className='sidebar_statNumber'>2312</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            <p>{recentItem('react')}</p>
            <p>{recentItem('angular')}</p>
            <p>{recentItem('front-end')}</p>
        </div>
    </div>
  )
}

export default Sidebar