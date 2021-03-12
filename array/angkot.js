var passengers = [];

var addPassengers = function (namePass,passengers){
    // if angkot is empty
    if(passengers.length == 0){
        // add passengers at begining
        passengers.push(namePass);
    }
    else{
        // filter all chair
        for(var i = 0; i < passengers.length; i++){
            // if there is empty chair
            if(passengers[i] == undefined){
                // add passengers
                passengers[i] = namePass;
            }
            else if(passengers[i] == namePass){
                // show message
                console.log("The name '" + namePass + "' has been exist!");
            }
            else if(i == passengers.length - 1){
                // add passengers
                passengers.push(namePass);

            }
        }
    }

    return passengers;
}

var delPassengers = function (namePass,passengers){
        if(passengers.length == 0){
            console.log("The Angkot is empty!");
        }
        else{
            for(var i = 0; i < passengers.length; i++){
                if(passengers[i] == namePass){
                    passengers[i] = undefined;
                }
                else if(i == passengers.length - 1){
                    console.log("The name '" + namePass + "' isn't exist!");   
                }
            }
        }

        return passengers; 
}
        
