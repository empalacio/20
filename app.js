
alert("welcome to 21")

ai = 0;
user = 0;


do {
  var numbers = Math.floor(Math.random() * 10+1);
  ai = ai + numbers;
  alert(`The AI has ${numbers}. The new total is ${ai}`);

} while (ai <= 16);

alert("its your turn");


do {
  var numbers = Math.floor(Math.random() * 10+1);
  user = user + numbers;

  alert(`You have ${numbers}. The new total is ${user}`);

} while (user <= 21)


