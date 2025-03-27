import React from 'react'
import { useState,useEffect } from 'react'

export default function App40() {
    const [like,setLike] =  useState(0);
    const [dislike,setDislike] = useState(0);

    useEffect(()=>{
        if (like > dislike) console.log("Good post");
        else if (dislike > 5) console.log("Bad post")
            else console.log ("okay")
    },[like,dislike])
  return (
    <div>
        <button onClick={()=>setLike(like+1)}>Likes({like})</button>
        <button onClick={()=> setDislike(dislike+1)}>Dislikes({dislike})</button>
    </div>
  )
}
