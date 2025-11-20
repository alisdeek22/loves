document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('openButton');
    const envelope = document.querySelector('.envelope');
    const card = document.querySelector('.card');
    const heartParticlesContainer = document.querySelector('.heart-particles-container');

    button.addEventListener('click', () => {
        // إضافة الكلاس 'open' للغلاف
        envelope.classList.add('open');
        
        // إخفاء الزر بعد الفتح
        button.classList.add('hidden');
        
        // إطلاق القلوب المتطايرة
        spawnHearts(50); // يطلق 15 قلب
    });

    envelope.addEventListener('click', () => {
        if (!envelope.classList.contains('open')) {
            button.click();
        }
    });

    // دالة لإنشاء قلوب نيون متطايرة
    function spawnHearts(count) {
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart-particle');
            
            // تحديد موقع عشوائي للقلب ليبدأ من حول الظرف
            const startX = envelope.offsetLeft + envelope.offsetWidth / 2 - 10;
            const startY = envelope.offsetTop + envelope.offsetHeight / 2 - 10;

            heart.style.left = `${startX + (Math.random() *450-20)}px`; // إزاحة بسيطة
            heart.style.top = `${startY + (Math.random() * 150 - 50)}px`;
            
            // تأخير عشوائي بسيط لكل قلب ليظهر بشكل متتابع
            heart.style.animationDelay = `${Math.random() * 0.8}s`; 
            
            heartParticlesContainer.appendChild(heart);
            
            // إزالة القلب بعد انتهاء حركته لتنظيف DOM
            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }
    }
});