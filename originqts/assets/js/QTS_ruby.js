var FUNDS = 10000000;
var DAYNUMBER;
var mode;
var COMPANYNUMBER;
var company_name = [];
var s_company = [];
var data = [];
var box;

function STOCK(){
    this.data = [];
    this.investment_number = [];
    this.company_name = "",
    this.totalMoney = [];
    this.fs = [];
    this.locate = [];
    this.dMoney = 0;
    this.myMoney = 0;
    this.counter = 0;
    this.mx = 0;
    this.my = 1;
    this.m = 0;
    this.daily_risk = 0;
    this.trend = 0;
    this.day = 0;
    this.chart_totalMoney = [];
    this.chart_y_line = [];
    this.chart_fs = [];
    this.Y = 0;
    this.y_line = [];
    this.Y_line = function(){
        this.Y = this.m * this.day + FUNDS;
        this.y_line.push(this.Y);
    };
    this.init = function(){
        for(var j = 0; j < this.counter; j++){
            this.fs[j] = [];
            this.chart_fs[j] = [];
        }
        for(var j = 0; j < DAYNUMBER; j++){
            this.totalMoney[j] = 0;
        }
    }
};

function countTrend(stock){
    for(var j = 0; j < stock.length; j++){
        if(stock[j].counter!=0){
            stock[j].dMoney = Math.floor(FUNDS / stock[j].counter);
            stock[j].myMoney += FUNDS % stock[j].counter;
        }

        for(var k = 0; k < stock[j].counter; k++){
            stock[j].investment_number[k] = Math.floor(stock[j].dMoney / parseFloat(data[0][company_name[stock[j].locate[k]]]));
            stock[j].myMoney += stock[j].dMoney - (stock[j].investment_number[k] * parseFloat(data[0][company_name[stock[j].locate[k]]]));
            stock[j].fs[k][0] = stock[j].investment_number[k] * parseFloat(data[0][company_name[stock[j].locate[k]]]); 
        }
        
        stock[j].totalMoney[0] = FUNDS;
    }
    
    
    for(var j = 0; j < DAYNUMBER-1; j++){
        for(var k = 0; k < stock.length; k++){
            for(var h = 0; h < stock[k].counter; h++){
                
                stock[k].totalMoney[j+1] += stock[k].investment_number[h] * parseFloat(data[j+1][company_name[stock[k].locate[h]]]);
                stock[k].fs[h][j+1] = stock[k].investment_number[h] * parseFloat(data[j+1][company_name[stock[k].locate[h]]]);
            }
            stock[k].totalMoney[j+1] += stock[k].myMoney;
            stock[k].mx += (j+2) * (stock[k].totalMoney[j+1] - FUNDS);
            stock[k].my += (j+2) * (j+2);
        }
    }

    for(var j = 0; j < stock.length; j++){
        if(stock[j].counter!=0){
            stock[j].m = stock[j].mx / stock[j].my;
        }
        
        for (var k = 0; k < DAYNUMBER; k++){
            stock[j].day = k+1;
            stock[j].Y_line();
            stock[j].daily_risk += (stock[j].totalMoney[k] - stock[j].Y) * (stock[j].totalMoney[k] - stock[j].Y);
        }
        stock[j].daily_risk = Math.sqrt(stock[j].daily_risk / DAYNUMBER);
        if(stock[j].m < 0){
            stock[j].trend = stock[j].m * stock[j].daily_risk;    
        }else{
            stock[j].trend = stock[j].m / stock[j].daily_risk;
        }
        
    }

    
    
    return stock;
}


