import React from 'react'

// import SendIcon from '../../icons/send-button.png'

import './Input.css'

const Input = ({ setMessage, sendMessage, message }) => (
  <form className='form'>
    <input
      type='text'
      className='input'
      placeholder='Lances toi et tchat ...'
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
    />
    <button className='btn-send' onClick={(e) => sendMessage(e)}>Envoyer</button>
  </form>
)

export default Input
