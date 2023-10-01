var authResponse; 
var tokenLocal = "123token";
var roles = [];

function checkAuth (){
    var data = {token:tokenLocal};
    fetch("https://650f161354d18aabfe99d26f.mockapi.io/token", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(data),
    })
    .then(res => {return res.json();})
    .then((response) => {
        //alert(JSON.stringify(response.roles[0].role))
        reactAuth(response)
    });
}

function reactAuth(checkRes){
    var status = JSON.stringify(checkRes.status);
    if(status == '"ok"'){
        signIn(checkRes);
    }
}

function signIn(checkRes){
    var fname = JSON.stringify(checkRes.firstName);
    var lname = JSON.stringify(checkRes.lastName);
    let welcome = "Welcome, "+fname+" "+lname+"!";
    document.getElementById("loginBox").innerHTML = welcome;
    
    //for
}

document.body.onload = checkAuth();
//document.getElementById("doLogin").onclick = function() {};