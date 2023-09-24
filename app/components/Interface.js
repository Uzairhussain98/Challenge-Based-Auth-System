'use client'
 import React from 'react'
 import { useState } from 'react';
 import Challenge from './Challenge';
import { Auth, hashChecker, setValue } from './AuthServer';

 
 const Interface = () => 
{
  const [isNotAuthenticated, setIsAuthenticated] = useState(true);
  const [challengeNew, setChallenge] = useState('');
  const [message, setMessage] = useState('');
  // const [updated, setUpdated] = useState("");
  const [resHash, setResHash] = useState('');
  // const [finalRes, setfinalRes] = useState("");


 


 
   
       function handleChange(event) {
            setMessage(event.target.value);
          };

           function handleClick() {
            //  setUpdated(message);
              let res  = Auth(message);

            if(res){
              const randomChallenge = Challenge();
              setChallenge(randomChallenge)
              setValue(randomChallenge,message)
              hashChecker();

            }

          }


          function handleChangeHash(event) {
            setResHash(event.target.value);
          };

           function handleClickHash() {
            //  setfinalRes(resHash);
           // console.log(finalRes);
            hashChecker(resHash, message,challengeNew , setIsAuthenticated);
            // if(res){
            //   const randomChallenge = Challenge();
            //   setChallenge(randomChallenge)
            //   setValue(randomChallenge,updated)
            //   hashChecker();

            // }

          }

          function logout(){
            setIsAuthenticated(true)
          }
  
  
    return (

      <>
      <div className='min-h-screen flex items-center justify-center  bg-blue-100'>
{ isNotAuthenticated ?

        <div className='bg-slate-400 w-[500px] flex flex-col space-y-8 items-center justify-center rounded-md'>
      <h3>Challenge Based Auth</h3>
      
      <div className='flex'>
      <label placeholder='Username'>Username:</label>
      <input type="username"onChange={handleChange}
        value={message}/>
        </div>
      <button className='bg-slate-200 w-28' type='submit' value='submit' disabled={!message} onClick={()=> handleClick() } >Submit</button>
      
      <div className='flex space-x-2'>
        <h2>Challenge:  </h2>
      <h2>{challengeNew}</h2>
      </div>
      { challengeNew ? 
      <div className='flex flex-col space-y-8 items-center justify-center'>
        <div>
      <label placeholder='Response:'>Response:</label>
      <input type="response"onChange={handleChangeHash}/>
      </div>
      <button className='bg-slate-200 w-28' type='submit' value='Submit Res' disabled={!resHash} onClick={()=> handleClickHash() } >Submit</button>  
        </div>: <div></div>


      }



      {/* <h2>{updated}</h2> */}
      </div>: <div>
        <h2>User authenticated</h2> 
        <button onClick={logout}>Log Out</button>
        </div>}
      </div>
      </>
    )
  }
 
 export default Interface
 