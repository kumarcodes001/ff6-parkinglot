class User {
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
}


var objPeople = [

    {
        username:"Gate1",
        password:"pass1"
    },
    {
        username:"Gate3",
        password:"pass3"
    },

    {
        username:"arun",
        password:"pass2"
    }

]


function getInfo(){
    var username = document.getElementById("loginuser").value
    var password = document.getElementById("loginPassword").value
    console.log("you're username is "+username+ " and password is "+password)
    for(i=0; i< objPeople.length;i++){
        if (username == objPeople[i].username && password == objPeople[i].password){
            document.querySelector('#loginArea').style.display = 'none';
            window.location.href="index.html"
            return
        }
    }
    let alertMsg = document.querySelector('#alertMsg')
    alertMsg.style.display = 'block';
    alertMsg.innerHTML = 'Incorrect username or password'
    console.log("incorrect username or password")
}
