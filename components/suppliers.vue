<template>
  <section class="suppliers">
    <content-title :title="title" />
    <div class="suppliers__container">
      <div class="suppliers__logo-container"><img src="../static/veka.jpg" alt="VEKA" class="suppliers__logo" /></div>
      <div class="suppliers__logo-container"><img src="../static/REHAU.png" alt="REHAU" class="suppliers__logo" /></div>
      <div class="suppliers__logo-container"><img src="../static/Brusbox.jpg" alt="BRUSBOX" class="suppliers__logo" /></div>
      <div class="suppliers__logo-container"><img src="../static/roto.jpg" alt="ROTO" class="suppliers__logo" /></div>
      <div class="suppliers__logo-container"><img src="../static/si.jpg" alt="Siegenia-AUBI" class="suppliers__logo" /></div>
      <div class="suppliers__logo-container"><img src="../static/danke.jpg" alt="DANKE" class="suppliers__logo" /></div>
      <div class="suppliers__logo-container"><img src="../static/cryst.jpg" alt="Кристаллит" class="suppliers__logo" /></div>
      <div class="suppliers__logo-container"><img src="../static/schlegel.gif" alt="Schlegel" class="suppliers__logo" /></div>
      <div class="suppliers__logo-container"><img src="../static/stis.jpg" alt="STIS" class="suppliers__logo" /></div>
      <div class="suppliers__logo-container"><img src="../static/soudal.png" alt="Soudal" class="suppliers__logo" /></div>
      <div class="suppliers__logo-container"><img src="../static/hilti.jpg" alt="HILTI" class="suppliers__logo" /></div>
    </div>
  </section>
</template>

<script>
import Content from '@/components/content';
import ContentTitle from '@/components/content-title';
export default {
  components: {
    'content-box': Content,
    'content-title': ContentTitle,
  },
  data() {
    return {
      title: 'Наши поставщики',
    };
  },
};
</script>

<style scoped>
.suppliers {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.suppliers__container {
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
}
.suppliers__logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.suppliers__logo {
  width: 120px;
  transition: 0.3s;
}
.suppliers__logo:hover {
  transform: scale(1.2);
}
</style>
