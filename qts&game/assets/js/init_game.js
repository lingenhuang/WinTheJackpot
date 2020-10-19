var DAYNUMBER;
var price = [];
var company_name = [];
var best_select = {
    locate: [],
    trend: 0,
    risk: 0,
    totalMoney: [],
}
//[10000000, 10028734.159999998, 10071291.959999999, 10101559.229999999, 10114813.559999999, 10143481.709999997, 10159522.69, 10186578.299999999, 10229221.92, 10241703.239999998, 10252157.139999999, 10288287.319999998, 10293777.25, 10326948.86, 10372334.159999998, 10386162.74, 10398314.389999999, 10434621.79, 10452004.329999996];

//2.313431297374733 
//10286.288219675569 
//[0, 2, 3, 4, 10, 12, 14, 15, 18, 19, 20, 21, 22, 25] 
var system_answer = [];
system_answer.totalMoney = [10000000, 10065913.13, 10108445.8, 10137569.32, 10166443.520000001, 10213720.7, 10217486.670000002, 10242335.24, 10304711.220000003, 10321582.990000002, 10347292.96, 10387245.22, 10412791.69, 10434388.04, 10502262.61, 10513051.64, 10526505.71, 10564269.46, 10605350.73];
system_answer.trend = 2.3670063521461864;
system_answer.daily_risk = 13479.516270287155;
system_answer.locate = [1, 4, 15, 18, 19, 20, 21, 22];
//[0, 3, 4, 10, 12, 14, 15, 20, 21, 22, 25, 28]


