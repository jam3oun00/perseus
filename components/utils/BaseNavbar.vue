<template lang="pug">
  v-app-bar(fixed flat :class="{'transparent': !invertedNav}" :dark="!invertedNav")
    img(src="logo.svg" height="40")
    v-spacer
    .nav-link element
    .nav-link element
    .nav-link element
</template>

<script>
export default {
  props: {
    invertedNav: Boolean,
  },
};
</script>

<style lang="scss">
.inverted-nav {
  // background-color: transparent !important;
}
.nav-link {
  cursor: pointer;
  margin: 0 15px;
  transition: color 0.2s;
  &:hover {
    color: var(--v-primary-base);
  }
}
</style>
