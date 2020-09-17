<template>
  <form class="popup__form" @submit.prevent="callMeasures">
    <h3 class="form__title">Вызвать замерщика</h3>
    <p class="form__subtitle">Мы перезвоним Вам в течение 10 минут</p>
    <input type="text" class="input" placeholder="Ваше имя*" maxlength="25" v-model="name" required />
    <input type="text" class="input" placeholder="Номер телефона*" maxlength="12" v-model="phone" required />
    <textarea class="textarea" placeholder="Вы можете оставить комментарий (что нужно замерять, район, и т.п. )"></textarea>
    <form-button />
  </form>
</template>

<script>
import Button from '@/components/ui/formButton';
export default {
  components: {
    'form-button': Button,
  },
  data() {
    return {
      name: '',
      phone: '',
    };
  },
  methods: {
    popupHandler() {
      this.$store.commit('popup/togglePopUpM');
    },
    callMeasures() {
      console.log(this.name, this.phone);
      this.popupHandler();
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
.input:focus,
.textarea:focus {
  outline: none;
}
.input::placeholder,
.textarea::placeholder {
  color: #949090;
  font-size: 12px;
}
.textarea {
  margin-top: 20px;
  padding: 15px;
  font-size: 18px;
  border: 1px solid #949090;
  border-radius: 3px;
}
</style>