function useSystemBest() {
    company_box = document.getElementsByName("company_box");
    for (var j = 0; j < company_box.length; j++) {
        company_box[j].checked = false;
    }
    select_box = []
    for (var j = 0; j < system_answer.locate.length; j++) {
        select_box[select_box.length] = system_answer.locate[j];
        company_box[system_answer.locate[j]].checked = true;
    }

    myChart.destroy();
    var c = document.getElementById("canvas0");
    c.setAttribute("style", "background-color: white;");
    var d = document.getElementById("canvas_div");
    d.setAttribute("style", "width: 700px; border-left: 1px black solid; border-bottom: 1px black solid;");

    var s = document.getElementById("show_data");
    s.setAttribute("style", "");
    select_box.sort(sortSelect);
    var your_select = document.getElementById("your_select");
    var te = "";
    for (var j = 0; j < select_box.length; j++) {
        te += "<label onclick = 'select(this)' style = 'display: inline-block;' name = 'my_select' for='myCheckbox" + (select_box[j] + 1) + "' value = '" + select_box[j] + "'> <img style = 'width: 50px; height: 50px;' src = 'img/" + company_name[select_box[j]] + ".png' /></label>\n";
    }
    your_select.innerHTML = "<label>你的選擇</label>" + te;

    var sys = document.getElementById("system_data");
    sys.setAttribute("style", "");
    var system_data = []
    system_data = document.getElementsByName("systemData");
    system_data[0].value = system_answer.trend;
    system_data[1].value = system_answer.daily_risk;
    var system_best = document.getElementById("system_best");
    var tp = "";
    for (var j = 0; j < system_answer.locate.length; j++) {
        tp += "<label style = 'display: inline-block;' name = 'system_select'> <img style = 'width: 50px; height: 50px;' src = 'img/" + company_name[system_answer.locate[j]] + ".png' /></label>\n";
    }
    system_best.innerHTML = "<label>系統最佳選擇</label>" + tp;



    temp = [];
    temp[0] = new STOCK();
    for (var j = 0; j < select_box.length; j++) {
        if (temp[0].counter != 0) {
            temp[0].company_name += ", ";
        }
        temp[0].data[j] = 1;
        temp[0].company_name += company_name[j];
        temp[0].locate[temp[0].counter] = select_box[j];
        temp[0].counter++;

    }
    temp[0].init();
    temp = countTrend(temp);

    var myData = [];
    myData = document.getElementsByName("myData");
    myData[0].value = temp[0].trend;
    myData[1].value = temp[0].daily_risk;

    if (temp[0].trend > best_select.trend) {
        last_best_select = Object.assign({}, best_select);
        best_select.trend = temp[0].trend;
        best_select.totalMoney = temp[0].totalMoney;
        best_select.risk = temp[0].daily_risk;
        best_select.locate = select_box.slice(0);
        if (window.localStorage) {
            localStorage.best_select = JSON.stringify(best_select);
        } else {
            console.log("NOT SUPPORT");
        }

    }


    if (temp[0].trend > system_answer.trend) {
        myChart.destroy();
        var day_label = [];
        for (var j = 0; j < DAYNUMBER; j++) {
            day_label.push("day " + (j + 1));
        }

        var dataset0 = [];
        dataset0.push({
            label: "你的組合",
            lineTension: 0.4,
            backgroundColor: "#00DB00",
            borderColor: "#00DB00",
            borderWidth: 1,
            pointRadius: 0.2,
            data: temp[0].totalMoney,
            fill: false,
            yAxisID: "y-axis-1",
        });

        dataset0.push({
            label: "系統最佳組合",
            lineTension: 0.4,
            backgroundColor: "#FFD9EC",
            borderColor: "#FF0000",
            borderWidth: 1,
            pointRadius: 0.2,
            data: system_answer.totalMoney,
            fill: false,
            yAxisID: "y-axis-1",
        });

        dataset0.push({
            label: "社群運算最佳組合",
            lineTension: 0.4,
            backgroundColor: "#2828FF",
            borderColor: "#2828FF",
            borderWidth: 1,
            pointRadius: 0.2,
            data: last_best_select.totalMoney,
            fill: false,
            yAxisID: "y-axis-1",
        });

        var bestLineChartData = {
            labels: day_label,
            datasets: dataset0,
        };

        myChart = new Chart(ctx0, {
            type: "line",
            data: bestLineChartData,
            options: {
                responsive: false,
                legend: {
                    display: true,
                },
                tooltips: {
                    enabled: false,
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            // type: 'linear',
                            display: false,
                            position: "left",
                            id: "y-axis-1",
                        },
                    ],
                },
            },
        });
        findBetter();
    } else {

        var h = document.getElementById("history_data");
        h.setAttribute("style", "");
        var history_data = [];
        history_data = document.getElementsByName("historyData");
        history_data[0].value = best_select.trend;
        history_data[1].value = best_select.risk;
        var history_best = document.getElementById("history_best");
        var tp = "";
        for (var j = 0; j < best_select.locate.length; j++) {
            tp +=
                "<label style = 'display: inline-block;' name = 'history_select'> <img style = 'width: 50px; height: 50px;' src = 'img/" +
                company_name[best_select.locate[j]] +
                ".png' /></label>\n";
        }
        history_best.innerHTML = "<label>社群運算最佳選擇</label>" + tp;

        var day_label = [];
        for (var j = 0; j < DAYNUMBER; j++) {
            day_label.push("day " + (j + 1));
        }

        var dataset0 = [];
        dataset0.push({
            label: "你的組合",
            lineTension: 0.4,
            backgroundColor: "#00DB00",
            borderColor: "#00DB00",
            borderWidth: 1,
            pointRadius: 0.2,
            data: temp[0].totalMoney,
            fill: false,
            yAxisID: "y-axis-1",
        });

        dataset0.push({
            label: "系統最佳組合",
            lineTension: 0.4,
            backgroundColor: "#FFD9EC",
            borderColor: "#FF0000",
            borderWidth: 1,
            pointRadius: 0.2,
            data: system_answer.totalMoney,
            fill: false,
            yAxisID: "y-axis-1",
        });

        dataset0.push({
            label: "社群運算最佳組合",
            lineTension: 0.4,
            backgroundColor: "#2828FF",
            borderColor: "#2828FF",
            borderWidth: 1,
            pointRadius: 0.2,
            data: best_select.totalMoney,
            fill: false,
            yAxisID: "y-axis-1",
        });

        var bestLineChartData = {
            labels: day_label,
            datasets: dataset0,
        };

        myChart = new Chart(ctx0, {
            type: "line",
            data: bestLineChartData,
            options: {
                responsive: false,
                legend: {
                    display: true,
                },
                tooltips: {
                    enabled: false,
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            // type: 'linear',
                            display: false,
                            position: "left",
                            id: "y-axis-1",
                        },
                    ],
                },
            },
        });
    }



}

