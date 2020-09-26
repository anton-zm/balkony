<template>
  <main class="main">
    <banner class="main__banner" :title="h1" :subtitle="pageSubtitle" />
    <section class="grid">
      <content-box class="grid__container">
        <a :href="`#${card.id}`" v-for="(card, index) in cards" :key="index" class="card">
          <div class="img-container">
            <img :src="card.img" :alt="card.title" class="card__img" />
          </div>
          <h2 class="card__title">{{ card.title }}</h2>
        </a>
      </content-box>
    </section>
    <text-content :title="prepair.title" :text="prepair.text" id="prepair"></text-content>
    <content-box>
      <div class="services__prepair" v-html="prepair.html"></div>
    </content-box>
    <text-content :title="warm.title" :text="warm.text" id="warm"></text-content>
    <action-block class="action__calc" :title="actCalc.title" :subtitle="actCalc.subtitle" :btnText="'Рассчитать'" @btnClick="goToCalc" />
    <text-content :title="cold.title" :text="cold.text" id="cold"></text-content>
    <text-content :title="inside.title" :text="inside.text" id="inside"></text-content>
    <action-block class="action__measure" :title="actMeasure.title" :subtitle="actMeasure.subtitle" :btnText="'Вызвать'" @btnClick="popupHandler" />
    <text-content :title="outside.title" :text="outside.text" id="outside"></text-content>
    <text-content :title="roof.title" :text="roof.text" id="roof"></text-content>
    <text-content :title="improve.title" :text="improve.text" id="improve"></text-content>
    <overlay v-if="popupShownM" @overlayClick="popupHandler" />
    <popup class="popup__measure" v-if="popupShownM" @closeClick="popupHandler" @closeAfterSubmit="popupHandler">
      <call-measurer-forms />
    </popup>
  </main>
</template>

