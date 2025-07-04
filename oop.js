const user={
    username:"krutika",
    signedIn:true,
    logincount:5,
    function(){
        console.log("got user details from databases");
        console.log(`username: ${this.username}`)
    }
}
function User(username, logincount, isLoggedIn){ 
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn
    return this
}
const userOne = new User("krutika",12,true)
const userTwo = new User("vyas",10,false)
console.log(userOne);
console.log(userTwo);
// console.log(user.username)
// console.log(user.getUserDetails());