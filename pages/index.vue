<template>
  <main class="main">
    <banner />
    <text-content :title="types.title" :text="types.text"></text-content>
    <numbers />
    <text-content :title="tuning.title" :text="tuning.text"></text-content>
    <why-we />
    <action-block class="action__pens" :title="actPens.title" :subtitle="actPens.subtitle" :btnText="'Вызвать замерщика'" @btnClick="popupHandler" />
    <text-content :title="howmuch.title" :text="howmuch.text"></text-content>
    <action-block class="action__calc" :title="actCalc.title" :subtitle="actCalc.subtitle" :btnText="'Рассчитать'" @btnClick="goToCalc" />
    <we-work />
    <action-block class="action__calc" :title="actMeasure.title" :subtitle="actMeasure.subtitle" :btnText="'Вызвать'" @btnClick="popupHandler" />
    <feedbacks />
    <suppliers />
    <overlay v-if="popupShownM" @overlayClick="popupHandler" />
    <popup v-if="popupShownM" @closeClick="popupHandler" @closeAfterSubmit="popupHandler">
      <call-measurer-forms />
    </popup>
  </main>
</template>

<script>
import Banner from '@/components/banner';
import Paragraph from '@/components/paragraph';
import Numbers from '@/components/numbers';
import Why from '@/components/why_we';
import Work from '@/components/howWeWork';
import Suplliers from '@/components/suppliers';
import ActionBlock from '@/components/actionBlock';
import Feedbacks from '@/components/feedbacks';
import CallMeasurerForm from '@/components/forms/callMeasurer';

export default {
  components: {
    banner: Banner,
    'text-content': Paragraph,
    numbers: Numbers,
    'why-we': Why,
    'we-work': Work,
    suppliers: Suplliers,
    'action-block': ActionBlock,
    'call-measurer-forms': CallMeasurerForm,
    feedbacks: Feedbacks,
  },
  methods: {
    goToCalc() {
      console.log('CALC');
    },
    popupHandler() {
      this.$store.commit('popup/togglePopUpM');
    },
  },
  computed: {
    popupShownM() {
      return this.$store.getters['popup/getPopupShownM'];
    },
  },
  data() {
    return {
      actCalc: {
        title: 'Рассчитать стоимость',
        subtitle: 'Узнайте стоимость остекления Вашего балкона',
      },
      actPens: {
        title: 'Всем пенсионерам - скидки!',
        subtitle: 'Мы ценим Ваши заслуги!',
      },
      actMeasure: {
        title: 'Вызвать замерщика',
        subtitle: 'Это бесплатно и ни к чему вас не обязывает',
      },
      types: {
        title: 'Типы остекления',
        text:
          'Остекление балконов и лоджий в Волгограде – довольно популярный вид работ, призванный увеличить зону комфортного проживания как в городских квартирах, так и в частных домах. В зависимости от назначения нового помещения балкона или лоджии и предъявляемым к нему требованиям осуществляется теплое остекление или холодное остекление. Варианты остекления могут быть самые разнообразные. От остекления балкона в хрущевке до панорамного остекления от пола до потолка в новостройке или коттедже. Расширение балкона с последующим остеклением также довольно частая услуга в нашем городе.',
      },
      tuning: {
        title: 'Отделка балконов и лоджий',
        text:
          'Как правило, наряду с остеклением производятся работы по наружной и внутренней отделке балкона или лоджии. Наружная отделка балкона производится для декорации парапета, а также может служить защитой от ветра и холода. Внутренняя отделка балкона или лоджии – это утепление потолка, стен, пола и парапета, а также декоративные ремонтные работы. Тут все зависит от Вашей фантазии.',
      },
      howmuch: {
        title: 'Сколько стоит застеклить балкон?',
        text:
          'Цены на остекление балконов и лоджий могут очень сильно варьироваться в зависимости от сложности работ, а также от комплектации изделий (профиль, стеклопакет и т.д.). Это может быть типовое остекление балкона, каких тысячи, а может быть сложная работа в альпинистском снаряжении. Наши специалисты всегда помогут выбрать именно тот вариант, который необходим, и оградят Вас от лишних трат.',
      },
    };
  },
};
</script>

<style>
.links {
  padding-top: 15px;
}
.action__calc {
  background-image: url('../static/scale.jpg');
}
.action__pens {
  background-image: url('../static/money.jpg');
}
</style>
