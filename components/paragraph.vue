<template>
  <section class="paragraph">
    <content-box>
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
.paragraph__title {
  font-size: 24px;
  text-align: center;
  font-weight: 100;
}
.paragraph__content {
  margin-top: 40px;
}
</style>
