
function playGame(userChoice) {
  const options = ['камень', 'ножницы', 'бумага'];
  const computerChoice = options[Math.floor(Math.random() * options.length)];

  let result;

  if (userChoice === computerChoice) {
    result = 'Ничья';
  } else if (
    (userChoice === 'камень' && computerChoice === 'ножницы') ||
    (userChoice === 'ножницы' && computerChoice === 'бумага') ||
    (userChoice === 'бумага' && computerChoice === 'камень')
  ) {
    result = 'Пользователь';
  } else {
    result = 'Компьютер';
  }

  console.log(`Вы показали ${userChoice}`, `Компьютер показывает ${computerChoice}`, `Победил ${result}`);
}

// Пример
playGame('камень');

