var company = ["AAPL","AXP","BA","CAT","CSCO","CVX","DD","DIS","GS","HD","IBM","INTC","JNJ","JPM","KO","MCD","MMM","MRK","MSFT","NKE","PFE","PG","TRV","UNH","UTX","V","VZ","WBA","WMT","XOM"];
var selection = [];
var number = 0;

selection = JSON.parse(localStorage.getItem("selection"));

var tmp = document.getElementById('div1');
for(var i = 0;i < 30;i++){
    if(selection[i] == 1){
      tmp.appendChild(document.getElementById(i));
      number++;
    }
}

function allowDrop(ev) {
  ev.preventDefault();
  }
  
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  }
  
function droponD(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  selection[data] = 1;
  number++;
  ev.target.appendChild(document.getElementById(data));
  /*var source = document.getElementById(data);
  source.style.display = "none";*/
  //var drain = document.getElementById(parseInt(data)+30);
  //drain.style.display = "inline-block";
  }

  function droponS(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    selection[data] = 0;
    number--;
    ev.target.appendChild(document.getElementById(data));
    }
/*function cancel(obj){
  selection[obj.id-30] = 0;
  var drain = document.getElementById(obj.id);
  drain.style.display = "none";
  //console.log(selection);
  //var source = document.getElementById(obj.id-30);
  //source.innerHTML = <img src="img/AAPL.png" width="75px" height="75px" draggable="true" ondragstart="drag(event)" id=0>;
  //source.style.display = "inline-block";
}*/

function dochart(){
  localStorage.setItem('number',number);
  localStorage.setItem('selection',JSON.stringify(selection));
  window.location.href='favorite_chart.html' ;
  }

  