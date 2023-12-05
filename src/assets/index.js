function updateScrollbarVisibility() {
  const element = document.getElementById('scroll_bar_contents');

  if (element) {
    if (element.scrollHeight <= element.clientHeight) {
      element.classList.remove("scroll_bar")
    } else {
      element.classList.add("scroll_bar")
    }
  }
}

window.addEventListener('load', updateScrollbarVisibility);
window.addEventListener('resize', updateScrollbarVisibility);
