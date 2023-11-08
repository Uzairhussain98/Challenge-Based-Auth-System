import crypto from 'crypto';


const users = [
    {
      Username:"Uzair",
      password:"secretpass",
      salt: "",
    },
    {
      Username:'Sam',
      password:"secretpass",
      salt: "111",
    },
    {
      Username:"Martin",
      password:"secretpass",
      salt: "",
    },
    {
      Username:"ezra",
      password:"helloworld",
      salt: "",
    }
    
    ]


function Auth(input){
    if(users.find(item => item.Username === input)){
        return  true
    }
    else false

}


function setValue(randomChallenge,input){
    let user =  users.findIndex(item => item.Username === input)
    users[user].salt = randomChallenge;
    console.log(users[user].salt)

}


function hashChecker(hashInput,input, challenge, setIsAuthenticated){
  let user =  users.findIndex(item => item.Username === input)
  let userpass = users[user]?.password

  if(challenge){
  let concatpass = challenge+userpass;
  console.log(concatpass)


// console.log(userpass)
    // let randString = "mypassword"
    // let result = text1.concat(" ", text2);
    const hash = crypto.createHash('sha256').update(concatpass).digest('hex');

    if(hash == hashInput){
      console.log("authenticated")
      setIsAuthenticated(false)
    }
    else{
      alert("Wrong")
    }

    console.log("input hash ",hashInput)
    console.log("calculated hash,",hash)
   
  }
 


    // console.log(hash)

}

export {Auth, setValue, hashChecker};