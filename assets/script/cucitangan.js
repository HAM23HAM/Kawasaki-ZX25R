
const cuciTangan = prompt("Sudah cuci tangan belum?");

const tanya = {
    cuciTangan : cuciTangan
};

if (tanya.cuciTangan === "Sudah" || tanya.cuciTangan === "sudah") {
    alert("Selamat Datang :)");
} else if (tanya.cuciTangan === "Belum" || tanya.cuciTangan === "belum") {
    alert("Cuci Tangan dulu!");
} else {
    alert ("Pokoknya cuci tangan dulu ya :) Terimakasih");
}