<script>
import Content from '@/components/content';
import ContentTitle from '@/components/content-title';
import Banner from '@/components/banner';
import Paragraph from '@/components/paragraph';
import ActionBlock from '@/components/actionBlock';
import Popup from '@/components/Popup';
import Overlay from '@/components/ui/Overlay';
import CallMeasurerForm from '@/components/forms/callMeasurer';
export default {
  components: {
    'content-box': Content,
    'content-title': ContentTitle,
    banner: Banner,
    'text-content': Paragraph,
    'action-block': ActionBlock,
    popup: Popup,
    overlay: Overlay,
    'call-measurer-forms': CallMeasurerForm,
  },
  computed: {
    popupShownM() {
      return this.$store.getters['popup/getPopupShownM'];
    },
  },
  methods: {
    goToCalc() {
      console.log('CALC');
    },
    popupHandler() {
      this.$store.commit('popup/togglePopUpM');
    },
  },
  data() {
    return {
      cards: [
        {
          img: '../services/warm.jpg',
          title: 'Тёплое остекление',
          id: 'warm',
        },
        {
          img: '../services/cold.jpg',
          title: 'Холодное остекление',
          id: 'cold',
        },
        {
          img: '../services/prepair.jpg',
          title: 'Подготовка проемов',
          id: 'prepair',
        },
        {
          img: '../services/roof.jpg',
          title: 'Каркас с крышей',
          id: 'roof',
        },
        {
          img: '../portfolio/lenina.jpg',
          title: 'Наружная отделка',
          id: 'outside',
        },
        {
          img: '../services/improve.jpg',
          title: 'Расширение балкона',
          id: 'improve',
        },
        {
          img: '../services/inside.jpg',
          title: 'Внутренняя отделка',
          id: 'inside',
        },
      ],
      prepair: {
        title: 'Подготовка к остеклению',
        html: `<p>Подготовка к остеклению – это частичное либо полное формирование оконных проёмов балкона или лоджии. Чаще всего это сварные работы, но возможно использование деревянных конструкций. Главное – чтобы было крепко и статично.
Конструкции остекления должны быть установлены строго по уровню.  Со всех сторон от конструкции должны быть прочные непрерывные  основания проема, в которые есть возможность закрепиться и выполнить монтажный шов. Это могут быть стены, элементы металлического или деревянного каркаса. Если хотя бы с одной стороны от изделия нет условий для крепежа, нужны дополнительные работы по подготовке к остеклению.
Подробнее в статье <a href="https://stvorka34.ru/podgotovitelnye-raboty/" target="_blanc">о подготовительных работах</a>.</p>`,
        text: `Как правило, современные светопрозрачные конструкции, а именно окна, двери, элементы остеклений, имеют сложные механизмы фурнитуры, а также немалый вес. Поэтому они должны устанавливаться только на прочную и статичную поверхность с возможностью закрепления во все стороны проёма. Бывает, что этим требованиям отвечают проёмы для остекления балкона или лоджии и никаких дополнительных работ по подготовке проводить не нужно. Но чаще – проемы не соответствуют. Итак, что же это за работы такие, и когда они нужны, а когда нет? Рассказываем.`,
      },
      warm: {
        title: 'Тёплое остекление',
        text: `"Тёплое" остекление балкона или лоджии - это такое остекление, при котором минимизированы теплопотери через элементы светопрозрачной конструкции.
        В таких конструкциях в качестве заполнения не применяется одинарное стекло (только стеклопакеты или сендвич-панель),
        створки должны иметь надежные контуры уплотнений, обычно не менее двух. Как правило, теплое остекление осуществляется обычными окнами изв ПВХ профилей
        со стеклопакетами и поворотно-откидными створками. При минимальном утеплении стен, пола, потолка балкона или лоджии положительная температура сохраняется даже
         зимой при температуре до -15-25С в зависимости от комплектации`,
      },
      cold: {
        title: 'Холодное остекление',
        text: `"Холодное" остекление балкона или лоджии называется так потому, что такое остекление не обеспечивает полной изоляции от внешней среды.
        Это как правило алюминиевые (реже пластиковые) системы с раздвижными створками и с заполнением в виде одинарного стекла.
        Створки такого остекления не имеют герметичного прижима,
        в качестве уплотнения может использоваться щёточный фетр, который защищает от мусора и частично пыли.  `,
      },
      inside: {
        title: 'Внутренняя отделка',
        text: `После остекления балкона или лоджии, обычно выполняют внутреннюю отделку. Это по сути ремонт помещения с некоторыми нюянсами по утеплению. Все поверхности утепляются, а затем,
        выполняются обычные ремонтные работы как и в любом другом помещении. Соответственно, такая отделка может быть на любой вкус и кошелек.
        Существуют некоторые типовые решения для внутренней отделки балконов, лоджий типовых многоэтажек. Наши специалисты могут о них рассказать при замере.`,
      },
      outside: {
        title: 'Наружная отделка',
        text: `Чаще всего в старых многоквартирных домах балконные парапеты нуждаются в облагораживании. Чтобы придать балкону опрятный вид снаружи,
        парапет обычно покрывают металлическим (реже виниловым) сайдингом. Таким образом мы имеем не только обновленный внешний вид но и значительно упрощаем
        работы по внутренней отделке балкона или лоджии`,
      },
      roof: {
        title: 'Каркас с крышей',
        text: `В случае, если над Вашим балконом нет плиты, но Вы решили застеклить свой балкон, решение - сделать каркас с крышей. Такая необходимость возникает на балконах последний этажей.
        Бывает, что плита сверху есть, но она ветхая или имеет какие-то декоративные выступающие элементы. В этом случае каркас с крышей под такой плитой решает проблему.`,
      },
      improve: {
        title: 'Расширение балкона',
        text: `Бывает, что балкон слишком маленький и заказчик желает увеличить его площадь. И это возможно. В разумных пределах, конечно же. Для этого сооружается металлический
        каркас с крышей, о которым мы писали чуть выше.
        Есть два типа расширения. В одном случае расширяют всю площадь, т.е. увеличивается площадь пола балкона. В этом случае строится не только каркас с крышей, а полный каркас балкона.
        С полами. В другом случае, чаще всего, расширяют не площадь балкона, а его объем. Т.е. площадь пола остается той же, но остекление выносится немного наружу. Получаются широкие подоконники
        и за счет этого появляется дополнительное пространство.`,
      },
      actCalc: {
        title: 'Рассчитать стоимость',
        subtitle: 'Узнайте стоимость остекления Вашего балкона',
      },
      actMeasure: {
        title: 'Вызвать замерщика',
        subtitle: 'Это бесплатно и ни к чему вас не обязывает',
      },
      h1: 'Наши услуги',
      pageSubtitle: 'Мы оказываем весь спектр услуг, связанных с остеклением балконов, лоджий, а также производим все необходимые подготовительные работы',
    };
  },
};
</script>

<style scoped>
.main {
  padding-bottom: 60px;
}
.main__banner {
  background-image: url('../static/services-banner.jpg');
}
.services__prepair {
  color: #635e5e;
}
.grid {
  padding: 60px 0;
}
.grid__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.card {
  padding-bottom: 24px;
  border-radius: 5px;
  text-decoration: none;
  background-color: #f3e9e9;
  transition: 0.3s;
}
.card:hover {
  opacity: 0.7;
}
.img-container {
  width: 100%;
  padding-bottom: 100%;
  position: relative;
}
.card__img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.card__title {
  color: black;
  text-align: center;
  font-weight: 200;
  margin-top: 15px;
}
.action__calc {
  background-image: url('../static/calc.jpg');
}
.action__measure {
  background-image: url('../static/scale.jpg');
}
.popup {
  width: 40%;
}
@media screen and (max-width: 1200px) {
  .grid__container {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 768px) {
  .popup {
    width: 60%;
  }
}
@media screen and (max-width: 600px) {
  .grid__container {
    grid-template-columns: repeat(2, 1fr);
  }
  .card__title {
    font-size: 18px;
  }
}
@media screen and (max-width: 525px) {
  .popup {
    width: 100%;
  }
}
@media screen and (max-width: 425px) {
  .grid__container {
    grid-template-columns: 1fr;
  }
  .card__title {
    font-size: 24px;
  }
}
</style>
