function updateScrollbarVisibility() {
  const element = document.getElementById('scrollable-contents') as HTMLElement;
  if (element.classList.contains("simplebar-scrollable-y")) {
    element.classList.remove("hide-scrollbar");
  } else {
    element.classList.add("hide-scrollbar");
  }
}

window.addEventListener('load', updateScrollbarVisibility);
window.addEventListener('resize', updateScrollbarVisibility);
