hh=document.getElementById('hour');
mh=document.getElementById('min');
sh=document.getElementById('sec');
setInterval(update, 1000);
function update(){
    let d= new Date();
    let s=d.getSeconds() / 60;
    let m=(d.getMinutes()+s) / 60;
    let hrs=(d.getHours()+m) / 12;
    sh.style.transform = "rotate(" + (s*360) + "deg)";
    mh.style.transform = "rotate(" + (m*360) + "deg)";
    hh.style.transform = "rotate(" + (hrs*360) + "deg)";
}
update();