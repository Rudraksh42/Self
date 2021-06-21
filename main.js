/* This is th js for login page*/ 

function agree()
{
    if (document.getElementById("Checkbox").className == "glyphicon glyphicon-check")
    {
        document.getElementById("Checkbox").className = "glyphicon glyphicon-unchecked";
   
    }
    else
    {
        document.getElementById("Checkbox").className = "glyphicon glyphicon-check";
    }

    
}


   
function Login()
{
    userName = document.getElementById("UsernameInput").value;

    if(document.getElementById("UsernameInput").value.length==+5){

       
        if (document.getElementById("Checkbox").className == "glyphicon glyphicon-check")
        {      
            localStorage.setItem("UserName", userName);
            window.location = "Tweek.html"; 
        }     
    }    
   
   
    else
    {
        document.getElementById("Error").innerHTML = "Note : Please Accept The Terms And Conditions. Please Use Username With 5 Letters.";
        
    }
  
}

 
