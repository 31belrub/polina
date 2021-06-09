let inpNameF = document.getElementsByTagName("input")[0];
let inpNameL = document.getElementsByTagName("input")[1];
let inpUsername = document.getElementsByTagName("input")[2];
let inpEmail = document.getElementsByTagName("input")[3];
let inpPass = document.getElementsByTagName("input")[4];
let inpCPass = document.getElementsByTagName("input")[5];
let inpPhone = document.getElementsByTagName("input")[6];
let arr =[];
let i = 0;

//..................................
function myFunction(){
    if (inpNameF.value === null || inpNameF.value === ""||
    inpNameL.value === null || inpNameL.value === ""||
    inpUsername.value === null || inpUsername.value === ""||
    inpEmail.value === null || inpEmail.value === ""||
    inpPass.value === null || inpPass.value === ""||
    inpCPass.value === null || inpCPass.value === ""||
    inpPhone.value === null || inpPhone.value === "") {
        alert("Заполните поля полностью!");
      }else{
          if(inpPass.value!==inpCPass.value){ alert("Пароли не совпадают!")} else{
    let user = new User(inpNameF.value, inpNameL.value, inpUsername.value, inpEmail.value, inpPass.value, inpCPass.value, inpPhone.value);
    user.showusers();
    arr.push(user);
    user.render();
    }
  }
}
//............................
class User{
    constructor(inpNameF, inpNameL, inpUsername, inpEmail, inpPass, inpCPass, inpPhone) {
        this.counter = i++
        this.inpNameF = inpNameF;
        this.inpNameL = inpNameL;
        this.inpUsername = inpUsername;
        this.inpEmail = inpEmail;
        this.inpPass = inpPass;
        this.inpCPass = inpCPass;
        this.inpPhone = inpPhone;
        this.interface = `
        <br> 
        <b> User number# ${this.counter}:</b><br>
        FirstName is ${this.inpNameF}<br>
        LastName is ${this.inpUsername}<br>
        Username is ${this.inpEmail}<br>
        Email is ${this.inpPass}<br>
        Password is ${this.inpCPass}<br>
        Phone is ${this.inpPhone}<br>
        -----
        <p></p>
    `;}
    showusers(){
        console.log(this);
    }
    render() {
        let cont = document.querySelector(".showusers");
        let elem = document.createElement("div");
        elem.id = this.counter;
        elem.classList.add("User");
        elem.innerHTML = this.interface;
        cont.appendChild(elem);
    } 
}
