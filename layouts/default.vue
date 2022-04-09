<template>
  <transition-group
    mode="out-in"
    tag="div"
    class="main-container"
    :class="bodyClass()"
  >
    <div :key="contentKey" class="main-content">
      <transition
        mode="out-in"
        enter-active-class="animate fadeIn"
        leave-active-class="animate fadeOut"
      >
        <nuxt />
      </transition>
    </div>
  </transition-group>
</template>

<script>
  import { scrollToTop } from '@/helpers'

  export default {
    data() {
      return {
        headerKey: 0,
        contentKey: 2
      }
    },
    components: {},
    methods: {
      bodyClass() {
        let routeClass = this.$route.name
        return routeClass
      }
    },
    computed: {
      currentRoute() {
        if (this.$route.name) {
          this.headerKey += 1
          this.contentKey += 1
        }
      },
      ifHomepage() {
        if (this.$route.name === 'index') {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/_imports.scss';

  // Layout styling located in /assets/main.scss

  .page-container__logo {
    position: fixed;
    margin-left: -10px;

    svg {
      transition: $a__ease;
      fill: $color__black--30;
    }

    &:hover {
      svg {
        fill: $color__blue;
      }
    }
  }
</style>
