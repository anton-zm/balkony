<template>
  <div class="main">
    <content-title class="title" :title="'Наши работы'" />
    <content-box class="main__content">
      <div class="grid">
        <div class="card" v-for="(item, index) in objects" :key="index" :id="item.id" @click="showObjectPopup(item.img)">
          <img class="card__img" :src="item.img" :alt="item.title" />
          <div class="card-overlay">
            <h2 class="card__title">{{ item.title }}</h2>
            <div class="card__line"></div>
            <p class="card__subtitle">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </content-box>
    <overlay v-if="popupShown" @overlayClick="popupHandler" />
    <popup class="portfolio__popup" v-if="popupShown" @closeClick="popupHandler" @closeAfterSubmit="popupHandler">
      <div class="img-container">
        <img :src="popup.img" :alt="popup.title" class="popup__img" />
      </div>
    </popup>
  </div>
</template>

<script>
import Content from '@/components/content';
import ContentTitle from '@/components/content-title';
import Overlay from '@/components/ui/Overlay';
import Popup from '@/components/Popup';
export default {
  methods: {
    showObjectPopup(img) {
      this.popup.img = img;
      this.popupHandler();
    },
    popupHandler() {
      this.$store.commit('popup/togglePopUp');
    },
  },
  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupShown'];
    },
  },
  components: {
    'content-box': Content,
    'content-title': ContentTitle,
    overlay: Overlay,
    popup: Popup,
  },
  data() {
    return {
      popup: {
        img: '',
      },
      objects: [
        {
          img: '../portfolio/gold-oak.jpg',
          id: 'img1',
          title: 'Сложное остекление',
          description: 'Ламинация "Золотой дуб", VEKA. Сложная конфигурация проёмов.',
        },
        {
          img: '../portfolio/morozova.jpg',
          id: 'img2',
          title: 'Остекление vs газовая труба',
          description: 'Остекление лоджий в новостройке. Сложность была в проходе газовой трубы через плоскость остекления.',
        },
        {
          img: '../portfolio/hrush.jpg',
          id: 'img3',
          title: 'Балкон в панельном доме',
          description: 'Полный демонтаж парапета и полное остекление балкона в обычной панельной 5ти этажке',
        },
        {
          img: '../portfolio/bulvar.jpg',
          id: 'img4',
          title: 'Остекление лоджии',
          description: 'Обычное простое остекление лоджий в новостройке. Был произведен демонтаж металлических перил.',
        },
        {
          img: '../portfolio/dolina.jpg',
          id: 'img5',
          title: 'Остекление балкона',
          description: 'Остекление балкона в новостройке. Сложность была в проходе газовой трубы через плоскость остекления.',
        },
        {
          img: '../portfolio/micron.jpg',
          id: 'img6',
          title: 'Панорамное остекление',
          description: 'Отказ от "застройного" остекления и установка качественного. Тонировка "бронза-полутон". Работы производились на этапе стройки дома.',
        },
        {
          img: '../portfolio/duplex.jpg',
          id: 'img7',
          title: 'Лоджии в дюплексе',
          description: 'Замена остекления от застройщика на нормальное в двухуровневой квартире',
        },
        {
          img: '../portfolio/nov8.jpg',
          id: 'img8',
          title: 'Остекление прямой лоджии',
          description: 'Замена остекления от застройщика на нормальное))',
        },
        {
          img: '../portfolio/dvin.jpg',
          id: 'img9',
          title: 'Эркерная лоджия',
          description: 'Остекление лоджии с ломаными углами. Профильная система VEKA EUROLINE.',
        },
        {
          img: '../portfolio/ds.jpg',
          id: 'img10',
          title: 'Ламинация и тонировка',
          description:
            'Замена "холодного" остекления от застройщика на "тёплое" от нас. Нужно было подобрать цвет профиля. В качестве заполнения - Теплопакеты DS Red Gold и Clear Diamond',
        },
        {
          img: '../portfolio/a100.jpg',
          id: 'img11',
          title: 'Панорамное остекление',
          description: 'Остекление "в пол" в новостойке. Теплопакеты DS от STIS, профильная система VEKA PROLINE',
        },
        {
          img: '../portfolio/a100a.jpg',
          id: 'img12',
          title: 'Панорамное остекление',
          description: 'Остекление "в пол" в новостойке. Теплопакеты DS от STIS, профильная система VEKA PROLINE',
        },
        {
          img: '../portfolio/bird.jpg',
          id: 'img13',
          title: 'Лоджия в панельном доме',
          description: 'Остекление типовой лоджии в панельном 9ти этажном доме. ',
        },
        {
          img: '../portfolio/shuruhina.jpg',
          id: 'img14',
          title: 'Балкон и каркас',
          description:
            'Необычное остекление. В старых двухэтажках нет верхних плит над балконами, поэтому пришлось построить каркас с крышей, облагородить парапет снаружи, а потом остеклить',
        },
        {
          img: '../portfolio/bb.jpg',
          id: 'img15',
          title: 'Балконный блок',
          description: 'Выход на лоджию. Работа "под ключ", с отделкой откосов сэндвич-панелями. Профильная система VEKA EUROLINE.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  margin: 0 auto;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 50px;
  margin-top: 60px;
  gap: 3px;
}
.card {
  position: relative;
}
.card:hover > .card-overlay {
  visibility: visible;
}
.card__img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  color: white;
  visibility: hidden;
  cursor: pointer;
  border: 3px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.card__line {
  height: 1px;
  background: white;
  width: 70%;
  margin-top: 10px;
}
.card__subtitle {
  text-align: center;
}
.card__title {
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 200;
  text-align: center;
}
.portfolio__popup {
  max-width: 80%;
  max-height: 90vh;
}
.img-container {
  max-width: 1200px;
  max-height: 80vh;
  border: 1px solid black;
}
.popup__img {
  width: 100%;
}
.popup__title {
}
.popup__text {
}

/* grid */

/* покрышкина */
#img1 {
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 3;
}
/* морозова */
#img2 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 5;
}
/* краснопол */
#img3 {
  grid-column-start: 7;
  grid-column-end: 9;
  grid-row-start: 12;
  grid-row-end: 19;
}
/* булПоб15 */
#img4 {
  grid-column-start: 4;
  grid-column-end: 7;
  grid-row-start: 14;
  grid-row-end: 19;
}

/* родниковая долина */
#img5 {
  grid-row-start: 5;
  grid-row-end: 10;
  grid-column-start: 5;
  grid-column-end: 7;
}
/* микрон */
#img6 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 14;
  grid-row-end: 20;
}
/* дюплекс */
#img7 {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 7;
}
/* нов8 */
#img8 {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 7;
  grid-row-end: 9;
}
/* двинская */
#img9 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 9;
  grid-row-end: 14;
}
/* дс */
#img10 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 9;
}
/* а100 */
#img11 {
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 19;
  grid-row-end: 24;
}
/* а100a */
#img12 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 20;
  grid-row-end: 24;
}
/* птичка */
#img13 {
  grid-column-start: 5;
  grid-column-end: 7;
  grid-row-start: 10;
  grid-row-end: 14;
}
/* шурухина */
#img14 {
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 19;
  grid-row-end: 24;
}
/* бб */
#img15 {
  grid-column-start: 7;
  grid-column-end: 9;
  grid-row-start: 5;
  grid-row-end: 12;
}
</style>
