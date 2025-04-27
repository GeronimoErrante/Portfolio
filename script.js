// Animación de scroll suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
  
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)
  
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      })
    })
  })
  
  // Efecto de aparición al hacer scroll
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-element")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)
  
  // Observar todos los elementos que queremos animar
  document
    .querySelectorAll(".section-header, .skill-card, .project-card, .education, .contact-card")
    .forEach((element) => {
      element.classList.add("fade-in")
      observer.observe(element)
    })
  
  // Añadir estilos para la animación de aparición
  const style = document.createElement("style")
  style.textContent = `
    .fade-in {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in-element {
      opacity: 1;
      transform: translateY(0);
    }
  `
  document.head.appendChild(style)
  
  const roleTitle = document.querySelector(".role-title")
  const originalText = roleTitle.textContent
  roleTitle.textContent = ""
  
  let charIndex = 0
  function typeText() {
    if (charIndex < originalText.length) {
      roleTitle.textContent += originalText.charAt(charIndex)
      charIndex++
      setTimeout(typeText, 100)
    }
  }
  
  // Iniciar efecto de typing cuando la página cargue
  window.addEventListener("load", () => {
    setTimeout(typeText, 1000)
  })
  