(function () {
  function initReveal() {
    var items = document.querySelectorAll(".reveal-item, .cv-entry, .cv-block");
    if (!items.length) return;

    items.forEach(function (el) {
      if (!el.classList.contains("reveal-item")) {
        el.classList.add("reveal-item");
      }
    });

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal-item").forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 6, 5) * 0.06 + "s";
      observer.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReveal);
  } else {
    initReveal();
  }
})();
