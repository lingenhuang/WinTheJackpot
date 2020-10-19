var select_bubble = [];
var select_bubble_add = [];
var bubble_list = [];
var bubble_list_add = [];
var circles;
var names;
var images;
var color2 = d3.scale.category20();
var nodes = [];
var force;
var all_company_name = ["AAPL","AXP","BA","CAT","CSCO","CVX","DIS","DD","GS","HD","IBM","INTC","JNJ","JPM","KO","MCD","MMM","MRK","MSFT","NKE","PFE","PG","TRV","UNH","UTX","V","VZ","WBA","WMT","XOM"];
var ticktimes = 0;
var data = [];
//var company = [AAPL,AXP,BA,CAT,CSCO,CVX,DIS,DD,GS,HD,IBM,INTC,JNJ,JPM,KO,MCD,MMM,MRK,MSFT,NKE,PFE,PG,TRV,UNH,UTX,V,VZ,WBA,WMT,XOM]; //股價
var date = [];
//if(localStorage.getItem( select_bubble))
    //select_bubble = JSON.parse(localStorage.getItem( select_bubble));
function dragstart(d, i) {
            
}

function dragmove(d, i) {
    force.stop(); 
    d.px += d3.event.dx;
    d.py += d3.event.dy;
    d.x += d3.event.dx;
    d.y += d3.event.dy; 
    d.fixed = true; 
    tick(); 
    force.resume();
}

function dragend(d, i) {
    d.fixed = false;
    tick();  // bubble jumping
    force.resume();
    
}

function clicked(d, i){
    if (d3.event.defaultPrevented) return; // dragged
    if(!(d.selected)){ //select bubble
        d3.select(this).transition()
        .duration(700)    
        .ease("bounce")
        .attr("x", d.x - d.r * 1.5)
        .attr("y", d.y - d.r * 1.5)
        .attr("width", d.r * 1.5 * 2)
        .attr("height", d.r * 1.5 * 2)
        .each("start",function(){
            d.selected = true; 
            d.fixed = true;
            d.r *= 1.5;
        })
        .each("end",function(){

            d.fixed = false;
        });
        

        for(var j = 0; j < nodes.length; j++){
            if(nodes[j].idx == d.idx){
                select_bubble.push(nodes[j]);
            }
        }
        select_bubble_add.push(this);
        console.log(select_bubble);
    }else{ // unselect bubble
        d3.select(this).transition()
        .duration(700)    
        .ease("bounce")
        .attr("x", d.x - d.r / 1.5)
        .attr("y", d.y - d.r / 1.5)
        .attr("width", d.r / 1.5 * 2)
        .attr("height", d.r / 1.5 * 2)
        .each("start",function(){
            d.selected = false;
            d.fixed = true;
            d.r /= 1.5;
        })
        .each("end",function(){
            d.fixed = false;
        });
        
        for(var j = 0; j < select_bubble.length; j++){
            if(d.idx == select_bubble[j].idx){
                select_bubble.splice(j,1);
                select_bubble_add.splice(j,1);
            }
        }
        console.log(select_bubble);
    }
}

function mouseEnter(d, i){
    d.name = d.company;
}

function mouseLeave(d, i){
    d.name = "";
}

function collide(node) {
    
    var r = node.radius + 20,
        nx1 = node.x - r,
        nx2 = node.x + r,
        ny1 = node.y - r,
        ny2 = node.y + r;
    return function(quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== node)) {
        var x = node.x - quad.point.x,
            y = node.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r = node.r + quad.point.r;

        if (l < r) {
          l = (l - r) / l * .5;
          node.x -= x *= l;
          node.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    };
  }

