const greeting = prompt("Hai sayang\nUdah pulang belum??");
const pulang = {
    greeting : greeting
};
if (pulang.greeting === "Udah" || pulang.greeting === "udah" || pulang.greeting === "Udah bey" || pulang.greeting === "udah bey" || pulang.greeting === "sudah") {
    alert ("Oke");
}else if (pulang.greeting === "Belum" || pulang.greeting === "belum" || pulang.greeting === "belum bey" || pulang.greeting === "Belum bey") {
    alert ("Pulang dulu sayang");
}else {
    alert ("Pulang dulu ya sayang");
};