let signUp = document.getElementById('sign_in');
signUp.addEventListener('click',(e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    console.log(email,password);
    const array = {
        "Email":email,
        "Password":password
    };
       
    const res = fetch('https://fir-ec9e6-default-rtdb.firebaseio.com/login.json',
    {
        method: 'POST',
        body : JSON.stringify(array),
        headers:{
        'Content-Type':'application/json'
        }
    }
    );
    document.getElementById("email").value = '';
    document.getElementById("pass").value ='';
})
