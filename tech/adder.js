var GEN=["Gen3rd","Gen9th"];
var HDD=["1TB","150GB","320GB","500GB"];
var SSD=["None","120GB","240GB"];
var SCR=["None","15/16 inch","22 inch","32 inch"];
var RAM=["8GB","4GB"];
var KMC=["USB","WiFi"];
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
function toSelect(arr,id){
    var gen="";
    arr.forEach(function(val){gen+="<option value='"+val+"'>"+val+"</option>";})
    var myBoards=document.getElementById(id).innerHTML=gen;
}
function getAll()
{
    toSelect(GEN,"Gen");
    toSelect(HDD,"hdd");
    toSelect(SCR,"scr");
    toSelect(RAM,"ram");
    toSelect(KMC,"KMC");
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
        "150GB": "800",
        "320GB": "1000",
        "500GB": "1600"
    };
    document.getElementById("hddPrice").innerHTML=hd[selHDD.value];
    add();
}
function changeScr(selScr){
    var hd={
        "None": "0",
        "15/16 inch": "1500",
        "22 inch": "2500",
        "32 inch": "5000"
    };
    document.getElementById("scrPrice").innerHTML=hd[selScr.value];
    add();
}
function changeRam(selScr){
    var hd={
        "4GB":"1600",
        "8GB":"3500"
    };
    document.getElementById("ramPrice").innerHTML=hd[selScr.value];
    add();
}

function changeKMC(selScr){
    var hd={
        "USB":"700",
        "WiFi":"1200"
    };
    document.getElementById("kmcPrice").innerHTML=hd[selScr.value];
    add();
}
