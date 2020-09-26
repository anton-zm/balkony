<template>
  <div class="main">
    <text-content :title="calc.title" :text="calc.text"></text-content>
    <content-box>
      <p class="calc__action">Получите расчёт своего заказа в течение 10 минут!</p>
      <form class="calc__form" @submit.prevent="test">
        <input type="text" class="calc__input" pattern="[а-яА-ЯёЁ]*" placeholder="Ваше имя*" required maxlength="25" />
        <input type="text" class="calc__input" pattern="[@a-zA-z0-9\-\(\)\ \.]*" placeholder="Почта или номер телефона*" required maxlength="25" />
        <textarea pattern="[а-яА-ЯёЁ0-9\.,\(\)\ a-zA_Z]*" placeholder="Опишите своими словами, что нужно рассчитать" class="calc__input calc__input_textarea" required></textarea>
        <input type="file" multiple="true" accept="image/*,application/pdf,application/msword" />
        <button class="calc__button" type="submit">Отправить</button>
      </form>
    </content-box>
  </div>
</template>

<script>
import Content from '@/components/content';
import Paragraph from '@/components/paragraph';
export default {
  components: {
    'content-box': Content,
    'text-content': Paragraph,
  },
  methods: {
    test() {
      alert('WOW');
    },
  },
  data() {
    return {
      calc: {
        title: 'Расчёт стоимости',
        text: `Для того, чтобы рассчитать стоимость Вашего заказа, воспользуйтесь специальной формой ниже. Заполните контактные поля и введите информацию
        о заказе в свободной форме (своими словами), и, если это необходимо, прикрепите файл технического задания,
спецификации, эскиза и т.п. После этого наши специалисты отправят Вам расчет либо свяжутся с Вами для уточнения деталей.`,
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
  margin-bottom: 24px;
  height: 30px;
  padding: 15px;
  font-size: 1rem;
  color: #635e5e;
}
.calc__input_textarea {
  height: 150px;
}
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
@media screen and (max-width: 525px) {
  .calc__form {
    width: 90%;
  }
}
</style>
