<template>
  <div class="contacts">
    <content-title class="contacts__title" :title="'Контакты'" />

    <div class="contacts__wrapper">
      <content-box class="contacts__content">
        <div class="contacts__item">
          <img class="contact-icon" src="../static/mail.png" alt="" />
          <p class="contacts__text">
            400081, г.Волгоград,<br />
            ул.Ангарская 69а
          </p>
        </div>
        <div class="contacts__item">
          <img class="contact-icon" src="../static/phone.png" alt="" />
          <p class="contacts__text">(8442) 98-36-73</p>
          <p class="contacts__text">8-917-338-36-73</p>
        </div>
        <div class="contacts__item">
          <img class="contact-icon" src="../static/email.png" alt="" />
          <p class="contacts__text">info@stvorka34.ru</p>
        </div>
        <div class="contacts__item">
          <img class="contact-icon" src="../static/social.png" alt="" />
          <!-- <p class="contacts__text" id="tlg">
            <img
              class="social-icon"
              src="../static/tlg.png"
              alt="Telegram"
            />@stvorka34office
          </p> -->
          <p class="contacts__text" id="inst">
            <img
              class="social-icon"
              src="../static/insta.png"
              alt="Instagram"
            />@okna_volgograd34
          </p>
          <p class="contacts__text" id="wa">
            <img
              class="social-icon"
              src="../static/wa.png"
              alt="WhatsApp"
            />89173383673
          </p>
          <p class="contacts__text" id="viber">
            <img
              class="social-icon"
              src="../static/viber.png"
              alt="Viber"
            />89173383673
          </p>
        </div>
      </content-box>
    </div>
    <ya-map />
  </div>
</template>

<script>
import Content from '@/components/content';
import ContentTitle from '@/components/content-title';
import Map from '@/components/map';
export default {
  components: {
    'content-box': Content,
    'content-title': ContentTitle,
    'ya-map': Map,
  },
  head() {
    return {
      title: 'Створка.Балконы || Контакты',
    };
  },
};
</script>

<style scoped>
.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}
.contacts__content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: space-between;
}

.contacts__wrapper {
  margin-top: 50px;
  padding-bottom: 50px;
  width: 100%;
}
.contact-icon {
  height: 132px;
}
.contacts__title {
  margin: 0 auto;
  text-align: center;
}
.contacts__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}

.contacts__text {
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #635e5e;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.social-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
@media screen and (max-width: 860px) {
  .contact-icon {
    height: 120px;
  }
  .contacts__text {
    font-size: 1rem;
  }
}
@media screen and (max-width: 700px) {
  .contacts__content {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 425px) {
  .contacts__content {
    grid-template-columns: 1fr;
  }
}
</style>
