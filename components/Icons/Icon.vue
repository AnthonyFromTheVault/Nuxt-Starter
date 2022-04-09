<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :viewBox="`0 0 512 512`"
    :aria-labelledby="icon"
    role="presentation"
    :class="`icon icon__${icon} icon__${size}`"
  >
    <title :id="icon" lang="en">{{ icon }} icon</title>
    <component :is="IconComponent" :fill="color" />
  </svg>
</template>

<script>
// Import Icons
import Close from "./Close";
import Search from "./Search";
import FilterIcon from "./Filter";
import Refresh from "./Refresh";

export default {
  props: {
    icon: {
      type: String,
      default: "close",
    },
    size: {
      type: [Number, String],
      default: 18,
    },
    color: {
      type: String,
      default: "currentColor",
    },
  },
  components: { Refresh, Close, FilterIcon, Search },
  computed: {
    IconLabel() {
      return this.icon.toLowerCase();
    },
    IconComponent() {
      switch (this.icon.toLowerCase()) {
        case "refresh":
          return "Refresh";
          break;
        case "close":
          return "Close";
          break;
        case "filtering":
          return "FilterIcon";
          break;
        case "search":
          return "Search";
          break;
      }
    },
  },
};
</script>
