<template>
  <v-app color="wall">
    <overlay-scrollbars
      ref="scrollbar"
      class="content__body"
      :options="options"
    >
      <base-header :inverted-nav="invertedNav" />
      <v-main class="wall">
        <!-- <v-switch
          v-model="$vuetify.theme.dark"
          hint="This toggles the global state of the Vuetify theme"
          inset
          label="Vuetify Theme Dark"
          persistent-hint
        /> -->
        <nuxt />
      </v-main>
    </overlay-scrollbars>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      options: {
        callbacks: {
          onScroll: () => this.scroll(),
        },
      },
      invertedNav: false,
    };
  },
  methods: {
    scroll() {
      const scrollInfo = this.$refs.scrollbar.osInstance().scroll();
      if (scrollInfo) {
        const scrollTop = scrollInfo.position.y;
        console.log(scrollTop);
        scrollTop > window.innerHeight / 3
          ? (this.invertedNav = true)
          : (this.invertedNav = false);
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
