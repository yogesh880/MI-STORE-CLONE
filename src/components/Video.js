import React from 'react'
import VideoCard from "./VideoCard.js"
import "../styles/Videos.css"
function Video({ videos }) {
    return (
        <div className='video'>
            {
                videos.map((item, index) => (

                    <VideoCard key={item.image} image={item.image} index={index} name={item.name} />
                ))
            }
        </div>
    )
}

export default Video
