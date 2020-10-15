<template>
  <form class="popup__form" @submit.prevent="callMeNow">
    <h3 class="form__title">Заказать звонок</h3>
    <p class="form__subtitle">Мы перезвоним Вам в течение 10 минут</p>
    <input @input="validation" id="name-input-callme" type="text" class="input" pattern="[а-яА-ЯёЁ ]{2,25}" placeholder="Ваше имя" maxlength="25" v-model="name" required />
    <p class="input__error" v-if="nameError">{{ nameErrorText }}</p>
    <input
      type="number"
      @input="validation"
      id="phone-input-callme"
      class="input"
      pattern="[0-9]{6,12}"
      placeholder="Номер телефона"
      minlength="6"
      maxlength="12"
      v-model="phone"
      required
    />
    <p class="input__error" v-if="phoneError">{{ phoneErrorText }}</p>
    <form-button />
  </form>
</template>

<script>
import axios from 'axios';
import Button from '@/components/ui/formButton';
export default {
  components: {
    'form-button': Button,
  },
  data() {
    return {
      name: '',
      phone: '',
      nameError: false,
      nameErrorText: 'Только русские буквы. От 2 до 25 символов.',
      phoneError: false,
      phoneErrorText: 'Только цифры. От 6 до 12 символов.',
    };
  },
  methods: {
    validation() {
      const name = document.querySelector('#name-input-callme');
      const phone = document.querySelector('#phone-input-callme');
      if (!name.validity.valid) {
        this.nameError = true;
      } else {
        this.nameError = false;
      }
      if (!phone.validity.valid) {
        this.phoneError = true;
      } else {
        this.phoneError = false;
      }
    },
    popupHandler() {
      this.$store.commit('popup/togglePopUp');
    },
    callMeNow() {
      return axios
        .post('https://api.a100a.ru/balcony/callme', {
          name: this.name,
          phone: this.phone,
        })
        .then(this.popupHandler());
    },
  },
};
</script>

<style scoped>
.popup__form {
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
}
.form__title {
  font-size: 32px;
  font-weight: 200;
  text-align: center;
  margin-bottom: 30px;
}
.form__subtitle {
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 30px;
}
.input {
  height: 30px;
  margin-top: 20px;
  padding: 15px;
  font-size: 18px;
  border: 1px solid #949090;
  border-radius: 3px;
}
.input:focus {
  outline: none;
}
.input::placeholder {
  color: #949090;
  font-size: 16px;
}
.input__error {
  color: red;
  font-size: 12px;
  margin-top: 6px;
}
</style>
