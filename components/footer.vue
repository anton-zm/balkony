<template>
  <footer class="footer">
    <img src="../static/logo_white.png" alt="Логотип" class="footer__logo" />
    <line-decor />
    <div class="footer__social">
      <a href="https://www.instagram.com/okna_volgograd34/" class="footer__social-link"><img src="../static/tlg.png" alt="Instagram" class="footer__social-img"/></a>
      <a href="https://t.me/stvorka34" class="footer__social-link"><img src="../static/tlg.png" alt="Telegram" class="footer__social-img"/></a>
      <a href="" class="footer__social-link"><img src="../static/tlg.png" alt="VK" class="footer__social-img"/></a>
      <a href="" class="footer__social-link"><img src="../static/tlg.png" alt="Viber" class="footer__social-img"/></a>
      <a href="" class="footer__social-link"><img src="../static/tlg.png" alt="WhatsApp" class="footer__social-img"/></a>
    </div>
  </footer>
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
.footer {
  background-color: #535252;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer__social {
  margin-top: 50px;
}

.footer__social-img {
  width: 30px;
}
</style>
