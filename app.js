// فرم ثبت‌نام
document.querySelector(".register-form").addEventListener("submit", function (event) {
    event.preventDefault(); // جلوگیری از ارسال فرم به صورت پیش‌فرض

    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;
    const userType = document.querySelector("#user-type").value;

    // اعتبارسنجی فرم
    if (!username || !email || !password || !confirmPassword || !userType) {
        alert("لطفاً همه فیلدها را پر کنید.");
        return;
    }

    if (password !== confirmPassword) {
        alert("رمز عبور و تأیید رمز عبور مطابقت ندارند.");
        return;
    }

    // اینجا می‌توان داده‌ها را به سرور فرستاد
    alert("فرم با موفقیت ارسال شد!");
});

// فرم ورود
document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault();  // جلوگیری از ارسال فرم به صورت پیش‌فرض

    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;
    
    // دسترسی به المان هشدار برای نمایش پیام
    const errorMessage = document.querySelector("#error-message");

    // پاک کردن پیام قبلی در صورت وجود
    errorMessage.textContent = "";

    // اعتبارسنجی ورودی‌ها
    if (!email || !password) {
        errorMessage.textContent = "لطفاً همه فیلدها را پر کنید.";
        errorMessage.style.color = "red";
        return;
    }

    // در اینجا می‌توانید داده‌ها را به سرور ارسال کنید
    // ارسال درخواست به سرور با استفاده از fetch یا AJAX

    // برای مثال در اینجا:
    // fetch('/login', { method: 'POST', body: JSON.stringify({ email, password }) })

    alert("ورود با موفقیت انجام شد!");
});
// نمونه هشدار اورژانسی برای دکتر
function showEmergencyAlert() {
    alert("هشدار اورژانسی: وضعیت بیمار بحرانی است!");
  }
  <script src="app.js" async></script>
  const bcrypt = require('bcrypt');
  const saltRounds = 10;
  const myPlaintextPassword = 'password123';
  
  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // ذخیره هش به جای رمز عبور واقعی
  });
  function showEmergencyNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('emergency-notification');
    notification.textContent = message;
    document.body.appendChild(notification);
  
    setTimeout(() => {
      notification.remove();
    }, 5000);  // حذف نوتیفیکیشن بعد از 5 ثانیه
  }
  
  // نمایش نوتیفیکیشن اورژانسی (نمونه)
  showEmergencyNotification('هشدار: سکته قلبی! بلافاصله به اورژانس اطلاع دهید.');
  // فایل: js/modules/health-monitoring.js

export function simulateVitalSigns(updateUI) {
    // هر 5 ثانیه یک‌بار داده تصادفی تولید می‌کنه و به UI می‌فرسته
    setInterval(() => {
      const vitals = {
        heartRate: Math.floor(Math.random() * 40) + 60,      // 60-100
        bloodPressure: `${Math.floor(Math.random() * 40) + 90}/${Math.floor(Math.random() * 30) + 60}`, // مثل 120/80
        temperature: (Math.random() * 1.5 + 36).toFixed(1),   // حدود 36-37.5
      };
  
      updateUI(vitals);
    }, 5000);
  }
  