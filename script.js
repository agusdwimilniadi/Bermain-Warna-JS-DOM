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