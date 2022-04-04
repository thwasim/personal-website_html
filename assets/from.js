function sendMail(params){
    let msg={
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    }
    console.log(message)
    emailjs.send("service_o9pr48i", "template_s18juk6", msg).then((res)=>{
        alert("message send ")
        document.getElementById('name')='',
        document.getElementById('email')='',
        document.getElementById('subject')='',
        document.getElementById('message')=''

    })
}