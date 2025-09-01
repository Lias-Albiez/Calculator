
window.addEventListener('DOMContentLoaded', function () { 
  const startBtn = document.getElementById('startButton'); 
  const startScreen = document.getElementById('startScreen');
  const calculator = document.getElementById('calculatorContainer');

  startBtn.addEventListener('click', function () {
    startScreen.style.display = 'none'; //Versteckt Startbildschirm
    calculator.style.display = 'flex'; //zeigt Rechner
  });
});

