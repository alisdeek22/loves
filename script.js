// ========== الثلج المتساقط ==========
    function createSnowflake() {
      const container = document.getElementById('snow-container');
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❄';
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.fontSize = (10 + Math.random() * 20) + 'px';
      snowflake.style.animationDuration = (4 + Math.random() * 6) + 's';
      container.appendChild(snowflake);
      setTimeout(() => snowflake.remove(), 10000);
    }
    setInterval(createSnowflake, 200);
    for (let i = 0; i < 30; i++) setTimeout(createSnowflake, i * 100);

    // ========== التنقل بين الصفحات ==========
    function goToPage(pageId) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.getElementById(pageId).classList.add('active');
      
      if (pageId === 'page-ending') {
        animateEnding();
      }
    }

    // ========== صفحة الباسورد ==========
    function checkPassword() {
      const password = document.getElementById('password').value.trim();
      if (password === '3362') {
        goToPage('page-letter');
      } else {
        document.getElementById('error-msg').style.display = 'block';
        setTimeout(() => {
          document.getElementById('error-msg').style.display = 'none';
        }, 2000);
      }
    }

    document.getElementById('password').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') checkPassword();
    });

    // ========== صفحة الرسالة ==========
    function showLetter() {
      document.getElementById('flower-section').style.display = 'none';
      document.getElementById('letter-box').style.display = 'block';
    }

    // ========== صفحة الذكريات ==========
    const images = [
      'https://i.ibb.co/DfK58MRM/Whats-App-Image-2025-12-06-at-20-45-05-ffec2ac0.jpg',
      'https://i.ibb.co/b5rb39Pw/IMG-20251206-WA0040.jpg',
      'https://i.ibb.co/wrMYjm6f/IMG-20251206-WA0042.jpg',
      'https://i.ibb.co/606GmhhJ/IMG-20251206-WA0045.jpg'
    ];
    let currentSlide = 0;

    // إنشاء النقاط
    const dotsContainer = document.getElementById('carousel-dots');
    images.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.onclick = () => goToSlide(i);
      dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
      currentSlide = index;
      document.getElementById('carousel-img').src = images[index];
      document.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === index);
      });
    }

    setInterval(() => {
      currentSlide = (currentSlide + 1) % images.length;
      goToSlide(currentSlide);
    }, 3000);

    // التايمر
    function updateTimer() {
      const startDate = new Date('2025-07-20T00:00:00');
      const now = new Date();
      const diff = now - startDate;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      document.getElementById('love-timer').innerHTML = 
        `🎀 We've been together for ${days} days, ${hours} hrs, ${minutes} mins, and ${seconds} secs 🎀`;
    }
    setInterval(updateTimer, 1000);
    updateTimer();

    // ========== صفحة النهاية ==========
    function animateEnding() {
      setTimeout(() => document.getElementById('line1').classList.add('show'), 500);
      setTimeout(() => document.getElementById('line2').classList.add('show'), 1500);
      setTimeout(() => document.getElementById('line3').classList.add('show'), 2500);
      setTimeout(() => document.getElementById('line4').classList.add('show'), 3500);
      setTimeout(() => document.getElementById('replay-btn').classList.add('show'), 4500);
      setTimeout(() => document.getElementById('designer-footer').classList.add('show'), 5000);
    }

    function replay() {
      // إعادة تعيين صفحة النهاية
      ['line1', 'line2', 'line3', 'line4', 'replay-btn', 'designer-footer'].forEach(id => {
        document.getElementById(id).classList.remove('show');
      });
      // إعادة تعيين صفحة الرسالة
      document.getElementById('flower-section').style.display = 'block';
      document.getElementById('letter-box').style.display = 'none';
      // الرجوع للصفحة الأولى
      document.getElementById('password').value = '';
      goToPage('page-password');
    }