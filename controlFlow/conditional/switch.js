var choose = prompt("Choose drink or food : \n (ex : rice,meal,milk,fruit,softdrink)");

switch(choose){
    case 'rice' :
    case 'meal' :
    case 'milk' :
    case 'fruit' :
        alert("Food or Drink is healthy");
    break;
    case 'softdrink' :
        alert("Food or Drink isn't healthy");
    break;
    default :
        alert("Food or Drink isn't unavailable");
    break;
}