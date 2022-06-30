let progress = document.querySelectorAll(".progress__item");

function progressBar(node, animationSpeed = 1500) {
   for (let i = 0; node.length > i; i++) {
      const item = node[i];
      const bar = item.querySelector(".progress__line");
      const tooltips = item.querySelector(".progress-line__tooltips");

      bar.style.width = 0;
      bar.style.transition = `width ${animationSpeed}ms ease-in 0s`;
      setTimeout(() => {
         bar.style.width = item.dataset.progressValue;
      }, 100);
      tooltips.textContent = item.dataset.progressValue;
      setTimeout(() => {
         tooltips.classList.add("_show");
         bar.style.removeProperty("transition");
      }, animationSpeed + 500)
   }
}

progressBar(progress);