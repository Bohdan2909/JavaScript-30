//1 

let count = 0;

function cc(card) {
  // Змініть код лише під цим рядком
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }
  if (count > 0) {
    return `${count} Bet`;
  } else if (count <= 0) {
    return `${count} Hold`;
  } else {

    return "Change Me";
  }

  // Змініть код лише над цим рядком
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

//2
// Налаштування
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Змініть код лише під цим рядком
const entreeValue = testObj["an entree"]; // Змініть цей рядок
const drinkValue = testObj["the drink"]; // Змініть цей рядок