// menentukan pilihan komputer
function getPilihanKomputer() {
    const komp = Math.random();
    if (komp < 0.36) return 'gajah';
    if (komp >= 0.36 && komp < 0.62) return 'orang';
    return 'semut';
};

// menentukan hasil
function getHasil(player, komp) {
    if (player == komp) return 'SERI!';
    if (player == 'gajah') return (komp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (komp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (komp == 'gajah') ? 'MENANG!' : 'KALAH!';
};