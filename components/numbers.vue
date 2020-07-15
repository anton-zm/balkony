<template>
  <div class="numbers">
    <content-box class="numbers__content">
      <div class="number__container" v-for="item in numbers" :key="item._id">
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
        { _id: '1', number: '12', text: 'лет' },
        { _id: '2', number: '1000', text: 'кв.м' },
        { _id: '3', number: '10000', text: 'клиентов' },
        { _id: '4', number: '5', text: 'лет гарантии' },
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
