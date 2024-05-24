const start = document.getElementById('container');
const text = document.getElementById('text'); 
const text2 = document.getElementById('text2');
const results = document.getElementById('results');
const restart = document.getElementById('restart');

let count = 0;
let startTime, endTime, timeout;
let used = false;

start.addEventListener('click', function handleClick() {
    start.style.background = 'rgb(' + 198 + ',' + 55 + ',' + 55 + ')';
    text.textContent = 'Wait for the green';
    text2.textContent = '';
    count++;

    if(count == 1)
        timeout = setTimeout(changeToGreen, 5000);
    
    if(count == 2){
        clearTimeout(timeout);
        if(used){
            endTime = new Date();
            start.style.background = 'rgb(' + 90 + ',' + 127 + ',' + 207 + ')';
            let elapsedTime = endTime - startTime;
            text.textContent = elapsedTime + ' ms';
            text2.textContent = 'Click to try again';

            let li = document.createElement("li");
            li.innerHTML = elapsedTime + ' ms';
            results.appendChild(li);
        }
        else{
            start.style.background = 'rgb(' + 90 + ',' + 127 + ',' + 207 + ')';
            text.textContent = 'Too fast, you have to wait for the green!';
            text2.textContent = 'Click to try again';
        }
        count = 0;
        used = false;
    }
});

function changeToGreen(){
    start.style.background = 'rgb(' + 0 + ',' + 153 + ',' + 0 + ')';
    text.textContent = 'Click!';
    used = true;
    startTime = Date.now();
}

function clearList(){
    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }
}