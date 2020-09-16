<template>
  <section class="call-scale">
    <content-box class="call-scale__container">
      <h2 class="call-scale__title">Вызвать замерщика</h2>
      <line-decor />
      <p class="call-scale__subtitle">Это бесплатно и ни к чему вас не обязывает</p>
      <btn class="call-scale__btn" :btnText="btnText" @popup="popupHandler" />
    </content-box>
    <overlay v-if="popupShownM" @overlayClick="popupHandler" />
    <popup v-if="popupShownM" @closeClick="popupHandler" @closeAfterSubmit="popupHandler">
      <call-measurer-forms />
    </popup>
  </section>
</template>

<script>
import Content from '@/components/content';
import Line from '@/components/line';
import Btn from '@/components/ui/button';
import CallMeasurerForm from '@/components/forms/callMeasurer';
export default {
  components: {
    'content-box': Content,
    'line-decor': Line,
    btn: Btn,
    'call-measurer-forms': CallMeasurerForm,
  },
  data() {
    return {
      btnText: 'Вызвать замерщика',
    };
  },
  computed: {
    popupShownM() {
      return this.$store.getters['popup/getPopupShownM'];
    },
  },
  methods: {
    popupHandler() {
      this.$store.commit('popup/togglePopUpM');
    },
  },
};
</script>

<style scoped>
.call-scale {
  background-image: url('../static/scale.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 0;
}
.call-scale__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.call-scale__title {
  font-size: 42px;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  color: white;
}
.call-scale__subtitle {
  font-size: 22px;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 20px;
  color: white;
}
.call-scale__btn {
  margin-top: 40px;
}
</style>
