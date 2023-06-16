let username = "";
document.getElementById('join-btn').addEventListener('click',(event)=>{
    event.preventDefault();
    username=document.getElementById('username').value;
    if(username != ""){
        let headerName = document.querySelector('.header-name');
        headerName.innerText = username +'.';
       document.querySelector('.form').style.display = "none";
       document.querySelector('.section-2').style.display = "block";
    }
})