function selectALL(){
    var bubble_click = document.getElementById("bubble_click");
    bubble_click.play();
    for(var j = 0; j < nodes.length; j++){
        if(nodes[j].selected == false){
            d3.select(images[0][j]).transition()
            .duration(700)    
            .ease("bounce")
            .attr("x", function(d){return d.x - d.r * 1.5;})
            .attr("y", function(d){return d.y - d.r * 1.5;})
            .attr("width", function(d){return d.r * 1.5 * 2;})
            .attr("height", function(d){return d.r * 1.5 * 2;})
            .each("start",function(d){
                d.selected = true;
                d.fixed = true;
                d.r *= 1.5;
            })
            .each("end",function(d){
                d.fixed = false;
            });
            
            
            select_bubble.push(nodes[j]);
            select_bubble_add.push(images[0][j]);
        }
    }

}

function resetAll(){
    var bubble_reset = document.getElementById("bubble_reset");
    bubble_reset.play();
    

    // force.stop();
    // for(var j = 0; j < bubble_list.length; j++){
        
    //     bubble_list[j].selected = false;
    //     bubble_list[j].r = 20;
    //     bubble_list[j].company = all_company_name[bubble_list[j].idx];
    //     nodes.push(bubble_list[j]);
    //     images[0].push(bubble_list_add[j]);
        
    // }
    // force.resume();
    // bubble_list = [];
    // bubble_list_add = [];

    for(var j = 0; j < nodes.length; j++){
        if(nodes[j].selected == true){
            d3.select(images[0][j]).transition()
            .duration(700)    
            .ease("bounce")
            .attr("x", function(d){return d.x - d.r / 1.5;})
            .attr("y", function(d){return d.y - d.r / 1.5;})
            .attr("width", function(d){return d.r / 1.5 * 2;})
            .attr("height", function(d){return d.r / 1.5 * 2;})
            .each("start",function(d){
                d.selected = false;
                d.fixed = true;
                d.r /= 1.5;
            })
            .each("end",function(d){
                d.fixed = false;
            });
            
            
            select_bubble = [];
            select_bubble_add = [];
        }
    }
}


function temp(fn, c){
    if(c<count_f){
        d3.csv(fn, function(d){
            for(var j = 0; j < d.length; j++){
                stock_date.push(d[j].Date);    
                delete d[j]["Date"];
            }
            data = data.concat(d);
            c++;
            temp(filename[c],c);
        });
    }
}

var filename = [];
var count_f = 0;

function preset(){
    data = [];
    data_list = [];
    data_list_count = 0;
    filename = [];
    count_f = 0;
    mode = document.getElementById("mode").value;
    
    var start_month = document.getElementById("start_month").value;
    var end_month = document.getElementById("end_month").value;
    start_month = start_month.split("-");
    end_month = end_month.split("-");
    var current_month = start_month;
    var date_switch = true;

    while(date_switch){
        if((current_month[0] == end_month[0] && current_month[1] > end_month[1]) || (current_month[0] > end_month[0])){
            date_switch = false;
        }else{
            
            filename[count_f] = "DJIA_30/M2M/train_" + current_month[0] + "_" + current_month[1] + "(" + current_month[0] + " Q1).csv";
            count_f++;
            var m = parseInt(current_month[1])
            if(m < 12){
                m++;
                if(m < 10){
                    current_month[1] = "0" + m.toString();
                }else{
                    current_month[1] = m.toString();
                }
            }else{
                m = parseInt(current_month[0])+1;
                current_month[0] = m.toString();
                m = 1;
                current_month[1] = "0" + m.toString();
            }
        }
    }

    var QTSTYPE = document.getElementById("qts_list").value;
    var DELTA = parseFloat(document.getElementById("delta").value);
    var RUNTIMES = parseInt(document.getElementById("runtimes").value);
    var STOCKNUMBER = parseInt(document.getElementById("stock_number").value);
    var EXPNUMBER = parseInt(document.getElementById("exp_number").value);

    sendBubble();
    
    temp(filename[0], 0)
    
    se = Math.max(count_f * 50, 1000);
    setTimeout(function(){countFunds(QTSTYPE, DELTA, RUNTIMES, STOCKNUMBER, EXPNUMBER);},se);
}