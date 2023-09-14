export function scrollToTop(): void {
  if (window) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
