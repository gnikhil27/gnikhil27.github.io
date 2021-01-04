var GEN=["Gen3rd","Gen9th"];
var HDD=["1TB","150GB"];
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
function getAll()
{
    var gen="";
    GEN.forEach(function(val){gen+="<option value='"+val+"'>"+val+"</option>";})
    var myBoards=document.getElementById("Gen").innerHTML=gen;
    gen="";
    HDD.forEach(function(val){gen+="<option value='"+val+"'>"+val+"</option>";})
    myBoards=document.getElementById("hdd").innerHTML=gen;
    //changeBoard(myBoards);
    add();
}
function changeBoard(selBoard){
    var mb={
            Gen3rd: "3200",
            Gen9th:"5500"
        };
    var proc={
        Gen3rd: "2500",
        Gen9th:"7200"
    }
    document.getElementById("mbPrice").innerHTML=mb[selBoard.value];
    document.getElementById("ProcPrice").innerHTML=proc[selBoard.value];
    add();
}
function changeHDD(selHDD){
    var hd={
        "1TB": "3000",
        "150GB": "800"
    };
    document.getElementById("hddPrice").innerHTML=hd[selHDD.value];
    add();
}