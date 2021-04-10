<template>
  <div class="content">
    <!-- <div v-for="n in 10" :key="n">
      <p :class="`box`">NUXT GSAP</p>
    </div> -->
  </div>
</template>

<script>
export default {
  mounted() {
    // this.$gsap
    // .timeline({
    //   scrollTrigger: {
    //     trigger: ".content",
    //     satrt: "center center",
    //     end: "bottom top",
    //     markers: true,
    //     scrub: true,
    //     pin: true,
    //   },
    // })
    // .from("box-7", { x: innerWidth * 1 })
    // .from("box-10", { x: innerWidth * -1 });
    // console.log(this)
    this.$gsap.to(document.querySelector(".ps"), {
      duration: 2,
      scrollTo: 1000,
    });

    this.$gsap.to(".box", {
      x: 500,
      y: 50,
      scale: 1.3,
      rotation: 90,
      ease: "Power1.easeInOut",
      scrollTrigger: {
        scroller: ".ps",
        trigger: ".content",
        pin: true,
        end: "bottom",
        scrub: true,
      },
    });
  },
};
</script>

<style lang="scss">
.page-index {
  color: #e2e8f0;
  background-color: #2f495e;
  min-height: 100vh;
}
.content {
  width: 100vw;
  min-height: 300vh;
}
.box {
  width: 100px;
  height: 100px;
  background-color: #00c58e;
}
</style>