function tick() { // tick 會不斷的被呼叫
    var q = d3.geom.quadtree(nodes);
    var i = 0;
    var n = nodes.length;

    while (++i < n) q.visit(collide(nodes[i]));
    ticktimes++;

    images.attr({
        x: function(it){ return it.x - it.r;},
        y: function(it){ return it.y - it.r;},
        width: function(it) {return it.r*2;},
        height: function(it) {return it.r*2;},
    });

    names.attr({
        x: function(it){ return it.x - it.r*1.5;},
        y: function(it){ return it.y - it.r;}
    }).text(function(it){return it.name});

    if(ticktimes == 298){
        ticktimes = 0;
        force.alpha(0.1);
    }

}
function showBubble(){


             
    d3.csv("csv/data4.csv", function(d) {
        
        
        var c = 0;
        for(var i in d[0]){
            nodes[c] = {};
            nodes[c].r = 30;
            nodes[c].idx = c;
            nodes[c].company = i;
            nodes[c].selected = false;
            nodes[c].img = "img/" + i + ".png";
            nodes[c].name = "";
            all_company_name[c] = i;
            c++;

        }
        
        var node_drag = d3.behavior.drag()
            .on("dragstart", dragstart)
            .on("drag", dragmove)
            .on("dragend", dragend);

        // circles = d3.select("svg").selectAll("circle")
        //                         .data(nodes)
        //                         .enter()
        //                         .append("circle")
        //                         .attr("stroke", "black");
                                

        
        images = d3.select("svg").selectAll("image")
                                .data(nodes)
                                .enter()
                                .append("image")
                                .attr("xlink:href",  function(it) { return it.img;})
                                .attr("image-anchor", "middle")
                                .call(node_drag)
                                .on("click",clicked)
                                .on("mouseenter", mouseEnter)
                                .on("mouseleave", mouseLeave);
        
        names = d3.select("svg").selectAll("text")
                                .data(nodes)
                                .enter()
                                .append("text")
                                .attr("text-anchor", "middle")
                                .attr("x", function(it){return it.x;})
                                .attr("y", function(it){return it.y;})
                                .attr("fill", "red")
                                .text(function(it){return it.name;});

                                
        force = d3.layout.force() // 建立 Layout
            .nodes(nodes)               // 綁定資料
            .size([800,600])            // 設定範圍
            .gravity(0.1)               //重力
            .charge(-300)               //磁力
            .on("tick", tick)           // 設定 tick 函式
            .start()                   // 啟動！
            .alpha(0.1);
    });
     
}
function start(){
    showBubble();
}
console.log(select_bubble);
window.addEventListener("load", start, false);

var tmpcase = [],number = 0,y = [],Y = [],day,yourtrend,yourm;

function calculate(){
    number = 0;
    for(var i = 0;i < 30;i++){
        tmpcase[i] = 0;
    }
    for(var i = 0;i < select_bubble.length;i++){
        tmpcase[select_bubble[i].idx] = 1;
        number++;
    }
    getdata("csv/data1.csv",0);
    console.log(data);
    //console.log(date);
    localStorage.setItem("select",JSON.stringify(select_bubble));
    window.location.href = 'chart.html';
}

function getdata(filename, c){
    var j = 0,tmp  = 0;
    if(c<1){
        d3.csv(filename, function(d){
            day = d.length;
            for(var i = 0;i < d.length;i++){
                data[i] = [];
            }
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
            yourtrend=parseFloat(trend(number,data,tmpcase));
            getdata(filename,++c);
            console.log(yourtrend);
            console.log(yourm);
            localStorage.setItem("fund",JSON.stringify(Y));
            localStorage.setItem("m",toString(yourm));
            localStorage.setItem("trend",toString(yourtrend));
            localStorage.setItem("date",JSON.stringify(date));
            localStorage.setItem("choose",JSON.stringify(tmpcase));
        });
    }
}

function trend(n,data,tmpcase){
    for(var i = 0;i < data.length+1;i++){
        Y[i] = 0;
        y[i] = [];
    }
	var init = 10000000,monleft;  //double
	var tmp = 0,left = [],m=0,risk=0; //double
    var stock,j,money = parseInt(init/n),r,c,i; //int
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
    console.log(Y);
    yourm = m;
	if(m > 0)
		return m/risk;
	else
		return m*risk;
}