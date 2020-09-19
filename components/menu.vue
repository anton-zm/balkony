<template>
  <div class="menu__container">
    <nav class="menu">
      <nuxt-link to="/" class="menu__link">Главная</nuxt-link>
      <nuxt-link to="/" class="menu__link">Услуги</nuxt-link>
      <nuxt-link to="/portfolio" class="menu__link">Наши работы</nuxt-link>
      <nuxt-link to="/promo" class="menu__link">АКЦИИ</nuxt-link>
      <nuxt-link to="/contacts" class="menu__link">Контакты</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
}
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
@media screen and (max-width: 928px) {
  .menu {
    display: none;
  }
}
</style>
