<script lang="ts">
import ContentWrapper from '@/components/layout/ContentWrapper.vue'
import CompetenceCard from '@/components/main/CompetenceCard.vue';
import FeedCard from '@/components/main/FeedCard.vue';
import { defineComponent } from 'vue';
import type { Feed } from '@/models/main/Feed';

export default defineComponent({
  components: {
    ContentWrapper,
    CompetenceCard,
    FeedCard,
  },
  data() {
    return {
      photo: new URL('@/assets/photo.jpg', import.meta.url).href,
      feeds: [
        {
          text: 'Недавно сел за работу и прям заработался. Для меня удивительно сколько эмоций мне приносит работа. С этим удтверждением, хочу сказать что я начал новый проект - игру Nordvick. Она будет очень красивая и удивительная, про маленького мальчика. Удастся ли спасти ему деревню? Я сам пока не знаю ответа на этот вопрос и предлагаю вместе окунуться в этот удивительный мир ретро Норвегии и ее суровых сезонов. Подумайте прежде чем сделать выбор, только от вас зависит концовка.',
          date: '13.06.2026',
        },
        {
          text: 'Недавно сел за работу и прям заработался. Для меня удивительно сколько эмоций мне приносит работа. С этим удтверждением, хочу сказать что я начал новый проект - игру Nordvick. Она будет очень красивая и удивительная, про маленького мальчика. Удастся ли спасти ему деревню? Я сам пока не знаю ответа на этот вопрос и предлагаю вместе окунуться в этот удивительный мир ретро Норвегии и ее суровых сезонов. Подумайте прежде чем сделать выбор, только от вас зависит концовка.',
          date: '13.06.2026',
        },
        {
          text: 'Недавно сел за работу и прям заработался. Для меня удивительно сколько эмоций мне приносит работа. С этим удтверждением, хочу сказать что я начал новый проект - игру Nordvick. Она будет очень красивая и удивительная, про маленького мальчика. Удастся ли спасти ему деревню? Я сам пока не знаю ответа на этот вопрос и предлагаю вместе окунуться в этот удивительный мир ретро Норвегии и ее суровых сезонов. Подумайте прежде чем сделать выбор, только от вас зависит концовка.',
          date: '13.06.2026',
        },
      ] as Feed[],
    }
  },
})

</script>

<template>
  <ContentWrapper>
    <div class="main-page">
      <div class="profile">
        <img class="profile__photo" :src="photo" alt="photo">
        <div class="profile__info">
          <div class="profile__name">Бондарь Семен</div>
          <div class="profile__description">Программист, человек, филантроп</div>
        </div>
      </div>
      <div class="content">
        <div class="card">
          <div class="card__text">Самый потрясающий программист, если говорить о том что я умею - это все. Начиная от преподавания и ведения команды за собой, до жесткого кодинга на бэкенде и фронтенде. Вы могли задаться вопросом как же я все успел? Очень просто - развиваться это мое хобби. Я самый прогрессивный и быстро развивающийся человек. Моя страсть - смочь больше чем остальные и быть центром внимания на всех собеседованиях. Но на самом деле я милашка обояшка и вы это сможете подтвердить если возьмете меня на работу.</div>
        </div>
        <div class="competencies">
          <CompetenceCard caption="Опыт работы" second-caption="2 Года" content="01.02.2021-NOW" />
          <CompetenceCard caption="Навыки" content="какие-то языки" />
          <CompetenceCard caption="Более 15 проектов созданных мною" />
        </div>
        <div class="feeds">
          <FeedCard
            v-for="(feed, i) in feeds"
            :key="i"
            :text="feed.text"
            :date="feed.date"
          />
        </div>
      </div>
    </div>
  </ContentWrapper>
</template>

<style lang="scss" scoped>
.main-page {
  padding: 2rem;

  .profile {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 2rem;
    text-align: left;

    &__photo {
      width: 135px;
      height: 135px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
    }

    &__info {
      display: flex;
      flex-direction: column;
    }

    &__name {
      font-size: 24px;
      font-weight: 600;
    }

    &__description {
      font-size: 20px;
      color: $text-dark;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 31px;
    .competencies {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .feeds {
      display: flex;
      flex-direction: column;
      gap: 21px;
    }
    .card {
      border-radius: 20px;
      background-color: rgba(255, 255, 255, 0.1);
    
      &__text {
        padding: 25px 40px;
        font-size: 18px;
        text-align: justify;
      }
    }
  }
}


</style>
