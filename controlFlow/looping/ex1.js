var n = 9;
var s = "";

for(var i = 0; i < n; i++){
    for(var j = 0; j <= i + i; j++){
        s += "*";
    }
    s += "\n";
}
console.log(s);