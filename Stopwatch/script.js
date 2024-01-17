const playButton= document.getElementsByClassName("play")[0];
const lapButton= document.getElementsByClassName("lap")[0];
const resetButton= document.getElementsByClassName("reset")[0];
const clearButton= document.getElementsByClassName("lap-clear-button")[0];
const minute= document.getElementsByClassName("minute")[0];
const hour= document.getElementsByClassName("hour")[0];
const second= document.getElementsByClassName("sec")[0];
const centisecond= document.getElementsByClassName("msec")[0];
const laps= document.getElementsByClassName("laps")[0];
const bg= document.getElementsByClassName("outer-circle")[0];

let isplay=false;
let secounter=0;
let sec;
let centisec;
let min;

let hr;
let hrcounter=0;
let centicounter=0;
let mincounter =0;
let lapitem =0;
let isreset = false;
const toggleButton= () =>{
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

const play = ()=>{
    if(!isplay && !isreset){
        playButton.innerHTML='Pause';
        bg.classList.add("animation-bg");
                hr= setInterval(() => 
                {
                    hour.innerHTML = `${++hrcounter} :`; 
                },60*60*1000);
                min= setInterval(() => 
                {
                    if(mincounter === 60)
                    {
                        mincounter=0;
                    }
                    minute.innerHTML = `&nbsp;${++mincounter} :`; 
                },60*1000);
                sec= setInterval(() => {
                    if(secounter === 60)
                    {
                        secounter =0;
                    }
                    second.innerHTML = `&nbsp; ${++secounter} :`; 
                },1000);
                centisec= setInterval(() => 
                {
                    if(centicounter ===100){
                        centicounter=0;
                    }
                    centisecond.innerHTML = `&nbsp; ${++centicounter} `; 
                },10);
        isplay=true;
        isreset=true;
        bg.classList.remove("animation-bg")
    }
    else{
        playButton.innerHTML='Play';
       clearInterval(min);
       clearInterval(sec);
       clearInterval(centisec);
        isplay=false;
        isreset=false;
    }
    toggleButton();
}



const reset = () =>{
    isreset =true;
    play();
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden"); 
    second.innerHTML= '&nbsp;0 :'
    centisecond.innerHTML='&nbsp;0';
    minute.innerHTML='0 :';
}
const lap = () =>{
    const li =document.createElement("li");
    const  number =document.createElement("span");
    const timestamp =document.createElement("span");

    li.setAttribute("class","lap-item");
    number.setAttribute("class","number");
    timestamp.setAttribute("class","timestamp");


    number.innerText=`#${++lapitem}`;
    timestamp.innerHTML = `${mincounter} : ${secounter} : ${centicounter}`;

    li.append(number,timestamp);
    laps.append(li);

    clearButton.classList.remove("hidden");
}


const clearAll = () =>{
    laps.innerHTML='';
    laps.append(clearButton);
    clearButton.classList.add("hidden");
    lapitem=0;
}
playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
lapButton.addEventListener("click",lap);
clearButton.addEventListener("click",clearAll);
