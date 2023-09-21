'use client'
 import React from 'react'
 import { useState } from 'react';
 import crypto from 'crypto';
 import Challenge from './Challenge';
import Server from './Server';
import { Auth, hashChecker, setValue } from './AuthServer';

 
 const Interface = () => 
{


  
  const [challengeNew, setChallenge] = useState('');
  const [message, setMessage] = useState('');

     const [updated, setUpdated] = useState("");


 


  //   function checkUser(){
  //     return users.find(item => item.Username == updated);
  //   }

   
       function handleChange(event) {
            setMessage(event.target.value);
          };

           function handleClick() {
            // 👇 "message" stores input field value
            // var result = users.find(item => item.Username === "Sam")
            // console.log(result)
            
             setUpdated(message);
          //  console.log(checkUser())
              let res  = Auth(updated);
            if(res){

              const randomChallenge = Challenge();
              setChallenge(randomChallenge)
              setValue(randomChallenge,updated)
              hashChecker();

            }

          }
  
  
    return (
      <>
      <div className='flex flex-col min-h-screen space-y-8 items-center justify-center bg-blue-100'>
      <h3>Hello AUTH</h3>
      
      <div className='flex'>
      <label placeholder='Email'>Email:</label>
      <input type="email"onChange={handleChange}
        value={message}/>
        </div>
      <button type='submit' value='submit' disabled={!message} onClick={()=> handleClick() } >Submit</button>
      
      <div className='flex space-x-2'>
        <h2>Challenge:  </h2>
      <h2>{challengeNew}</h2>
      </div>
      <h2>{updated}</h2>
      </div>
      </>
    )
  }
 
 export default Interface
 