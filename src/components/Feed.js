import React, { useEffect, useState } from 'react'
import './Feed.css';

import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import Post from './Post';
import  {db}  from './firebase'; 
import FlipMove from 'react-flip-move';

import {  addDoc,collection,serverTimestamp ,query,getDocs}
  from "firebase/firestore"; 


function Feed() {

    const [posts,setPosts] = useState([]);
    const [input,setInput] = useState('');

    const fetchData = async () => {
        const q = await query(collection(db, "posts"))
        const querySnapshot = await getDocs(q);
        setTimeout(() => {
            setPosts(querySnapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data()
            })))
             
            console.log(posts);

        }, 500);
    }
    useEffect(() => {
        (async () => {
            const q = await query(collection(db, "posts"))
            const querySnapshot = await getDocs(q);
            setTimeout(() => {
                setPosts(querySnapshot.docs.map((doc)=>({
                    id:doc.id,
                    data:doc.data()
                })))
                 
                console.log(posts);
    
            }, 500);
        })()
        // console.log(posts.length);
    }, [fetchData])
    



    const sendHandler = async(e) =>{
        e.preventDefault();
        try {
             await addDoc(collection(db, "posts"), {
                name:"MAhen ",
                description:'Hello first',
                message:input,
                timestamp:serverTimestamp()
            });

            
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    
}
    return (
        <div className="feed">
            {/* <div className="feed_post"> */}
                <div className="feed_inputContainer">
                    <div className="feed_input">
                        <CreateIcon />
                        <form action="">
                            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text"  placeholder="Start a post" />
                            <button onClick={sendHandler} type="submit">Send</button>
                        </form>
                    </div>


                <div className="feed_inputoptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={YouTubeIcon} title="Video" color="rgb(52, 143, 52)"/>
                    <InputOption Icon={EventIcon} title="Event" color="rgb(155, 123, 65)"/>
                    <InputOption Icon={ArticleIcon} title="Articles" color="rgb(201, 103, 86)"/>
                    
                </div>
                </div>
                <FlipMove>

                {posts.map((post) =>(
                    <Post key={post.id} 
                    name={post.data.name} 
                    description={post.data.description}
                    message={post.data.message}/>
                    
                ))}
                </FlipMove>
                
            {/* </div> */}
        </div>
    )
}

export default Feed
