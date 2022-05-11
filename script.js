// menentukan pilihan komputer
function getPilihanKomputer() {
    const komp = Math.random();
    if (komp < 0.36) return 'gajah';
    if (komp >= 0.36 && komp < 0.62) return 'orang';
    return 'semut';
}