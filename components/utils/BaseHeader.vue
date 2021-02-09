<template>
  <v-card dark flat tile class="main-header d-flex justify-center align-center">
    <!--  -->
    <base-navbar :inverted-nav="invertedNav" />
    <!--  -->
    <div class="left-background secondary"></div>
    <div class="header-content">
      <div class="header-vector-img">
        <img src="header-vectore-img.svg">
        <div class="big-title">hello there</div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    invertedNav: Boolean,
  },
};
</script>

<style lang="scss">
.main-header {
  background-image: url(~static/header-background.jpg);
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  position: relative;

  .left-background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 50%;
    z-index: 0;
  }

  .header-content {
    position: relative;
    z-index: 1;

    .header-vector-img {
      img{
        height: 400px;
      }
    }
  }
}
</style>
