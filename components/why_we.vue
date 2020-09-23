<template>
  <section class="why">
    <text-content :title="why.title" :text="why.text"></text-content>
    <content-box class="why__container">
      <ul class="our-features">
        <li class="our-features__item" v-for="(item, index) in features" :key="index">
          <span class="our-features__heading">{{ item.heading }}</span
          >{{ item.text }}
        </li>
      </ul>
      <img src="../static/rem.jpg" alt="Для нас главное сервис и качество!" class="why__img" />
    </content-box>
  </section>
</template>

<script>
import Content from '@/components/content';
import Paragraph from '@/components/paragraph';
export default {
  components: {
    'content-box': Content,
    'text-content': Paragraph,
  },
  data() {
    return {
      why: {
        title: 'Почему мы?',
        text: 'Фирм по остеклению много, поэтому  порой очень сложно выбрать достойного исполнителя. Так в чем же наши особенности? Чем мы выгодно отличаемся от конкурентов?',
      },
      features: [
        { heading: 'Мы работаем давно', text: ` - наш офис неизменно находится по одному адресу с 2009 года.` },
        { heading: 'Мы работаем честно', text: ' – мы не увеличиваем цен после проведения замера. И еще…У нас не бывает скидок в 50%)))' },
        { heading: 'Мы профессионалы', text: ' – опыт наших ведущих сотрудников монтажа не менее 10 лет' },
        { heading: 'Только лучшие материалы', text: ' – мы официальные представители VEKA в Волгограде и Волгоградской области' },
        { heading: 'Сервис и качество — наш девиз!', text: ' Заключайте договор на дому или вообще где Вам угодно. Расплачивайтесь банковской картой не вставая с кресла.' },
        { heading: 'Гарантия — это не миф.', text: ' Мы честно исполняем свои гарантийные обязательства на протяжении всего гарантийного срока.' },
      ],
    };
  },
};
</script>

<style scoped>
.why {
}
.why__container {
  display: flex;
  flex-direction: row;
}
.our-features {
  color: #635e5e;
  list-style-image: url('../static/check2.jpg');
}
.our-features__item {
  margin-bottom: 24px;
}
.our-features__heading {
  font-weight: bold;
}
.why__img {
  width: 30%;
}
</style>
