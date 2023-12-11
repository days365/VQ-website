function updateScrollbarVisibility() {
  const element = document.getElementById('scroll-bar-contents') as HTMLElement;
  if (element.classList.contains("simplebar-scrollable-y")) {
    element.classList.remove("hide");
  } else {
    element.classList.add("hide");
  }
}

window.addEventListener('load', updateScrollbarVisibility);
window.addEventListener('resize', updateScrollbarVisibility);
