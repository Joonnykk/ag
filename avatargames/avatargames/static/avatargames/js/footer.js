export const questionBounced = () => {
  const block = document.querySelector('[area="footer-question"]');
  let item;
  if (block) {
    item = block.querySelector(".question");
    document.addEventListener("scroll", () => {
      if (item.getBoundingClientRect().top <= window.innerHeight / 2) {
        item.classList.add("bounce-top");
      } else {
        if (item.classList.contains("bounce-top")) {
          item.classList.remove("bounce-top");
        }
      }
    });
  }
};
