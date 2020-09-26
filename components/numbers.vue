<template>
  <div class="numbers">
    <content-box class="numbers__content">
      <div class="number__container" v-for="(item, index) in numbers" :key="index">
        <p class="number">{{ item.number }}</p>
        <p class="number__text">{{ item.text }}</p>
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
  data() {
    return {
      numbers: [
        { number: '12', text: 'лет на рынке' },
        { number: '14564', text: 'кв.м установлено' },
        { number: '2478', text: 'клиентов' },
        { number: '5', text: 'лет гарантии' },
      ],
    };
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
@media screen and (max-width: 1280px) {
  .number {
    font-size: 48px;
  }
  .number__text {
    font-size: 18px;
  }
}
@media screen and (max-width: 768px) {
  .numbers__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    align-items: center;
  }
  .number__container {
    width: 100%;
  }
}
@media screen and (max-width: 425px) {
  .numbers__content {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .number__container {
    width: 100%;
  }
}
</style>
