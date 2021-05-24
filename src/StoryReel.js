import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
  return (
    <div className="storyReel">
      <Story 
                image = "https://qph.fs.quoracdn.net/main-thumb-161672902-200-sepgausieblcihtvbclwckrtpsmpvykp.jpeg"
                profileSrc = "https://qph.fs.quoracdn.net/main-thumb-161672902-200-sepgausieblcihtvbclwckrtpsmpvykp.jpeg"
                title = "Adit Mehta"
            />
            <Story 
                image = "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"
                profileSrc = "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"
                title = "Code With Cat"
            />
            <Story 
                image = "https://variety.com/wp-content/uploads/2020/04/Invincible.jpg?w=1000"
                profileSrc = "https://variety.com/wp-content/uploads/2020/04/Invincible.jpg?w=1000"
                title = "Invincible"
            />
            <Story 
                image = "https://tfipost.com/wp-content/uploads/2020/07/picturemessage_1dkobggl.xyh_-750x375.jpg"
                profileSrc = "https://tfipost.com/wp-content/uploads/2020/07/picturemessage_1dkobggl.xyh_-750x375.jpg"
                title = "Dark"
            />
            <Story 
                image = "https://cdn1.vox-cdn.com/assets/4229567/game-of-thrones-poster_85627-1920x1200.jpg"
                profileSrc = "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/19/1494250862-508-promo-stills-900161456.jpg?crop=0.566xw:1.00xh;0.156xw,0&resize=480:*"
                title = "GOT"
            />
    </div>
  )
}

export default StoryReel
