var company = ["AAPL","AXP","BA","CAT","CSCO","CVX","DD","DIS","GS","HD","IBM","INTC","JNJ","JPM","KO","MCD","MMM","MRK","MSFT","NKE","PFE","PG","TRV","UNH","UTX","V","VZ","WBA","WMT","XOM"];
var selection;
var number;
var tmpcase = [];
var number = 0;
var y = [];
var Y = [];
var realY = [];
var day;
var yourtrend;
var yourm;
var data = [];
var date = [];
var trendary = [];
var risk = 0;

selection = JSON.parse(localStorage.getItem("selection"));
console.log(selection);
number = localStorage.getItem("number");
//console.log(number);

for(var i = 0;i < 30;i++){ 
  if(selection[i] == 1){
    var tmp = document.getElementById(i);
    tmp.style.display = "inline-block";
    }
  }

function start(){
    getdata("csv/data1.csv",0);
}

function getdata(filename, c){
    var j = 0,tmp  = 0;
    if(c<1){
        d3.csv(filename, function(d){
            day = d.length;
            for(var i = 0;i < d.length;i++){
                data[i] = [];
            }
            date.length = 0;
            trendary.length = 0;
             for(var i = 0;i < d.length;i++){
                 tmp = 0;
                 j = 0;
                for(var x in d[0]){
                    if(j <30){
                        if(tmp == 0){
                            date.push(d[i].Date);
                            tmp++;
                        }
                        else{
                            data[i][j] = parseFloat( d[i][x]);
                            //console.log(data[i][j]);
                            j++;
                        }
                    }
                }
            }
            yourtrend=parseFloat(trend(number,data,selection)); //count trend
            for(var k = 1;k < d.length+1;k++){
              trendary[k-1]=(yourm*(k) + 10000000);
              realY[k-1] = Y[k];
            }
            getdata(filename,++c);
            document.getElementById("trend").innerHTML = yourtrend;
            console.log(yourtrend);
            console.log(Y);
            console.log(realY);
            console.log(risk);
            drawchart();
        });
    }
}

function trend(n,data,tmpcase){
    for(var i = 0;i < data.length+1;i++){
        Y[i] = 0;
        y[i] = [];
    }
    var init = 10000000,monleft;  //double
    var tmp = 0,left = [],m=0; //double
    var stock,j,money = parseInt(init/n),r,c,i; //int
    risk = 0;
    monleft = parseFloat(init - money*n);
    for(c = 0;c < 30;c++){
      if(tmpcase[c] == 1){
        stock = parseInt(money/data[0][c]);
              left[c] = parseFloat( money - stock*data[0][c]);
        y[1][c] = money;
        for(i = 2;i < day+1;i++){
            y[i][c] = parseFloat(data[i-1][c]*stock + left[c]);
          }
        }
      }
    Y[1] = init;
    for(i=2;i<day+1;i++){
      for(c = 0;c < 30;c++){
        if(tmpcase[c] == 1){
          Y[i] += y[i][c];
          }
        }
      }
    for(i = 1;i < day+1;i++){
      m += i*Y[i] - i*init;
      tmp += i*i;
      }
  
    m /= tmp;
    for(i = 1;i < day+1;i++){
      tmp = m*i+init;
      risk += Math.pow(Y[i] - tmp,2);
      }
    risk /= day;
    risk = Math.sqrt(risk);
    yourm = m;
    if(m > 0)
      return m/risk;
    else
      return m*risk;
  }
function drawchart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var mixedChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'fund',
            lineTension : 0.4,
            backgroundColor : "#FFD9EC",
            borderColor : "#FF0000",
            borderWidth : 3,
            fill : "1",
            data: realY
        }, {
          label: 'trend',
          lineTension : 0,
          backgroundColor : "#000000",
          borderColor : "#000000",
          borderWidth : 1,
          fill : false,
          pointRadius : 0,
          data: trendary
        }],
        labels: date
    },
});
}
window.addEventListener("load", start, false);