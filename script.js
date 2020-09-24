const ubahWarna = document.getElementById('ubahWarna');


ubahWarna.onclick = function(){
    //document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda')
}


const acakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak WARNA');

acakWarna.appendChild(teksTombol);
acakWarna.setAttribute('type', 'button');

ubahWarna.after(acakWarna) //save button dibawah button yang awal


acakWarna.addEventListener('click', function(){
    const r = Math.round((Math.random()* 255) +1);
    const g = Math.round((Math.random()* 255) +1);
    const b = Math.round((Math.random()* 255) +1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +', '+ b +')';
});







const sMerah =document.querySelector('input[name=sMerah]');

sMerah.addEventListener('input', function(){
    const r =sMerah.value;
    const g =sHijau.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +' ,100)'
});
const sHijau =document.querySelector('input[name=sHijau]');

sHijau.addEventListener('input', function(){
    const r =sMerah.value;
    const g =sHijau.value;
    const b =sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +' ,'+ b +')'
});

const sBiru =document.querySelector('input[name=sBiru]');
sBiru.addEventListener('input', function(){
    const r =sMerah.value;
    const g =sHijau.value;
    const b =sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +' ,'+ b +')'
});

document.body.addEventListener('mousemove', function(event){
    // melihat posisi mouse
    event.clientX
})