import React from 'react'
import crypto from 'crypto';


const Server = (input) => {

    // const challenge = crypto.randomBytes(4).toString('hex');

const users = [
{
  Username:"Uzair",
  password:"secretpass",
  salt: undefined,
},
{
  Username:'Sam',
  password:"secretpass",
  salt: undefined,
},
{
  Username:"Martin",
  password:"secretpass",
  salt: undefined,
}

]

// let printing = users.map(User =>  { return User.Username})

// console.log(printing)

var result = users.find(item =>item.Username == 'Sam')
console.log(input);
console.log(result)


  return (
    <div>
      
    </div>
  )
}

export default Server;
