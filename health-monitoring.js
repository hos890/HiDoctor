// js/modules/health-monitoring.js

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function updateVitals() {
    const heartRate = document.getElementById("heartRate");
    const bloodPressure = document.getElementById("bloodPressure");
    const temperature = document.getElementById("temperature");
  
    if (!heartRate || !bloodPressure || !temperature) return;
  
    heartRate.textContent = getRandomInt(60, 100) + " bpm";
    bloodPressure.textContent = getRandomInt(100, 140) + "/" + getRandomInt(60, 90) + " mmHg";
    temperature.textContent = (36 + Math.random() * 1.5).toFixed(1) + " °C";
  }
  
  setInterval(updateVitals, 5000); // هر ۵ ثانیه بروزرسانی
  updateVitals(); // بار اول سریع اجرا بشه
  