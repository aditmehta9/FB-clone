import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import { useStateValue } from './StateProvider'


function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      {
        /*
        <Sidebar src="https://qph.fs.quoracdn.net/main-thumb-161672902-200-sepgausieblcihtvbclwckrtpsmpvykp.jpeg" title='Adit Mehta'/>
              <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <Sidebar Icon={LocalHospitalIcon} title="Covid-19 Information"/>
        */

      }
      
                <SidebarRow 
                    src = {user.photoURL}
                    title = {user.displayName}
                />
       <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png"
                    title = "COVID-19 information Centre"
      />
       <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
                    title = "Friends"
      />
      <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
                    title = "Groups"
      />
      <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
                    title = "Vidoes"
      />
      <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png"
                    title = "Memories"
      />
      <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png"
                    title = "Messenger"
      />
      <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"
                    title = "Pages"
      />
      

    </div>
  )
}

export default Sidebar
