<template>
  <section class="suppliers">
    <content-box class="suppliers__content">
      <content-title :title="'Наши поставщики'" />
      <div class="suppliers__container">
        <div v-for="(logo, index) in logos" :key="index" class="suppliers__logo-container">
          <img :src="logo.img" :alt="logo.alt" class="suppliers__logo" />
        </div>
      </div>
    </content-box>
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
      logos: [
        {
          img: './veka.jpg',
          alt: 'VEKA',
        },
        {
          img: './REHAU.png',
          alt: 'REHAU',
        },
        {
          img: './Brusbox.jpg',
          alt: 'Brusbox',
        },
        {
          img: './roto.jpg',
          alt: '',
        },
        {
          img: './si.jpg',
          alt: 'ROTO',
        },
        {
          img: './danke.jpg',
          alt: 'Danke',
        },
        {
          img: './cryst.jpg',
          alt: 'Кристаллит',
        },
        {
          img: './schlegel.gif',
          alt: 'Schlegel',
        },
        {
          img: './stis.jpg',
          alt: 'STIS',
        },
        {
          img: './soudal.png',
          alt: 'Soudal',
        },
        {
          img: './hilti.jpg',
          alt: 'Hilti',
        },
      ],
    };
  },
};
</script>

<style scoped>
.suppliers {
  padding: 100px 0;
}
.suppliers__content {
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
