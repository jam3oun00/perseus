<template lang="pug">
#cursor: .cursor__circle
//-
  section
    .container
      .image-container(cursor-class="pointer")
        img(src="https://i.ibb.co/HDvyzVW/vase-2.jpg" alt="minimalist vase")
      //-
        .info
          a.text.underline(href="#" cursor-class="subtle") Custom Cursor
            button.button.icon-button(cursor-class="overlay")
              span.material-icons
              | more_horiz
</template>

<script>
export default {
  mounted() {
    const cursor = document.querySelector("#cursor");
    const cursorCircle = cursor.querySelector(".cursor__circle");

    const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
    const pos = { x: 0, y: 0 }; // cursor's coordinates
    const speed = 0.1; // between 0 and 1

    const updateCoordinates = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    document
      .querySelector(".ps")
      .addEventListener("mousemove", updateCoordinates);

    function getAngle(diffX, diffY) {
      return (Math.atan2(diffY, diffX) * 180) / Math.PI;
    }

    function getSqueeze(diffX, diffY) {
      const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
      const maxSqueeze = 0.15;
      const accelerator = 1500;
      return Math.min(distance / accelerator, maxSqueeze);
    }

    const updateCursor = () => {
      const diffX = Math.round(mouse.x - pos.x);
      const diffY = Math.round(mouse.y - pos.y);

      pos.x += diffX * speed;
      pos.y += diffY * speed;

      const angle = getAngle(diffX, diffY);
      const squeeze = getSqueeze(diffX, diffY);

      const scale = "scale(" + (1 + squeeze) + ", " + (1 - squeeze) + ")";
      const rotate = "rotate(" + angle + "deg)";
      const translate = "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";

      cursor.style.transform = translate;
      cursorCircle.style.transform = rotate + scale;
    };

    function loop() {
      updateCursor();
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    const cursorModifiers = document.querySelectorAll("[cursor-icon]");

    cursorModifiers.forEach((curosrModifier) => {
      curosrModifier.addEventListener("mouseenter", function () {
        const className = this.getAttribute("cursor-icon");
        cursor.classList.add(className);
      });

      curosrModifier.addEventListener("mouseleave", function () {
        const className = this.getAttribute("cursor-icon");
        cursor.classList.remove(className);
      });
    });
  },
};
</script>

<style lang="scss" scoped>
#cursor {
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  pointer-events: none;
  will-change: transform;
  mix-blend-mode: difference;
}

@media (hover: hover) and (pointer: fine) {
  .cursor__circle {
    width: 40px;
    height: 40px;
    margin-top: -50%;
    margin-left: -50%;
    border-radius: 50%;
    border: solid 1px rgba(227, 222, 193, 0.64);
    transition: opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1),
      background-color 0.3s cubic-bezier(0.25, 1, 0.5, 1),
      border-color 0.3s cubic-bezier(0.25, 1, 0.5, 1),
      width 0.3s cubic-bezier(0.25, 1, 0.5, 1),
      height 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  }

  #cursor.pointer .cursor__circle {
    width: 110px;
    height: 110px;
    background-color: var(--v-primary-base);
    border-color: var(--v-primary-base);
  }

  #cursor.pointer::after {
    content: "";
    position: absolute;
    left: -50%;
    top: -50%;
    width: 100%;
    height: 100%;
    background-image: url("https://svgshare.com/i/MzQ.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  #cursor.subtle .cursor__circle {
    opacity: 0.25;
    width: 48px;
    height: 48px;
    background-color: rgba(227, 222, 193, 0.08);
    border-color: transparent;
  }
}
</style>
