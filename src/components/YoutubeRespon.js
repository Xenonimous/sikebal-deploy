import React from 'react'
import ReactPlayer from 'react-player'
import "../css/youtubeplayer.css"

const YoutubeRespon = () => {

      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=SSKeCJDwXhs&ab_channel=KatadataIndonesia'
            width='100%'
            height='100%'
          />
        </div>
      )
    
  }

  export default YoutubeRespon