function usePlayerBest() {
    company_box = document.getElementsByName("company_box");
    for (var j = 0; j < company_box.length; j++) {
        company_box[j].checked = false;
    }

    select_box = []
    for (var j = 0; j < best_select.locate.length; j++) {
        select_box[select_box.length] = best_select.locate[j];
        company_box[best_select.locate[j]].checked = true;
    }

    myChart.destroy();
    var c = document.getElementById("canvas0");
    c.setAttribute("style", "background-color: white;");
    var d = document.getElementById("canvas_div");
    d.setAttribute("style", "width: 700px; border-left: 1px black solid; border-bottom: 1px black solid;");

    var s = document.getElementById("show_data");
    s.setAttribute("style", "");
    select_box.sort(sortSelect);
    var your_select = document.getElementById("your_select");
    var te = "";
    for (var j = 0; j < select_box.length; j++) {
        te += "<label onclick = 'select(this)' style = 'display: inline-block;' name = 'my_select' for='myCheckbox" + (select_box[j] + 1) + "' value = '" + select_box[j] + "'> <img style = 'width: 50px; height: 50px;' src = 'img/" + company_name[select_box[j]] + ".png' /></label>\n";
    }
    your_select.innerHTML = "<label>你的選擇</label>" + te;

    var sys = document.getElementById("system_data");
    sys.setAttribute("style", "");
    var system_data = []
    system_data = document.getElementsByName("systemData");
    system_data[0].value = system_answer.trend;
    system_data[1].value = system_answer.daily_risk;
    var system_best = document.getElementById("system_best");
    var tp = "";
    for (var j = 0; j < system_answer.locate.length; j++) {
        tp += "<label style = 'display: inline-block;' name = 'system_select'> <img style = 'width: 50px; height: 50px;' src = 'img/" + company_name[system_answer.locate[j]] + ".png' /></label>\n";
    }
    system_best.innerHTML = "<label>系統最佳選擇</label>" + tp;


    temp = [];
    temp[0] = new STOCK();
    for (var j = 0; j < select_box.length; j++) {
        if (temp[0].counter != 0) {
            temp[0].company_name += ", ";
        }
        temp[0].data[j] = 1;
        temp[0].company_name += company_name[j];
        temp[0].locate[temp[0].counter] = select_box[j];
        temp[0].counter++;

    }
    temp[0].init();
    temp = countTrend(temp);

    var myData = [];
    myData = document.getElementsByName("myData");
    myData[0].value = temp[0].trend;
    myData[1].value = temp[0].daily_risk;

    if (temp[0].trend > best_select.trend) {
        last_best_select = Object.assign({}, best_select);
        best_select.trend = temp[0].trend;
        best_select.totalMoney = temp[0].totalMoney;
        best_select.risk = temp[0].daily_risk;
        best_select.locate = select_box.slice(0);
        if (window.localStorage) {
            localStorage.best_select = JSON.stringify(best_select);
        } else {
            console.log("NOT SUPPORT");
        }

    }


    if (temp[0].trend > system_answer.trend) {
        myChart.destroy();
        var day_label = [];
        for (var j = 0; j < DAYNUMBER; j++) {
            day_label.push("day " + (j + 1));
        }

        var dataset0 = [];
        dataset0.push({
            label: "你的組合",
            lineTension: 0.4,
            backgroundColor: "#00DB00",
            borderColor: "#00DB00",
            borderWidth: 1,
            pointRadius: 0.2,
            data: temp[0].totalMoney,
            fill: false,
            yAxisID: "y-axis-1",
        });

        dataset0.push({
            label: "系統最佳組合",
            lineTension: 0.4,
            backgroundColor: "#FFD9EC",
            borderColor: "#FF0000",
            borderWidth: 1,
            pointRadius: 0.2,
            data: system_answer.totalMoney,
            fill: false,
            yAxisID: "y-axis-1",
        });

        dataset0.push({
            label: "社群運算最佳組合",
            lineTension: 0.4,
            backgroundColor: "#2828FF",
            borderColor: "#2828FF",
            borderWidth: 1,
            pointRadius: 0.2,
            data: last_best_select.totalMoney,
            fill: false,
            yAxisID: "y-axis-1",
        });

        var bestLineChartData = {
            labels: day_label,
            datasets: dataset0,
        };

        myChart = new Chart(ctx0, {
            type: "line",
            data: bestLineChartData,
            options: {
                responsive: false,
                legend: {
                    display: true,
                },
                tooltips: {
                    enabled: false,
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            // type: 'linear',
                            display: false,
                            position: "left",
                            id: "y-axis-1",
                        },
                    ],
                },
            },
        });
        findBetter();
    } else {

        var h = document.getElementById("history_data");
        h.setAttribute("style", "");
        var history_data = [];
        history_data = document.getElementsByName("historyData");
        history_data[0].value = best_select.trend;
        history_data[1].value = best_select.risk;
        var history_best = document.getElementById("history_best");
        var tp = "";
        for (var j = 0; j < best_select.locate.length; j++) {
            tp +=
                "<label style = 'display: inline-block;' name = 'history_select'> <img style = 'width: 50px; height: 50px;' src = 'img/" +
                company_name[best_select.locate[j]] +
                ".png' /></label>\n";
        }
        history_best.innerHTML = "<label>社群運算最佳選擇</label>" + tp;

        var day_label = [];
        for (var j = 0; j < DAYNUMBER; j++) {
            day_label.push("day " + (j + 1));
        }

        var dataset0 = [];
        dataset0.push({
            label: "你的組合",
            lineTension: 0.4,
            backgroundColor: "#00DB00",
            borderColor: "#00DB00",
            borderWidth: 1,
            pointRadius: 0.2,
            data: temp[0].totalMoney,
            fill: false,
            yAxisID: "y-axis-1",
        });

        dataset0.push({
            label: "系統最佳組合",
            lineTension: 0.4,
            backgroundColor: "#FFD9EC",
            borderColor: "#FF0000",
            borderWidth: 1,
            pointRadius: 0.2,
            data: system_answer.totalMoney,
            fill: false,
            yAxisID: "y-axis-1",
        });

        dataset0.push({
            label: "社群運算最佳組合",
            lineTension: 0.4,
            backgroundColor: "#2828FF",
            borderColor: "#2828FF",
            borderWidth: 1,
            pointRadius: 0.2,
            data: best_select.totalMoney,
            fill: false,
            yAxisID: "y-axis-1",
        });

        var bestLineChartData = {
            labels: day_label,
            datasets: dataset0,
        };

        myChart = new Chart(ctx0, {
            type: "line",
            data: bestLineChartData,
            options: {
                responsive: false,
                legend: {
                    display: true,
                },
                tooltips: {
                    enabled: false,
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            // type: 'linear',
                            display: false,
                            position: "left",
                            id: "y-axis-1",
                        },
                    ],
                },
            },
        });
    }
}

