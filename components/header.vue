<template>
  <header class="header">
    <content-box>
      <div class="header__container">
        <img src="../static/logo_white.png" alt="Логотип" class="header__logo" />
        <header-menu />
      </div>
    </content-box>
  </header>
</template>

<script>
import Content from '@/components/content';
import Menu from '@/components/menu';
export default {
  components: {
    'content-box': Content,
    'header-menu': Menu,
  },
};
</script>

<style scoped>
.header {
  background-color: #546cf7;
  min-height: 120px;
  padding-top: 20px;
}
.header__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
