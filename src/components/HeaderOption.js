import React from 'react'
import './HeaderOption.css';
import { Avatar } from '@mui/material';

function HeaderOption({avatar ,Icon,title,onClick}) {
  return (
    <div className='headerOption' onClick={onClick}>
        {Icon && <Icon className="headerOption_Icon"/>}
        {avatar && <Avatar src={avatar} className="headerOption_Avatar"/>}
        <h3 className='headerOption_title'>{title}</h3>
        
    </div>
  )
}

export default HeaderOption