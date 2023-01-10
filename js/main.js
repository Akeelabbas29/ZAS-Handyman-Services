// const overlay =document.querySelector(".overlay");
const form =document.querySelector("form");
Name =form.querySelector("#name");
Email =form.querySelector("#email");
Msg =form.querySelector("#msg");
Phone =form.querySelector("#phone");

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    submitForm(Name.value,Email.value,Msg.value,Phone.value)
})
function submitForm(Name, Email, Msg, Phone){
    
// https://github.com/github/fetch
fetch("https://formsubmit.co/ajax/akeelabbas29@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        Name: Name,
        Email: Email,
        Phone: Phone,
        Message: Msg

    })
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        location.reload(true);
        alert(data.message);
        

    })
    .catch(error => console.log(error));
}