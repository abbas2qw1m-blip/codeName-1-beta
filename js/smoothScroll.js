/* ============================================
   Smooth Scroll ثقيل ومطاطي - متوافق مع AOS
   ============================================
   الفكرة: ما نمنع سكرول المتصفح الحقيقي أبدًا.
   بس نلف المحتوى بعنصر position:fixed ونحركه بـ transform
   بمعادلة lerp، بينما window.scrollY يضل يتحدث طبيعي
   (وبالتالي AOS تشتغل عادي لأنها تعتمد على window.scrollY).
*/

(function () {
  // ننتظر تحميل الصفحة كاملة عشان نلف كل المحتوى
  window.addEventListener('DOMContentLoaded', () => {

    // 1) نلف كل محتوى body (ما عدا السكربتات) بعنصر ثابت
    const wrapper = document.createElement('div');
    wrapper.id = 'smooth-wrapper';

    // ننقل كل عناصر body الحالية جوا الـ wrapper
    const children = Array.from(document.body.childNodes);
    children.forEach(node => wrapper.appendChild(node));
    document.body.appendChild(wrapper);

    // 2) نضيف "spacer" فاضي يعطي body الارتفاع الصحيح
    //    عشان شريط سكرول المتصفح يشتغل طبيعي وكأن المحتوى موجود فعلاً بالتدفق العادي
    const spacer = document.createElement('div');
    spacer.id = 'smooth-spacer';
    document.body.appendChild(spacer);

    function updateSpacerHeight() {
      spacer.style.height = wrapper.scrollHeight + 'px';
    }
    updateSpacerHeight();

    // نحدث الارتفاع لو تغير حجم الصفحة أو تغير محتواها (صور تحملت متأخر مثلاً)
    window.addEventListener('resize', updateSpacerHeight);
    new ResizeObserver(updateSpacerHeight).observe(wrapper);

    // 3) حلقة الأنيميشن: نقرّب الموقع المعروض تدريجيًا من موقع السكرول الحقيقي
    let current = 0;
    const ease = 0.08; // قلل الرقم = سكرول أثقل وأنعم | كبّره = أسرع استجابة

    function raf() {
      const target = window.scrollY; // موقع السكرول الحقيقي (يتحدث طبيعي بالمتصفح)
      current += (target - current) * ease;

      if (Math.abs(target - current) < 0.05) {
        current = target;
      }

      wrapper.style.transform = `translateY(${-current}px)`;

      requestAnimationFrame(raf);
    }
    raf();

  });
})();