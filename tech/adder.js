var GEN=["Gen3rd","Gen9th"];
var HDD=["1TB","150GB","320GB","500GB"];
var SSD=["None","240GB"];
var SCR=["None","15/16 inch","22 inch","32 inch"];
var RAM=["8GB","4GB"];
var KMC=["USB","WiFi"];
var URL={
//i5 10th or ryzen lap    
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
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
    toSelect(SSD,"ssd");
    toSelect(SCR,"scr");
    toSelect(RAM,"ram");
    toSelect(KMC,"KMC");
    //changeBoard(myBoards);
    add();
    includeHTML();
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
function changeSSD(selScr){
    var hd={
        "None":"0",
        "240GB":"2400"
    };
    document.getElementById("ssdPrice").innerHTML=hd[selScr.value];
    add();
}
