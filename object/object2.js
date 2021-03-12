// Object Literal

var mhs1 = {
    // key : value
    nama : "Farhan Agustiansyah",
    jurusan : "Information System",
    universitas : "Oxford University",
    email : "farhantsyh@icloud.co.id"
}

var mhs2 = {
    // key : value
    nama : "Rajjo Kevin Alvino",
    jurusan : "Civil Engginering",
    universitas : "Oxford University",
    email : "rajjokvnal@icloud.co.id"    
}

// Function Declaration
function makeObjectMahasiswa(nama,jurusan,universitas,email){
    var mhs = {};
    mhs.nama = nama;
    mhs.jurusan = jurusan;
    mhs.universitas = universitas;
    mhs.email = email;

    return mhs;
}

var mhs3 = makeObjectMahasiswa("Azza Dalamu Amiruddin","Bintara","Academy Police","azzadlmu@icloud.com");

// Constructor

// harus nama besar
function Mahasiswa(nama,jurusan,universitas,email){
    // var this = {}
    this.nama = nama;
    this.jurusan = jurusan;
    this.universitas = universitas;
    this.email = email;
    // return this
}

// yang penting keyword new
var mhs4 = new Mahasiswa("Andelle Gianzra Basae","Informatic Engginering","Oxford University","gianshora@icloud.com");