<template>
  <section class="paragraph">
    <content-box class="parargraph__content-box">
      <h2 class="paragraph__title">{{ title }}</h2>
      <p class="paragraph__content">{{ text }}</p>
    </content-box>
  </section>
</template>

<script>
import Content from '@/components/content';
export default {
  components: {
    'content-box': Content,
  },
  props: {
    title: String,
    text: String,
  },
};
</script>

<style scoped>
.paragraph {
  font-size: 1rem;
  line-height: 1.5;
  color: #635e5e;
  padding: 40px 100px;
  text-align: justify;
}
.parargraph__content-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.paragraph__title {
  font-size: 34px;
  text-align: center;
  font-weight: 100;
  position: relative;
  display: inline;
  padding-bottom: 10px;
}
.paragraph__title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 80%;
  height: 1px;
  background-color: #635e5e;
}
.paragraph__content {
  margin-top: 40px;
}
</style>
