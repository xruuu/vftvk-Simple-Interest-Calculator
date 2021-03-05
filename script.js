function compute()
{
    var d = new Date();
    var y = d.getFullYear() + parseInt(document.getElementById("years").value);
    var i = document.getElementById("amount").value *
    document.getElementById("years").value *
    document.getElementById("rate").value / 100 ;

    if(i<0 || i==""){
        alert("Please enter a valid number (Greater than 0). Thank you :3"); 
        document.getElementById("amount").focus();
    }
    else {
        document.getElementById("res").innerHTML=
        "If you deposit <mark>" + document.getElementById("amount").value  + "</mark>,<br>" +
        "at an interest rate of <mark>" + document.getElementById("rate").value + "%</mark>.<br>" +
        "You will recieve an amount of <mark>" + Math.round(i) + "</mark>,<br>" + 
        "in the year <mark>" + y + "</mark>";
    }

        

    
}
