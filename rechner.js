// Warten, bis die Seite vollständig geladen ist
window.addEventListener('DOMContentLoaded', function () { 
  const startBtn = document.getElementById('startButton'); //sucht, benennt button namens ("startButton")
  const startScreen = document.getElementById('startScreen');//sucht, benennt Screen namens ("startSceen")
  const calculator = document.getElementById('calculatorContainer');//sucht, benennt button namens ("ccalculatorContainer")

  startBtn.addEventListener('click', function () {
    startScreen.style.display = 'none'; //Versteckt Startbildschirm
    calculator.style.display = 'flex'; //zeigt Rechner
  });
});
