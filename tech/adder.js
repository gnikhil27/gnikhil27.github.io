function add()
{
    var pr=document.getElementsByClassName("price");
    var tot=0;
    for(var i=0;i<pr.length;i++)
    {
        tot+=parseInt(pr[i].innerHTML);
    }
    document.getElementById("txtTotal").innerHTML=tot;
    return tot;
}
function getBoard()
{
    var gen={
            Gen3rd: "",
            Gen5th: "",
            Gen7th: ""
        }
}