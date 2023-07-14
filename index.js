function scuberGreetingForFeet(distance) {
let greeting;

if(distance<= 400){
  greeting = 'This is one is on me!';
} else if (diostance > 2000 && distance <= 2500) {
  greeting = 'I will gladly take your thirty bucks.';
} else if (distance > 2500) {
  greeting = 'No can do.'
}
return greeting;

function ternaryCheckCity(city) {
  const response = city === 'NYC' ? 'OK, sounds good.' : 'No go';
  return response;
}

  function switchOnCharmFromTip(tip) {
    let response;
  
    switch (tip) {
      case 'generous':
        response = 'Thank you so much.';
        break;
      case 'not as generous':
        response = 'Thank you.';
        break;
      default:
        response = 'Bye.';
        break;
    }
  
    return response;
  }
  
}