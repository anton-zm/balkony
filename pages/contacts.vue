<template>
  <div>
    <content-box class="contacts__content">
      <content-title :title="'Контакты'" />
      <div class="contacts__item">
        <img class="contact-icon" src="../static/mail.png" alt="" />
        <p class="contacts__text">400081, г.Волгоград, ул.Ангарская 69а</p>
      </div>
      <div class="contacts__item">
        <img class="contact-icon" src="../static/mail.png" alt="" />
        <p class="contacts__text">(8442) 98-36-73</p>
      </div>
      <div class="contacts__item">
        <img class="contact-icon" src="../static/mail.png" alt="" />
        <p class="contacts__text">info@stvorka34.ru</p>
      </div>
    </content-box>
    <script
      type="text/javascript"
      charset="utf-8"
      async
      src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9b0c838fc9effbe8aec1af35eae45eaf3b9309f3734b9a6b8716d256728caf36&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"
    ></script>
  </div>
</template>

<script>
import Content from '@/components/content';
import ContentTitle from '@/components/content-title';
export default {
  components: {
    'content-box': Content,
    'content-title': ContentTitle,
  },
};
</script>

<style scoped>
.contacts__content {
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
