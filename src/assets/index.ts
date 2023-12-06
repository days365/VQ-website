function updateScrollbarVisibility() {
  const element = document.getElementById('scroll-bar-contents') as HTMLElement;

  if (element) {
    if (element.scrollHeight <= element.clientHeight) {
      element.classList.add("empty-scroll-bar");
      element.classList.remove("scroll-bar");
    } else {
      element.classList.add("scroll-bar");
      element.classList.remove("empty-scroll-bar");
    }
  }
}

window.addEventListener('load', updateScrollbarVisibility);
window.addEventListener('resize', updateScrollbarVisibility);