function countFunds(QTSTYPE,DELTA, RUNTIMES, STOCKNUMBER, EXPNUMBER){
    if(data.length != 0){
        d3.csv("data/data4.csv", function(d){
            
            console.log(data.length);
            for(var j = 0; j < data.length; j++){
                var temp = 0
                for(var k in data[j]){
                    if(replace_company[temp] != k){
                        data[j][replace_company[temp]] = data[j][k];
                        delete data[j][k];
                    }
                    temp++;
                }
            }
            if(mode == "general"){
                for(var j = 0; j < bubble_list.length; j++){
                        s_company[j] = bubble_list[j].idx;
                }
                COMPANYNUMBER = bubble_list.length;
                DAYNUMBER = data.length;
            }else{
                for(var j = 0; j < 30; j++){
                    s_company[j] = j;
                }
                COMPANYNUMBER = 30;
            }

            
            c = 0;
            var count = 0;
            for(var ke in data[0]){
                if(c == s_company[count]){
                    company_name[count] = ke;
                    count++;
                }
                c++;
            }
            console.log(company_name);


            var stock = [];
    
            for(var j = 0; j < COMPANYNUMBER; j++){
                stock[j] = new STOCK();

                for(var k = 0; k < COMPANYNUMBER; k++){
                    if(k != j){
                        stock[j].data[k] = 0;
                    }else{
                        if(stock[j].counter != 0){
                            stock[j].company_name += ", ";
                        }
                        stock[j].data[k] = 1;
                        stock[j].company_name += company_name[k];
                        stock[j].locate[stock[j].counter] = k;
                        stock[j].counter++;
                    }
                }
                stock[j].init();
                
            }

            stock = countTrend(stock);

            var game_stock = []
            game_stock[0] = new STOCK();

            if(mode == "game"){
                for(var j = 0; j < COMPANYNUMBER; j++){
                    if(j != select_box[game_stock[0].counter]){
                        game_stock[0].data[j] = 0;
                    }else{
                        if(game_stock[0].counter != 0){
                            game_stock[0].company_name += ", ";
                        }
                        game_stock[0].data[j] = 1;
                        game_stock[0].company_name += company_name[j];
                        game_stock[0].locate[game_stock[0].counter] = j;
                        game_stock[0].counter++;
                    }
                    if(game_stock[0].counter == select_box.length){
                        break;
                    }
                }
                game_stock[0].init();
                game_stock = countTrend(game_stock);
            }

            


            var exp_best_answer = new STOCK();
            exp_best_answer.trend = 0;
            

            for(var n = 0; n < EXPNUMBER; n++){
            
                var best_answer = new STOCK();

                var worst_answer = new STOCK();

                best_answer.trend = 0;

                for(var j = 0; j < COMPANYNUMBER; j++){
                    best_answer.data[j] = 0;
                }
                worst_answer.trend = 10000;

                var change_number = [];
                for(var j = 0; j < COMPANYNUMBER; j++){
                    change_number[j] = 0.5;
                }

                for(var i = 0; i < RUNTIMES; i++){
                    for(var j = 0; j< COMPANYNUMBER; j++){
                        change_number[j] = Math.floor(change_number[j] * 1000) / 1000;
                    }
                    
                    var r_stock = [];
            
                    for(var j = 0; j < STOCKNUMBER; j++){
                        r_stock[j] = new STOCK();

                        for(var k = 0; k < DAYNUMBER; k++){
                            r_stock[j].totalMoney[k] = 0;
                        }

                        for(var k = 0; k < COMPANYNUMBER; k++){
                            var r = Math.random();

                            if(r > change_number[k]){
                                r_stock[j].data[k] = 0;
                            }else{
                                r_stock[j].data[k] = 1;
                                if(r_stock[j].counter != 0){
                                    r_stock[j].company_name += ", ";
                                }
                                r_stock[j].company_name += company_name[k];
                                r_stock[j].locate[r_stock[j].counter] = k;
                                r_stock[j].counter++;
                            }
                        }
                        r_stock[j].init();
                    }

                    

                    r_stock = countTrend(r_stock);


                    var good_answer = r_stock[0];
                    var bad_answer = r_stock[r_stock.length-1];
                    for(var j = 0; j < STOCKNUMBER; j++){
                        if(good_answer.trend < r_stock[j].trend){
                            good_answer = r_stock[j];
                        }else if(bad_answer > r_stock[j].trend){
                            bad_answer = r_stock[j];
                        }
                    }

                    if(best_answer.trend < good_answer.trend){
                        
                        best_answer = good_answer;
                    //     console.log("i = ", i);
                    //     console.log(best_answer.counter);
                    //     console.log(best_answer.trend);
                    }
                    
                    if(worst_answer.trend > bad_answer.trend){
                        worst_answer = bad_answer;
                    }

                    for(var j = 0; j < COMPANYNUMBER; j++){
                        
                        switch(QTSTYPE){
                            case "QTS":
                                if(good_answer.data[j] > bad_answer.data[j]){
                                    change_number[j] += DELTA;
                                }else if(good_answer.data[j] < bad_answer.data[j]){
                                    change_number[j] -= DELTA;
                                }
                                break;
                            
                            case "GQTS":
                                if(best_answer.data[j] > bad_answer.data[j]){
                                    change_number[j] += DELTA;
                                }else if(best_answer.data[j] < bad_answer.data[j]){
                                    change_number[j] -= DELTA;
                                }
                                break;
                            
                            case "GNQTS":
                                if(best_answer.data[j] > bad_answer.data[j]){
                                    if(change_number[j] < 0.5){
                                        change_number[j] = 1 - change_number[j];
                                    }
                                    change_number[j] += DELTA;
                                }else if(best_answer.data[j] < bad_answer.data[j]){
                                    if(change_number[j] > 0.5){
                                        change_number[j] = 1 - change_number[j];
                                    }
                                    change_number[j] -= DELTA;
                                }
                                break;
                        }
                        
                    }   

                }

                if(exp_best_answer.trend < best_answer.trend){
                        
                    exp_best_answer = best_answer;
                    
                }
            }
            
            if (window.localStorage) {
                localStorage.mode = mode;
                localStorage.game_stock = JSON.stringify(game_stock);
                localStorage.exp_best_answer = JSON.stringify(exp_best_answer);
                localStorage.stock_length = stock.length;
                for(var j = 0; j < stock.length; j++){
                    var temp = "stock" + j;
                    localStorage[temp] = JSON.stringify(stock[j]);
                }
                localStorage.company_name_length = company_name.length;
                for(var j = 0; j < company_name.length; j++){
                    var temp = "company_name" + j;
                    localStorage[temp] = JSON.stringify(company_name[j]);
                }
                window.location.href = 'ruby_chart.html';//'https://alvintang0925.github.io/fortyweb/qts.html';
            } else {
                console.log("NOT SUPPORT");
            }
                        
        });
    }
    
}