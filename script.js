function output()
        {
        var principal=parseFloat(document.getElementById("Pr").value);
        var rate=parseFloat(document.getElementById("Rt").value);
        var time=parseFloat(document.getElementById("T").value);
        amount=((principal*rate*time)/100)+principal;
        result=document.getElementById("amt");
        result.innerHTML="Amount: "+amount;
        }
function refresh()
{
    result=document.getElementById("amt");
        result.innerHTML="Amount: ";
}