function Angkot(driverName,route,passengers,cash){
    this.driverName = driverName;
    this.route = route;
    this.passengers = passengers;
    this.cash = cash;

    this.upPass = function(namePass){
        this.passengers.push(namePass);
        return this.passengers;
    }

    this.downPass = function(namePass,pay){
        if(this.passengers.length == 0){
            alert("Angkot is still empty!");
            return false;
        }
        
        for(var i = 0; i < this.passengers.length; i++){
            if(this.passengers[i] == namePass){
                this.passengers[i] = undefined;
                this.cash += pay;
                return this.passengers;
            }
        }
    }
}

var angkot1 = new Angkot("Farhan",["Blok M","Kota","Bundaran HI"],[],0); 
var angkot2 = new Angkot("Gian",["Blok M","Kota","Bundaran HI"],[],0); 