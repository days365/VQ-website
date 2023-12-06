function updateScrollbarVisibility() {
  const element = document.getElementById('scroll-bar-contents') as HTMLElement;

  if (element) {
    if (element.scrollHeight <= element.clientHeight) {
      element.classList.add("hide");
    } else {
      element.classList.add("scroll-bar");
      element.classList.remove("hide");
    }
  }
}

window.addEventListener('load', updateScrollbarVisibility);
window.addEventListener('resize', updateScrollbarVisibility);
