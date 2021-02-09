import Vue from "vue";
import { OverlayScrollbarsPlugin } from "overlayscrollbars-vue";
import "overlayscrollbars/css/OverlayScrollbars.min.css";
let options = {
  className: "os-theme-dark",
  nativeScrollbarsOverlaid: {
    showNativeScrollbars: false,
    initialize: false,
  },
  scrollbars: {
    visibility: "visible",
    autoHide: "move",
  },
  overflowBehavior: {
    x: "scroll",
    y: "scroll",
  },
};

// Including this way because applying global options to OverlayScrollbars
// on first build causes an error with server side rendering due to document is undefined.
// Vue.use(OverlayScrollbarsPlugin, options);

if (process.server) {
  Vue.use(OverlayScrollbarsPlugin);
} else {
  Vue.use(OverlayScrollbarsPlugin, options);
}
