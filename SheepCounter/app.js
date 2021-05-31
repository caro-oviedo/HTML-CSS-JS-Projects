let counterEl = document.getElementById("count-el");
let LogResults = document.getElementsByClassName("logResult")

let count = 0;
let log =[];


function increment(){
    count += 1;
    counterEl.textContent = count;
};

function save(){
    var inicio = new Date();
    if (log.lenght == 4){
        log.unshift(count);
        log.pop;
    }else{
        log.unshift(count);
    }
    for (i in log){
        LogResults[i].textContent = log[i] + " - " + "Date: " + inicio.getDate() + " / " + (inicio.getMonth()+1);

    }

    counterEl.textContent = 0;
    count = 0;

;}

