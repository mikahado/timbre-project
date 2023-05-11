import React from 'react'

const UserMediaCard = ({media}) => {

    const {media_1, media_2, media_3, media_4} = media

    const mediaArray = [media_1, media_2, media_3, media_4]
    const showMedia = mediaArray.map(m => <img src={m} /> )
    
  return (
    <div class="grid">
      <article>
        {showMedia}
      </article>
    </div>
  )
}

export default UserMediaCard