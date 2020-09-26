<template>
  <section class="work">
    <content-title :title="worktitle" />
    <content-box class="work__stages">
      <div class="work__stage">
        <h3 class="stage__title">Обращение</h3>
        <p class="stage__text">
          Вы звоните нам по телефону <span class="our-number">8-917-338-36-73</span> или используете любую контактную форму с нашего сайта. Наши специалисты проконсультируют Вас по
          всем вопросам, и в т.ч. сориентируют по ценам.
        </p>
      </div>
      <div class="work__stage work__stage_grey">
        <h3 class="stage__title">Замер</h3>
        <p class="stage__text">
          В удобное для Вас время наш специалист прибывает к Вам для снятия точных размеров и более детальной консультации. Замер — мероприятие бесплатное и ни к чему Вас не
          обязывающее!
        </p>
      </div>
      <div class="work__stage work__stage_grey">
        <h3 class="stage__title">Договор</h3>
        <p class="stage__text">Мы работаем официально и с гарантией. Поэтому мы всегда заключаем договор. Договор может быть заключен там, где Вам удобно.</p>
      </div>
      <div class="work__stage">
        <h3 class="stage__title">Монтаж</h3>
        <p class="stage__text">В удобное для Вас время прибывает монтажная бригада и устанавливает остекление. Либо проводит другие работы (подготовительные работы, отделка)</p>
      </div>
    </content-box>
  </section>
</template>

<script>
import ContentTitle from '@/components/content-title';
import Content from '@/components/content';
export default {
  components: {
    'content-box': Content,
    'content-title': ContentTitle,
  },
  data() {
    return {
      worktitle: 'Как мы работаем?',
    };
  },
};
</script>

<style scoped>
.work {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  padding: 100px 0;
}

.work__stages {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 60px;
}
.work__stage {
  padding: 100px;
  text-align: center;
}
.work__stage_grey {
  background-color: #cac3c3;
}
.stage__title {
  font-size: 32px;
  font-weight: 200;
}
.stage__text {
  margin-top: 40px;
  line-height: 1.5;
}
.our-number {
  color: #546cf7;
}
@media screen and (max-width: 1024px) {
  .work__stage {
    padding: 40px;
  }
}
@media screen and (max-width: 768px) {
  .work__stage {
    padding: 20px;
  }
  .stage__title {
    font-size: 26px;
  }
}
@media screen and (max-width: 530px) {
  .work__stage {
    padding: 20px;
  }
  .work__stages {
    display: flex;
    flex-direction: column;
  }
  .work__stage_grey {
    background-color: #f1f1f1;
  }
}
</style>
