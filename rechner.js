
window.addEventListener('DOMContentLoaded', function () { 
  const startBtn = document.getElementById('startButton'); 
  const startScreen = document.getElementById('startScreen');
  const calculator = document.getElementById('calculatorContainer');

  startBtn.addEventListener('click', function () {
    startScreen.style.display = 'none'; 
    calculator.style.display = 'flex'; 
  });
});


