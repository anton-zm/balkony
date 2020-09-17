<template>
  <section class="feedbacks">
    <content-box class="feedbacks__content">
      <content-title :title="'Отзывы о нашей работе'" />
      <div class="feedbacks__container">
        <div v-for="(feedback, index) in feedbacks" :key="index" class="feedback">
          <img :src="feedback.img" :alt="feedback.author" class="feedback__img" />
          <h3 class="feedback__title">{{ feedback.author }}</h3>
          <p class="feedback__company">{{ feedback.company }}</p>
          <p class="feedback__text">{{ feedback.text }}}</p>
          <span class="feedback__link" @click="addDataToPopup(feedback.img, feedback.author, feedback.company, feedback.text)">Читать отзыв...</span>
        </div>
      </div>
    </content-box>
    <overlay v-if="feedbackIsOpened" @overlayClick="showPopup" />
    <popup v-if="feedbackIsOpened" class="fedback__popup" @closeClick="showPopup">
      <div class="popup__column">
        <img :src="popup.img" :alt="popup.author" class="feedback__popup-img" />
        <h3 class="feedback__title">{{ popup.author }}</h3>
        <p class="feedback__company">{{ popup.company }}</p>
      </div>
      <div class="popup__column">
        <p class="feedback__popup-text">{{ popup.text }}</p>
      </div>
    </popup>
  </section>
</template>

<script>
import Content from '@/components/content';
import ContentTitle from '@/components/content-title';
import Popup from '@/components/Popup';
import Overlay from '@/components/ui/Overlay';
export default {
  methods: {
    showPopup() {
      this.feedbackIsOpened = !this.feedbackIsOpened;
    },
    addDataToPopup(img, author, company, text) {
      console.log(author);
      this.showPopup();
      this.popup.img = img;
      this.popup.author = author;
      this.popup.company = company;
      this.popup.text = text;
    },
  },

  components: {
    'content-box': Content,
    'content-title': ContentTitle,
    popup: Popup,
    overlay: Overlay,
  },
  data() {
    return {
      feedbackIsOpened: false,
      popup: {
        img: '',
        author: '',
        company: '',
        text: '',
      },
      feedbacks: [
        {
          img: './vasilkov.jpg',
          author: 'Андрей Васильков',
          company: 'ФНБА России',
          text: `Обратился по поводу остекления лоджии в октябре 2017 года. До этого был в нескольких других компаниях. Сразу понравился подход директора Змановского Антона Алексеевича. С ним можно побеседовать лично, обсудить варианты и сразу получить окончательные расчёты. У него собственная бригада и транспорт, поэтому установка выполняется в день доставки окон и можно договориться на конкретный час.
Качество самих окон превзошло ожидания. Монтаж выполнили в заранее согласованный день и очень оперативно, даже с учётом специфической геометрии балкона. У бригады есть свои ноу-хау, поскольку они знают не только нормативы, но и реальные ситуации в строительстве.
Во время установки выяснилось, что в комплекте нет нащельников нужной длины. Извинились и приехали на следующий день. Доустановили их, заодно перепенив участок шва, который мне показался неудачным. Кстати, пена используется одна из лучших – ProfFlex 65 Plus.
После уборки я обнаружил небольшое нарушение технологии монтажа эркерных соединений. Сообщил об этом, монтажники сразу приехали и переделали без вопросов. Никаких заявлений, разборок, отмазок – вот тут есть косяк, сейчас всё исправим. Чисто деловой подход и реальная забота о своей репутации.
Пишу отзыв спустя год и три месяца. Окна прекрасно показали себя зимой. Никаких продуваний, никакого конденсата. Фурнитура работает чётко (чищу и смазываю её средствами из подаренного при заказе набора). Без утепления балкона разница с внешней температурой была в среднем +12°C. При наличии обогревателя (даже работающего на минимальной мощности) она составляет уже +16°C и выше – как сам раскочегаришь. Отражение стеклопакета в ИК-спектре и «тёплая рамка» действительно сокращают теплопотери. Внутреннее стекло остаётся тёплым даже когда за окном ниже ноля. После утепления балкона там вообще будет как в квартире – хоть рабочий кабинет делай.
Выражаю искреннюю благодарность бригаде монтажников и лично Антону Алексеевичу за серьёзный подход и качественную работу!`,
        },
        {
          img: './stal.jpg',
          author: 'Мария Cталь',
          company: 'ВТБ',
          text: `Столкнулась с необходимостью поменять окна в квартире. На рынке присутствует множество фирм по установке окон. Блиц-опрос по цене вопроса выявил несколько привлекательных предложений. Однако, озвученная стоимость менялась на замере. Какие-то фирмы по телефону сознательно не упоминали стоимость обязательных услуг. В итоге финальное предложение точно совпало с озвученным по телефону. Качественный и быстрый монтаж, грамотные ответы на все эксплуатационные вопросы, вывоз мусора. Финальная услуга просто поразила! Мне оставалось лишь вымыть пол и поставить цветы на новый подоконник. Сотрудничеством со «Светочем» очень довольна! Добросовестный и надежный партнер, профессионалы в своем деле.  `,
        },
        {
          img: './elena_babkina.jpg',
          author: 'Елена Бабкина',
          company: 'Театр юного зрителя',
          text: `Очень благодарна за качественно изготовленное и качественно установленное окно! Быстро, аккуратно, безо всяких проблем, доброжелательные сотрудники, одним словом — браво!`,
        },
        {
          img: './alexey.jpg',
          author: 'Алексей Крупнов',
          company: 'Предприниматель',
          text: `Обращался в компанию для изготовления и установки окон в частном доме. Отличный сервис.
Начиная с консультации, где подробно предлагаются различные варианты решения задачи клиента. Сама консультация при этом проводится специалистом со знанием всего технологического цикла производства окон, включая нюансы установки. Заканчивая качественным монтажем.
Ну и конечно качество продукции Veka не требует дополнительных комментариев.
Рекомендую всем, как минимум, проконсультироваться в компании — не разочаруетесь!
Огромное спасибо всем сотрудникам!`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.feedbacks {
  padding: 60px 0;
}
.feedbacks__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.feedbacks__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 80px;
}
.feedback {
  background-color: #f1f1f1;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.feedback__title {
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-size: 22px;
  font-weight: normal;
  margin-top: 20px;
  color: #635e5e;
}
.feedback__img {
  border-radius: 50%;
  width: 80%;
}
.feedback__company {
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: normal;
  margin-top: 10px;
  color: #817b7b;
}
.feedback__text {
  margin-top: 20px;
  text-align: justify;
  color: #635e5e;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.3;
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-align: start;
  padding-bottom: 0;
}
.feedback__link {
  color: #535b86;
  margin-top: 20px;
  cursor: pointer;
}
.fedback__popup {
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.feedback__popup-img {
  width: 150px;
  height: 150px;
  border-radius: 8px;
}

.popup__column {
  margin-right: 20px;
}
.feedback__popup-text {
  text-align: justify;
  color: #635e5e;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.3;
  font-weight: normal;
}
</style>
