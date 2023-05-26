import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react'
import './Post.css';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InputOption from './InputOption';

const  Post =  forwardRef(({name,description,message, photoUrl},ref) => {
  return (
    <div ref={ref} className="post">
        <div className="post_header">
            <Avatar/>
        
      <div className="post_info">
          <h2>{name}</h2>
          <p className="desc">{description}</p>
      </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
    </div>

    <div className="post_buttons">
      <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
      <InputOption Icon={ChatOutlinedIcon} title="Like" color="gray"/>
      <InputOption Icon={ShareOutlinedIcon} title="Like" color="gray"/>
      <InputOption Icon={SendOutlinedIcon} title="Like" color="gray"/>

    </div>
    </div>
    
  )
})

export default Post
