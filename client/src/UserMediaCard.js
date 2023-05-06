import React from 'react'

const UserMediaCard = ({media}) => {

    const {media_1, media_2, media_3, media_4} = media
    const mediaArray = [media_1, media_2, media_3, media_4]
    const showMedia = mediaArray.map(m => <div> {m} </div> )
    
  return (
    <div class="grid">
        {showMedia}
    </div>
  )
}

export default UserMediaCard