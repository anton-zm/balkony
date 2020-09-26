<template>
  <header class="header">
    <content-box>
      <div class="header__container">
        <img src="../static/logo_white.png" alt="Логотип" class="header__logo" @click="logoClick" />
        <header-menu />
        <div :class="[isOpened ? 'mobile-menu-icon' : 'close-mobile-menu', 'menu-icon']" @click="iconToggler"></div>
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
  computed: {
    isOpened() {
      return this.$store.getters['mobile-menu/getMenuShown'];
    },
  },
  data() {
    return {};
  },
  methods: {
    iconToggler() {
      this.$store.commit('mobile-menu/toggleIcon');
      this.$store.commit('mobile-menu/toggleMenu');
    },
    logoClick() {
      this.$router.push('/');
    },
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
.header__logo {
  cursor: pointer;
}
.menu-icon {
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 3;
  background-size: contain;
  display: none;
  background-color: transparent;
  width: 20px;
  height: 20px;
}
.mobile-menu-icon {
  background-image: url('../static/mobile-menu.png');
}
.close-mobile-menu {
  background-image: url('../static/mobile-close.png');
}
@media screen and (max-width: 768px) {
  .menu-icon {
    display: block;
  }
  .header__logo {
    width: 125px;
  }
}
</style>
