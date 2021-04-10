<template>
  <v-app color="wall">
    <PerfectScrollbar>
      <base-cursor />
      <base-header />
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
    </PerfectScrollbar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
