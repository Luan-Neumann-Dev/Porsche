import { useEffect, useState } from 'react'
import './App.css'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

function App() {
  let heroData = [
    {text1: 'Explore o limite', text2: 'da velocidade'},
    {text1: 'Desperte a potência', text2: 'que existe em você'},
    {text1: 'Vença o impossível', text2: 'na estrada'},
  ]

  const [heroCount, setHeroCount] = useState(0)
  const [playStatus, setPlayStatus] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) =>{return count === 2 ? 0 : count + 1})
    }, 3000)
  }, [])

  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount}/> 
      <Navbar />
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </>
  )
}

export default App
