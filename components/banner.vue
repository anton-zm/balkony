<template>
  <div class="banner">
    <div class="banner__container">
      <h1 class="title">Остекление балконов и&nbsp;лоджий в Волгограде</h1>
      <line-decor class="banner__line" />
      <h2 class="subtitle">Качественное выполнение всех типов работ, связанных с остеклением балконов или лоджий. Быстро. Профессионально.</h2>
    </div>
  </div>
</template>

<script>
import Content from '@/components/content';
import Line from '@/components/line';
export default {
  components: {
    'content-box': Content,
    'line-decor': Line,
  },
};
</script>

<style scoped>
.banner {
  background-image: url('../static/test.jpg');
  min-height: 70vh;
  background-attachment: fixed;
  background-size: cover;
  padding-top: 50px;
  padding-bottom: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  width: 50%;
  font-weight: 300;
  font-size: 48px;
  color: #dbe2eb;
  letter-spacing: 1px;
  text-align: center;
  margin: 0 auto;
}
.banner__line {
  margin: 30px auto;
}

.subtitle {
  font-weight: 300;
  font-size: 24px;
  color: #dbe2eb;
  word-spacing: 5px;
  width: 50%;
  text-align: center;
  margin: 30px auto 0;
}
</style>
