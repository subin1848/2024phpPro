document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('main-header');
    var lastScrollTop = 0;
    var delta = 5;
  
    window.addEventListener('scroll', function() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (Math.abs(lastScrollTop - scrollTop) <= delta) return;
  
      if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
        // 스크롤 다운
        header.classList.add('hidden');
      } else {
        // 스크롤 업
        header.classList.remove('hidden');
      }
  
      lastScrollTop = scrollTop;
    });
  });
  