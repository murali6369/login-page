function myfun(){
    let username=document.getElementById('username').value
    let password=document.getElementById('password').value
}
function check(){
    username=document.getElementById('username').value
    password=document.getElementById('password').value
    para=document.getElementById('para')
    if(username=='admin'&& password=='admin'){
        // para.innerHTML='login succesfully
        alert('login successfully')
    }
    else{
        //pass.innerHTML='wrong user or password'
        alert('wrong user or password getout'
        )
    }
}