function initPlayerBest() {
    if (window.localStorage) {
        if (localStorage.best_select != undefined) {
            best_select.trend = 0;
            best_select.risk = 0;
            best_select.locate = [];
            best_select.totalMoney = [];
            localStorage.best_select = JSON.stringify(best_select);
        }
    } else {
        console.log("NOT SUPPORT");
    }
}

//[10000000, 10028734.159999998, 10071291.959999999, 10101559.229999999, 10114813.559999999, 10143481.709999997, 10159522.69, 10186578.299999999, 10229221.92, 10241703.239999998, 10252157.139999999, 10288287.319999998, 10293777.25, 10326948.86, 10372334.159999998, 10386162.74, 10398314.389999999, 10434621.79, 10452004.329999996];

//2.313431297374733 
//10286.288219675569 
//[0, 2, 3, 4, 10, 12, 14, 15, 18, 19, 20, 21, 22, 25] 

function resetPlayerBest() {
    if (window.localStorage) {
        if (localStorage.best_select != undefined) {
            best_select.trend = 2.313431297374733;
            best_select.risk = 10286.288219675569;
            best_select.locate = [0, 2, 3, 4, 10, 12, 14, 15, 18, 19, 20, 21, 22, 25];
            best_select.totalMoney = [10000000, 10028734.159999998, 10071291.959999999, 10101559.229999999, 10114813.559999999, 10143481.709999997, 10159522.69, 10186578.299999999, 10229221.92, 10241703.239999998, 10252157.139999999, 10288287.319999998, 10293777.25, 10326948.86, 10372334.159999998, 10386162.74, 10398314.389999999, 10434621.79, 10452004.329999996];
            localStorage.best_select = JSON.stringify(best_select);
        }
    } else {
        console.log("NOT SUPPORT");
    }
}

