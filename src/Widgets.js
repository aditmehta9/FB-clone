import React from 'react'
import './Widgets.css'

function Widgets() {
  return (
    <div className="widgets">
      <iframe 
                className = "widget__scroll"
                title = "youtube"
                src="https://www.wired.com/search/?q=facebook&page=1&sort=score" 
                width="340" 
                height= "100%"
                style= {{ border: "none" , overflow: "hidden"  }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
    </div>
  )
}

export default Widgets
