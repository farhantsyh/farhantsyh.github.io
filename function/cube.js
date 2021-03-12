var a = parseInt(prompt("Input sisi kubus A : "));
    b = parseInt(prompt("Input sisi kubus B : "));

function jumlahVolumeDuaKubus(a,b){
    return a * a * a + b * b * b;
}

var nilai = jumlahVolumeDuaKubus(a,b);
alert("Jumlah Vol Kubus : " + nilai);



