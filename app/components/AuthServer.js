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


function hashChecker(){
    let randString = "mypassword"

    const hash = crypto.createHash('sha256').update(randString).digest('hex');

    console.log(hash)

}

export {Auth, setValue, hashChecker};