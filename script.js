// menentukan pilihan komputer
function getPilihanKomputer() {
    const komp = Math.random();
    if (komp < 0.36) return 'gajah';
    if (komp >= 0.36 && komp < 0.62) return 'orang';
    return 'semut';
};

// menentukan hasil
function getHasil(komp, player) {
    if (player == komp) return 'SERI!';
    if (player == 'gajah') return (komp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (komp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (komp == 'gajah') ? 'MENANG!' : 'KALAH!';
};

// menentukan rules
const pGajah = document.querySelector('li .gajah');
pGajah.addEventListener('click', function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pGajah.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    const imgKomputer = document.querySelector('.img-komputer');
    imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;

});

const pOrang = document.querySelector('li .orang');
pOrang.addEventListener('click', function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pOrang.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    const imgKomputer = document.querySelector('.img-komputer');
    imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;

});

const pSemut = document.querySelector('li .orang');
pSemut.addEventListener('click', function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pSemut.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    const imgKomputer = document.querySelector('.img-komputer');
    imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;

});