function getData() {
    d3.csv("DJIA_30/M2M/train_2014_11(2014 Q1).csv", function (d) {
        for (var j = 0; j < d.length; j++) {
            delete d[j]["Date"];
        }
        data = d
        for (var j = 0; j < data.length; j++) {
            var temp = 0
            for (var k in data[j]) {


                if (temp < 31) {
                    var t = data[j][k]
                    delete data[j][k];
                    data[j][replace_company[temp]] = t;
                }
                temp++;
            }
        }

        delete data[0]["undefined"];

        DAYNUMBER = data.length;
        for (var j in data[0]) {
            company_name.push(j);
        }
        for (var j = 0; j < 30; j++) {
            price[j] = [];
            for (var k = 0; k < DAYNUMBER; k++) {
                price[j].push(data[k][company_name[j]]);
            }
        }
        start();
    });
}

var ctx = [];
var myChart;

var dataset = [];
var ctx0;
function start() {

    if (window.localStorage) {
        if (localStorage.best_select != undefined) {
            best_select = JSON.parse(localStorage.best_select);
            last_best_select = Object.assign({}, best_select);
        }
    } else {
        console.log("NOT SUPPORT");
    }


    for (var j = 0; j < 30; j++) {
        var tem = "canvas" + (j + 1);
        ctx[j] = document.getElementById(tem).getContext("2d");
    }

    var day_label = [];
    for (var j = 0; j < DAYNUMBER; j++) {
        day_label.push("day " + (j + 1));
    }

    for (var j = 0; j < 30; j++) {
        dataset = [];
        dataset.push({
            label: company_name[j],
            lineTension: 0.4,
            backgroundColor: "#FFD9EC",
            borderColor: "#FF0000",
            borderWidth: 1,
            pointRadius: 0.2,
            data: price[j],
            fill: false,
            yAxisID: 'y-axis-1',
        });



        var bestLineChartData = {
            labels: day_label,
            datasets: dataset,
        };

        myChart = new Chart(ctx[j], {
            type: 'line',
            data: bestLineChartData,
            options: {
                responsive: true,
                legend: {
                    display: false,
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        // type: 'linear',
                        display: false,
                        position: 'left',
                        id: 'y-axis-1',
                        gridLines: {
                            drawOnChartArea: true, // only want the grid lines for one axis to show up
                        },
                    },
                    ]
                },
            }
        });
    }
    ctx0 = document.getElementById("canvas0").getContext("2d");
    myChart = new Chart(ctx0, {});
    company_box = document.getElementsByName("company_box");
    for (var j = 0; j < company_box.length; j++) {
        company_box[j].checked = false;
    }


}

window.addEventListener("load", getData, false);