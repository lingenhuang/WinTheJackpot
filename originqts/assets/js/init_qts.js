
function start(){       
    var sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", preset, false);
    var allButton = document.getElementById("allButton");
    allButton.addEventListener("click", selectALL, false);
    var resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", resetAll, false);

    showBubble();
}


window.addEventListener("load", start, false);