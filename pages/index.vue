<template>
  <div class="page-container">
    <h1>Hello World!</h1>
    <p>This is a Nuxt-powered static website.</p>
  </div>
</template>

<script>
import { scrollToTop } from "@/helpers";

export default {
  scrollToTop: true,
  components: { Link },
  mounted() {
    scrollToTop();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_imports.scss";

svg {
}

.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
