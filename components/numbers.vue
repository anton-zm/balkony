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
        { number: '12', text: 'лет' },
        { number: '14564', text: 'кв.м' },
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
</style>
