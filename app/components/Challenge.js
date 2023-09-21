import React from 'react'
import crypto from 'crypto';


const Challenge = () => {
    const challenge = crypto.randomBytes(4).toString('hex');

  return (
    challenge
  )
}

export default Challenge
