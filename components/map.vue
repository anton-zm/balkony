<template>
  <div class="contacts__map-container">
    <div v-if="overlay" class="map__overlay" @click="overlayToggler"></div>
    <script
      type="text/javascript"
      charset="utf-8"
      async
      src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9b0c838fc9effbe8aec1af35eae45eaf3b9309f3734b9a6b8716d256728caf36&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"
    ></script>
  </div>
</template>

<script>
export default {
  methods: {
    overlayToggler() {
      this.overlay = !this.overlay;
    },
  },
  data() {
    return {
      overlay: true,
    };
  },
};
</script>

<style scoped>
.contacts__map-container {
  position: relative;
  width: 100%;
  height: 400px;
}
.map__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  cursor: pointer;
}
</style>
