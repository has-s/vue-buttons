<template>
  <div class="slide-menu">
    <div class="arrow left" @click="() => scroll(-1)">
      <i class="fas fa-chevron-left"></i>
    </div>
    <div class="card-container" ref="container">
      <slide-card v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
    <div class="arrow right" @click="() => scroll(1)">
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
</template>

<script>
import SlideCard from './SlideCard.vue';

export default {
  components: {
    SlideCard,
  },
  props: {
    cards: {
      type: Array,
      required: true,
    },
    visibleCards: {
      type: Number,
      default: 3,
    },
    scrollStep: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    scroll(direction) {
      const container = this.$refs.container;
      const scrollStep = direction * this.scrollStep;
      container.scrollLeft += scrollStep * container.offsetWidth;
    },
  },
};
</script>

<style lang="less">
.slide-menu {
  display: flex;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
}

.arrow {
  cursor: pointer;
  font-size: 24px;
  margin: 0 10px;
}

.card-container {
  display: flex;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  scroll-behavior: smooth;
}

.card-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

</style>