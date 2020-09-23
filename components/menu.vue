<template>
  <div class="menu__container">
    <nav class="menu">
      <nuxt-link to="/" class="menu__link">Главная</nuxt-link>
      <nuxt-link to="/services" class="menu__link">Услуги</nuxt-link>
      <nuxt-link to="/portfolio" class="menu__link">Наши работы</nuxt-link>
      <nuxt-link to="/contacts" class="menu__link">Контакты</nuxt-link>
    </nav>
    <nav v-if="IconIsclicked" class="mobile-menu" @click="closeMenu">
      <nuxt-link v-for="link in mobileMenu" :key="link.url" :to="link.url" class="mobile-menu__link">{{ link.text }}</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    IconIsclicked() {
      return this.$store.getters['mobile-menu/geticonIsClicked'];
    },
  },
  data() {
    return {
      mobileMenu: [
        {
          url: '/',
          text: 'Главная',
        },
        {
          url: '/services',
          text: 'Услуги',
        },
        {
          url: '/portfolio',
          text: 'Наши работы',
        },
        {
          url: '/contacts',
          text: 'Контакты',
        },
      ],
    };
  },
  methods: {
    closeMenu(event) {
      if (event.target.classList.contains('mobile-menu__link')) {
        this.$store.commit('mobile-menu/toggleIcon');
        this.$store.commit('mobile-menu/toggleMenu');
      }
    },
  },
};
</script>

<style scoped>
.menu__link {
  color: white;
  font-size: 1.1rem;
  font-weight: 200;
  text-decoration: none;
  margin-left: 20px;
  transition: 0.3s;
}
.menu__link:hover {
  opacity: 0.8;
}
.mobile-menu {
  display: none;
}

.mobile-menu__link {
  color: white;
  font-size: 1.1rem;
  font-weight: 200;
  text-decoration: none;
  text-transform: uppercase;
  margin: 10px auto;
}
.nuxt-link-exact-active {
  font-weight: 600;
}
@media screen and (max-width: 768px) {
  .menu {
    display: none;
  }
  .mobile-menu {
    background-color: #546cf7;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-bottom: 18px;
    padding-top: 60px;
  }
}
</style>
