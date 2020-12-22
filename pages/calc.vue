<template>
  <div class="main">
    <text-content :title="calc.title" :text="calc.text"></text-content>
    <content-box>
      <p class="calc__action">
        Получите расчёт своего заказа в течение 10 минут!
      </p>
      <form class="calc__form" @submit.prevent="calcOrder">
        <input
          @input="validationName"
          type="text"
          class="calc__input"
          pattern="[а-яА-ЯёЁ ]{2,25}"
          placeholder="Ваше имя*"
          required
          maxlength="25"
          id="name-input-callme"
          v-model="name"
        />
        <p class="input__error" v-if="nameError">{{ nameErrorText }}</p>
        <input
          @input="validationContact"
          type="text"
          class="calc__input"
          pattern="[a-z@\.\-_0-9]{6,20}"
          placeholder="Почта или номер телефона*"
          required
          maxlength="25"
          id="contact-input-callme"
          v-model="contact"
        />
        <p class="input__error" v-if="contactError">{{ contactErrorText }}</p>
        <textarea
          pattern="[а-яА-ЯёЁ0-9\.,\(\)\ a-zA_Z\*\-\+]*"
          placeholder="Опишите своими словами, что нужно рассчитать"
          class="calc__input calc__input_textarea"
          required
          v-model="message"
        ></textarea>
        <!-- <input class="select-file" type="file" multiple="true" accept="image/*,application/pdf,application/msword" /> -->
        <button class="calc__button" type="submit">Отправить</button>
      </form>
    </content-box>
    <div class="calc__overlay" v-if="submit">
      <div class="postSubmitMessage" v-html="postSubmitMessage"></div>
    </div>
  </div>
</template>

<script>
import Content from '@/components/content';
import Paragraph from '@/components/paragraph';

import axios from 'axios';
export default {
  components: {
    'content-box': Content,
    'text-content': Paragraph,
  },
  methods: {
    validationName() {
      const name = document.querySelector('#name-input-callme');
      if (!name.validity.valid) {
        this.nameError = true;
      } else {
        this.nameError = false;
      }
    },
    validationContact() {
      const contact = document.querySelector('#contact-input-callme');
      if (!contact.validity.valid) {
        this.contactError = true;
      } else {
        this.contactError = false;
      }
    },
    calcOrder() {
      return axios
        .post('https://api.a100a.ru/balcony/calc', {
          name: this.name,
          contact: this.contact,
          message: this.message,
        })
        .then((res) => {
          if (res.status < 400) {
            this.showPopup(true);
            return;
          }
          return Promise.reject(new Error());
        })
        .catch((err) => {
          console.log(err);
          this.showPopup(false);
        });
    },
    clearForm() {
      const form = document.querySelector('.calc__form');
      form.reset();
    },
    showPopup(res) {
      this.submit = true;

      if (!res) {
        this.postSubmitMessage = 'Что-то пошло не так. Попробуйте, пожалуйста, ещё раз.';
      }
      setTimeout(() => {
        this.submit = false;
      }, 5000);
    },
  },
  head() {
    return {
      title: 'Створка.Балконы || Расчет стоимости',
    };
  },
  data() {
    return {
      submit: false,
      postSubmitMessage: `Спасибо за обращение в нашу компанию!<br> Мы уже занялись Вашим заказом!`,
      name: '',
      contact: '',
      message: '',
      nameError: false,
      nameErrorText: 'Только русские буквы. От 2 до 25 символов.',
      contactError: false,
      contactErrorText: 'Это пока не похоже ни на почту ни на номер телефона',
      calc: {
        title: 'Расчёт стоимости',
        text: `Для того, чтобы рассчитать стоимость Вашего заказа, воспользуйтесь специальной формой ниже. Заполните контактные поля и введите информацию
        о заказе в свободной форме (своими словами). После этого наши специалисты отправят Вам расчет либо свяжутся с Вами для уточнения деталей.`,
      },
    };
  },
};
</script>

<style scoped>
.calc__action {
  color: red;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto;
}
.calc__form {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 60px auto;
}
.calc__input {
  outline: none;
  margin-top: 24px;
  height: 30px;
  padding: 15px;
  font-size: 1rem;
  color: #635e5e;
}
.calc__input_textarea {
  height: 150px;
}
/* .select-file {
  margin-top: 10px;
} */
.calc__button {
  margin-top: 30px;
  outline: none;
  background-color: orange;
  color: white;
  font-size: 18px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.calc__button:hover {
  background-color: #eb9839;
}
.input__error {
  color: red;
  font-size: 12px;
  margin-top: 6px;
}
.calc__overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.postSubmitMessage {
  max-width: 40%;
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  font-size: 18px;
  color: #635e5e;
  line-height: 2;
}
@media screen and (max-width: 525px) {
  .calc__form {
    width: 90%;
  }
  .postSubmitMessage {
    max-width: 80%;
    font-size: 16px;

    line-height: 1.2;
  }
}
</style>
