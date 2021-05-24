function output()
        {
        var principal=parseFloat(document.getElementById("Pr").value);
        var rate=parseFloat(document.getElementById("Rt").value);
        var time=parseFloat(document.getElementById("T").value);
        interest=((principal*rate*time)/100)+interest;
        result=document.getElementById("amt");
        result.innerHTML="Interest: "+amount;
        }
function refresh()
{
    result=document.getElementById("amt");
        result.innerHTML="Amount: ";
}
