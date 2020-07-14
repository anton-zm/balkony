<template>
  <section class="paragraph">
    <content-box>
      <slot></slot>
    </content-box>
  </section>
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
.paragraph {
  font-size: 1rem;
  line-height: 1.5;
  color: #635e5e;
  padding: 40px 100px;
  text-align: justify;
}
</style>
