var noAngkot = 1;
    jmlhAngkot = 10;

for(noAngkot; noAngkot <= 10; noAngkot++){
    if(noAngkot !== 5 && noAngkot <= 6)
        console.log("Angkot no. " + noAngkot + " beroperasi dengan baik!");
    else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10)
        console.log("Angkot no. " + noAngkot + " sedang lembur!");
    else
        console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi!");
}