// var mahasiswa = ['Farhan Agustiansyah', true, [3.5,4,4,4,4,4,3.9,4]];
// function IPKumulatif(IPSemester){
//     var total = 0;
//     for(var i = 0; i < IPSemester.length; i++){
//         total += IPSemester[i];
//     }
//     return total;
// }

var mahasiswa = {
    nama : "Farhan Agustiansyah",
    lulus : true,
    IPSemester : [3.5,4,4,4,4,4,3.9,4],
    alamat : {
        jalan : "Jalan Cempedak II",
        kota : "Muara Enim",
        provinsi : "Sumatera Selatan"
    },
    IPKumulatif : function(){
        var total = 0;
        var ips = this.IPSemester;
        for(var i = 0; i < ips.length; i++){
            total += ips[i];
        }
        return total / ips.length;
    }
}

console.log(mahasiswa.IPKumulatif());

var people = {
    nama : "Rajjo Kevin Alvino",
    universitas : "Universitas Andalas",
    umur : 18,
    sapa : function(){
        return "HI, Nama saya " + this.nama +
               "\nUmur saya " + this.umur +
               "\nBekuliah di " + this.universitas;
    }
}

console.log(people.sapa());