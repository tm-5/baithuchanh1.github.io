function submit_exit(){
    window.location.href="index.html";
}
function exitPage(){
    if(confirm("Bài làm của bạn chưa được gửi đi!\nXác nhận thoát?")==true) submit_exit();
}

const examTime = 1000;
let remainingTime = examTime;

function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(remainingTime);
    if(remainingTime<20){
        if(remainingTime%2==0){
            document.getElementById("timeleft-warning").style.display="none";
        }
        else{
            document.getElementById("timeleft-warning").style.display="block";
        }
    }
    if (remainingTime <0) {
        clearInterval(timerInterval);
        store();
        alert('Hết giờ! Bài làm của bạn đã được nộp tự động.');
        window.location.href="result.html";
        
    }
    remainingTime--;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

const timerInterval = setInterval(updateTimer, 1000);

var k=document.getElementsByClassName("question-form");
function funcSubmit(){
    if(confirm("Nộp bài sớm!\nBạn có chắc chắn không?")==true){
        store();
        window.location.href="result.html";
    } 
}
function store(){
    var s="";
    for(var i=0;i<k.length;i++){
        var c=k[i].children;
        for(var j=0;j<c.length;j++){
            if(c[j].tagName=="INPUT"){
                if(c[j].checked){
                    s+=c[j].value;
                    bool=false;
                }
                else s+=".";
            }
        }
    }
    localStorage.setItem("k",s);

    var textKey="";
    var text_question=document.getElementsByClassName("t");
    for(var i=0;i<text_question.length;i++){
        textKey+=text_question[i].value;
        textKey+=".";
    }
    localStorage.setItem("t",textKey)
}
