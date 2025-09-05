function sendMail(){
    var params = {
        name : document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        message:document.getElementsByClassName("message").value , 
    };
const serviceID = "service_c82q5vl";
const templateID = "template_18v2v6g";

emailjs.send(serviceID,templateID,params)
 .then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message send successfully");
    }
 )
 .catch((err) => console.log(err));
}