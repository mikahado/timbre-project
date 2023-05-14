import React from 'react'

const UserMediaCard = ({media}) => {

    const {media_1, media_2, media_3, media_4} = media



    
  return (
    <div class="grid">
      <article>
      <section className="card-list">
        
        <article className="card-article">
         
          <img src={media_1} alt="media"></img>
          
        
        </article>

        <article className="card-article">
        
            <img src={media_2} alt="media"></img>
       
          
        </article>

        <article className="card-article">
        
            <img src={media_3} alt="media"></img>

          
        </article>

        <article className="card-article">
          {/* <header class="card-header"> */}
            <img src={media_4} alt="media"></img>
            
          {/* </header> */}
          
        </article>

        </section>
      </article>
    </div>
  )
}

export default UserMediaCard