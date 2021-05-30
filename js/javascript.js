// emergency part
let phoneCall=document.querySelector("#phonecall");

phoneCall.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href='tel: 256';
})

let chat=document.querySelector("#chat");
chat.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href='https://www.web.whatsapp.com?phone="256"';
})