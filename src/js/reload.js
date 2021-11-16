window.addEventListener('beforeunload', (event) => 
{  
    window.location.href="";
    console.log("work");
    event.preventDefault();
});