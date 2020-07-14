<template>
  <div class="numbers">
    <content-box class="numbers__content">
      <div class="number__container">
        <p class="number">12</p>
        <p class="number__text">Test</p>
      </div>
      <div class="number__container">
        <p class="number">12</p>
        <p class="number__text">Test</p>
      </div>
      <div class="number__container">
        <p class="number">12</p>
        <p class="number__text">Test</p>
      </div>
      <div class="number__container">
        <p class="number">12</p>
        <p class="number__text">Test</p>
      </div>
    </content-box>
  </div>
</template>

<script>
import Content from '@/components/content';
export default {
  components: {
    'content-box': Content,
  },
};
</script>

<style scoped>
.numbers {
  background-color: #6cd1eb;
  padding: 30px 0;
}
.numbers__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.number__container {
  text-align: center;
  color: white;
  width: calc(100% / 4);
}
.number {
  font-size: 64px;
}
.number__text {
  font-size: 24px;
}
</style>
