<template>
  <div class="promo">
    <h2 class="promo__title">Всем пенсионерам - скидки!</h2>
    <line-decor />
    <p class="promo__subtitle">Мы ценим Ваши заслуги!</p>
  </div>
</template>

<script>
import Line from '@/components/line';
export default {
  components: {
    'line-decor': Line,
  },
};
</script>

<style scoped>
.promo {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('../static/money.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 0;
  color: white;
}
.promo__title {
  font-size: 42px;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
}
.promo__subtitle {
  font-size: 22px;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 20px;
}
</style>
