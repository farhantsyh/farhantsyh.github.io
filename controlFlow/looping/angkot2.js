var noAngkot = 1;
    jmlhAngkot = 10;
    jmlhOprsi = 8;

while(noAngkot <= jmlhOprsi){
    console.log("Angkot no. " + noAngkot + " beroperasi dengan baik!");
noAngkot++;
}

for(noAngkot = jmlhOprsi + 1 ; noAngkot <= jmlhAngkot; noAngkot++){
    console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi!");
}