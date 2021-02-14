<template>
  <footer class="footer">
    <img src="~/static/logo_white.png" alt="Логотип" class="footer__logo" />
    <line-decor class="footer__line" />
    <div class="footer__social">
      <a href="https://www.instagram.com/okna_volgograd34/" class="footer__social-link"><img src="../static/insta.png" alt="Instagram" class="footer__social-img"/></a>
      <a href="https://t.me/stvorka34" class="footer__social-link"><img src="../static/tlg.png" alt="Telegram" class="footer__social-img"/></a>
      <a href="https://vk.com/stvorka34" class="footer__social-link"><img src="../static/vk.png" alt="VK" class="footer__social-img"/></a>
      <a href="http://wa.me/+79173383673" class="footer__social-link"><img src="../static/wa.png" alt="WhatsApp" class="footer__social-img"/></a>
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
  margin: 0 5px;
}
.footer__line {
  margin-top: 40px;
}
@media screen and (max-width: 768px) {
  .footer__logo {
    width: 125px;
  }
}
</style>
