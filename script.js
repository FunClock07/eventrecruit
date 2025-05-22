document.addEventListener('DOMContentLoaded', function() {
  // Image Slider
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  if (slides.length > 0 && dots.length > 0) {
    let currentSlide = 0;
    
    function showSlide(n) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      currentSlide = (n + slides.length) % slides.length;
      
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    }
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto slide
    setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
          faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't already open
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Fullscreen Modal
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const fullscreenModal = document.getElementById('fullscreen-modal');
  const closeModal = document.getElementById('close-modal');
  const modalIframe = document.getElementById('modal-iframe');
  
  if (fullscreenBtn && fullscreenModal && closeModal && modalIframe) {
    fullscreenBtn.addEventListener('click', function() {
      const iframeSrc = document.querySelector('.canva-embed iframe').getAttribute('src');
      modalIframe.setAttribute('src', iframeSrc);
      fullscreenModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    closeModal.addEventListener('click', function() {
      fullscreenModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  
  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    });
    
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});