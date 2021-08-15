    'use strict';
function randomInteger(min, max) {
    
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
 // alert( randomInteger(1, 3) );

  const isNum = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


const start = () => {
    let rNumber = randomInteger(1,100);
    // console.log('rNumber: ', rNumber);
    const game = () => {
        const num = prompt('"Угадай число от 1 до 100" (Для выхода оставьте строку пустой)');
        if (num === null) {
            alert('До свидания');
            return;
        }
        if (isNum(num)) {
            const realNum = +num;
            if (realNum > rNumber) {
                alert('Загаданное число меньше');
                game();
            } else if (realNum < rNumber) {
                alert('Загаданное число больше');
                game();
            } else {
                if (confirm('Вы угадали! Сыграем ещё?')) {
                    start();
                } else {
                    alert('До свидания');
                    return;
                }
            }
        } else {
            alert('Введите число');
            game();
        }
    };
    game();
};

start();