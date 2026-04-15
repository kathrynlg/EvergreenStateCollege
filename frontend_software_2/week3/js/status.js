
function checkStatus (){
    let score = document.getElementById("scoreInput").value;
    let message = document.getElementById("message"); 

    if(score >= 80){
        message.textContent ="Great Job";
        message.style.color = "green";
    }   
    else if (score >= 50) {
        message.textContent ="you passed";
        message.style.color = "orange";
    }
    else
    {
        message.textContent ="sad face!";
        message.style.color = "red";

    }
}