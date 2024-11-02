var ramdanDate = new Date('March 1, 2025 00:00:00').getTime();
function ramdanCounter(){
    var currentDate = new Date().getTime();
    var diff = ramdanDate - currentDate;
    var second = 1000;
    var mint = second * 60;
    var hour = mint * 60;
    var day = hour * 24;
    var months = day * 30;
    var mon = Math.floor(diff / months)
    var days = Math.floor(((diff % months)) / day);
    var hours = Math.floor((diff % day) / hour);
    var min = Math.floor((diff % hour) / mint)
    document.getElementById('month').innerText = mon
    document.getElementById('days').innerText = days
    document.getElementById('hours').innerText = hours
    document.getElementById('minutes').innerText = min

    if(diff < 0){
        clearInterval()
        document.querySelector('.container').innerHTML = 'Ramdan Has Been Started'
    }
}

setInterval(function(){
    ramdanCounter();
},1000)
// ramdanCounter()