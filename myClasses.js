class user{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
encryptpassword(){
    return `${this.password}abc`
}
changeusername(){
    return `${this.username.toUpperCase()}`
}
}
const krutika = new user("krutika","krutika.vyas@gmail.com,","12345")
console.log(krutika.encryptpassword())
console.log(krutika.changeusername());
