import { useEffect, useState } from 'react'
import islandnight from '../wallpaper/island-night.png'
import minecraft from '../wallpaper/minecraft-cathedral.png'
import macross from '../wallpaper/macross-sdf-full.png'
import cyberCity from '../wallpaper/cyber-city.png'
import Clock from './assets/Clock'
import animecloudy from '../wallpaper/anime-cloudy.png'
import Searchbar from './assets/Searchbar'
import Shortcut from './assets/Shortcut'
import './index.css'

function App() {
 
  const wallpapers=[
    animecloudy,
    minecraft,
    cyberCity,
    islandnight,
    macross
  ] 
  const [currentWallpaper, setCurrentWallpaper] = useState(wallpapers[0])

useEffect(()=>{

  const interval =setInterval(()=>{
    setCurrentWallpaper((prev)=>{
      const currentIndex= wallpapers.indexOf(prev)
      const nextIndex=(currentIndex+1)%wallpapers.length
     return wallpapers[nextIndex]
    })
  },20000)

return()=>clearInterval(interval)

},[wallpapers])

  return (
    <div style={{
      backgroundImage: `url(${currentWallpaper})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Clock/>
      <Searchbar/>
      <Shortcut/>

    </div>
  )
}

export default App
