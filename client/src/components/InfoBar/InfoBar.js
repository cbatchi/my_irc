import React from 'react'

import onlineIcon from '../../icons/onlineIcon.png'

import './InfoBar.css'

const InfoBar = ({ room }) => {
  return (
    <div className='infobar'>
      <div className='leftInnerWrap'>
        <img src={onlineIcon} className='online' alt='online icon' />
        <h3>{room}</h3>
      </div>
      <div className='rightInnerWrap'>
        <a href='/'><button className='btn-close'>Quitter le tchat</button></a>
      </div>
    </div>
  )
}

export default InfoBar
