<template>
  <section class="action">
    <content-box class="action__container">
      <h2 class="action__title">{{ title }}</h2>
      <line-decor />
      <p class="action__subtitle">{{ subtitle }}</p>
      <btn class="action__btn" :btnText="btnText" @btnClick="$emit('btnClick')" />
    </content-box>
  </section>
</template>

<script>
import Content from '@/components/content';
import Line from '@/components/line';
import Btn from '@/components/ui/button';

export default {
  props: ['title', 'subtitle', 'btnText', 'link'],
  components: {
    'content-box': Content,
    'line-decor': Line,
    btn: Btn,
  },
};
</script>

<style scoped>
.action {
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 0;
}
.action__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.action__title {
  font-size: 42px;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  color: white;
  text-align: center;
}
.action__subtitle {
  font-size: 22px;
  font-weight: 200;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  margin-top: 20px;
  color: white;
}
.action__btn {
  margin-top: 40px;
}
@media screen and (max-width: 790px) {
  .action__title {
    font-size: 32px;
  }
}
@media screen and (max-width: 610px) {
  .action__title {
    font-size: 28px;
  }
  .action__subtitle {
    font-size: 18px;
  }
}
@media screen and (max-width: 425px) {
  .action__title {
    font-size: 22px;
  }
  .action__subtitle {
    font-size: 16px;
  }
}
</style>
