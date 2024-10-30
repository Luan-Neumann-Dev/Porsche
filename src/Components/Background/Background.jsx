import React from 'react'

import './Background.css'

import video1 from '../../Assets/video1.mp4'

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className='background fade-in' autoPlay loop>
        <source src={video1} type='video/mp4' />
      </video>
    )
  }
  else if(heroCount === 0) {
    return <img src="https://wallpapers.com/images/hd/4k-ultra-hd-porsche-mtx1l3n2pp5ckdmb.jpg" alt="Imagem 1" className='background fade-in' />
  }
  else if(heroCount === 1) {
    return <img src="https://images5.alphacoders.com/115/thumb-1920-1155095.jpg" alt="Imagem 2" className='background fade-in' />
  }
  else if(heroCount === 2) {
    return <img src='https://4kwallpapers.com/images/wallpapers/porsche-911-carrera-3440x1440-9258.jpg' alt="Imagem 3" className='background fade-in' />
  }
}

export default Background