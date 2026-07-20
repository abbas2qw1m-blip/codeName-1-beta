     function toggleMenu() {
            const hamburger = document.querySelector('.hamburger');
            const nav = document.querySelector('nav');
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        }

        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                const hamburger = document.querySelector('.hamburger');
                const nav = document.querySelector('nav');
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });

        // 

//          // ============================================
//   // Smooth Scroll يدوي (نفس فكرة عمل Lenis من الداخل)
//   // ============================================
 
//   const content = document.getElementById('smooth-content');
 
//   let currentScroll = 0;   // الموقع الحالي (المعروض فعليًا)
//   let targetScroll = 0;    // الموقع المطلوب الوصول له (حسب لف الماوس)
//   const ease = 0.08;       // كل ما قل الرقم صار السكرول "أبطأ وأنعم" (جرب 0.05 - 0.15)
 
//   // أقصى مسافة سكرول = ارتفاع المحتوى - ارتفاع الشاشة
//   function getMaxScroll() {
//     return content.scrollHeight - window.innerHeight;
//   }
 
//   // عند لف عجلة الماوس، نزيد/ننقص targetScroll بدل ما نخلي المتصفح يسكرول فعليًا
// //   window.addEventListener('wheel', (e) => {
// //     e.preventDefault();
// //     targetScroll += e.deltaY;
// //     targetScroll = Math.max(0, Math.min(targetScroll, getMaxScroll()));
// //   }, { passive: false });
 
//   // حلقة الأنيميشن: كل فريم نقرّب currentScroll من targetScroll تدريجيًا (lerp)
//   function animate() {
//     currentScroll += (targetScroll - currentScroll) * ease;
 
//     // لو الفرق صغير جدًا نخليه يساوي الهدف تمامًا (يمنع اهتزاز لانهائي)
//     if (Math.abs(targetScroll - currentScroll) < 0.05) {
//       currentScroll = targetScroll;
//     }
 
//     content.style.transform = `translateY(${-currentScroll}px)`;
 
//     requestAnimationFrame(animate);
//   }
 
//   animate();
 
//   // دعم شاشات اللمس (تراكباد/موبايل) - سكرول عادي بس نحدث targetScroll
//   let touchStartY = 0;
//   window.addEventListener('touchstart', (e) => {
//     touchStartY = e.touches[0].clientY;
//   }, { passive: true });
 
//   window.addEventListener('touchmove', (e) => {
//     const touchY = e.touches[0].clientY;
//     const delta = touchStartY - touchY;
//     targetScroll += delta * 1.5;
//     targetScroll = Math.max(0, Math.min(targetScroll, getMaxScroll()));
//     touchStartY = touchY;
//   }, { passive: true });