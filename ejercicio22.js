const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const result = []
for (let i = 0; i < foodSchedule.length; i++) {
    const food = foodSchedule[i];
    if (!food.isVegan) {const fruit = fruits.pop();
if (fruit) {result.push({name: fruit, isVegan: true});}
else {result.push(food);}} else {result.push(food);}}

console.log(result)