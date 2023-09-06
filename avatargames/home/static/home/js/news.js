import { gsap } from "gsap";

function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}

export function newsRowTop() {
  const boxes = gsap.utils.toArray('[area="newsRowTop"]'),
    loop = horizontalLoop(boxes, {
      speed: 0.6,
      paused: false,
      repeat: -1,
    });

  loop.play();
}

export function newsRowBottom() {
  const boxes = gsap.utils.toArray('[area="newsRowBottom"]'),
    loop = horizontalLoop(boxes, {
      speed: 0.8,
      paused: false,
      repeat: -1,
    });

  loop.play();
}

export const marqueeAnimateRow = (blocksRow, speed) => {
  const block = document.querySelector(blocksRow);
  const wrapper = block.parentNode;
  const container = wrapper.parentNode;
  let blocks = Array.from(document.querySelectorAll(blocksRow));

  // Клонируем блоки, чтобы создать эффект бесконечной бегущей строки
  for (let i = 0; i < blocks.length; i++) {
    const blockClone = blocks[i].cloneNode(true);
    wrapper.appendChild(blockClone);
  }

  // Функция для анимации бегущей строки
  function animateMarquee() {
    const firstBlock = wrapper.querySelector(blocksRow);
    const blockWidth = firstBlock.offsetWidth;
    const scrollAmount = 10 / speed; // Рассчитываем скорость прокрутки на каждый кадр (60 кадров в секунду)

    if (container.scrollLeft >= blockWidth) {
      container.scrollLeft -= blockWidth; // Сдвигаем контейнер назад на ширину одного блока
      wrapper.appendChild(firstBlock); // Перемещаем первый блок в конец

      blocks = Array.from(document.querySelectorAll(blocksRow)); // Обновляем список блоков
    } else {
      container.scrollLeft += scrollAmount; // Прокручиваем контейнер вправо на текущую скорость
    }

    requestAnimationFrame(animateMarquee);
  }

  animateMarquee();
};
